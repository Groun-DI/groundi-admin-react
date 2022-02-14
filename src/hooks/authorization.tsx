import client, { setClientHeaders } from 'services/axios';
import { Cookies } from 'react-cookie';

type LoginType = {
    email: string,
    password: string
}

export const GetRefreshToken = () => {
    const cookies = new Cookies();
    return cookies.get("refreshToken")
}

export const SetRefreshToken = (refreshToken: string) => {
    const cookies = new Cookies();
    cookies.set("refreshToken", refreshToken, {
        path: '/',
        secure: true,
        httpOnly: true
    })
}

export const ClearRefreshToken = () => {
    const cookies = new Cookies();
    cookies.remove("refreshToken");
}

export const HandleLogin = async ({ email, password }: LoginType) => {
    const res = await client.post(
        process.env.REACT_APP_API_URL + 'auth/signin',
        {
            email: email,
            password: password
        }
    );

    if (res) {
        const { accessToken, refreshToken } = res.data;
        setClientHeaders(accessToken);
        SetRefreshToken(refreshToken);
        return res.data;
    }
    return "not res"
}

export const HandleLogout = async () => {
    ClearRefreshToken();
    client.interceptors.request.use(
        function (config) {
            if (config.headers !== undefined) {
                config.headers["accessToken"] = '';
                return config
            }
        }
    )
    return true
}