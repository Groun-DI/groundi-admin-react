import { Cookies } from 'react-cookie';

export const getRefreshToken = () => {
    const cookies = new Cookies();
    return cookies.get("refreshToken")
}

export const setRefreshToken = (refreshToken: string) => {
    const cookies = new Cookies();
    cookies.set("refreshToken", refreshToken, {
        path: '/'
    })
}

export const clearRefreshToken = () => {
    const cookies = new Cookies();
    cookies.remove("refreshToken");
}
