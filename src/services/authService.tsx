import client, { setClientHeaders } from 'services/axios';
import { setRefreshToken, clearRefreshToken } from '../hooks/useRefreshToken'

const AuthService = {
    SignInWithEmailAndPassword: async (email: string, password: string) => {
        try {
            const res = await client.post(process.env.REACT_APP_API_URL + 'auth/signin',
                {
                    email: email,
                    password: password
                }
            );
            const { accessToken, refreshToken } = res.data;
            setClientHeaders(accessToken);
            setRefreshToken(refreshToken);
            return {
                user: true
            }
        } catch (err: unknown) {
            if (err instanceof Error) {
                return {
                    error: err.message,
                }
            } else {
                return {
                    error: "error"
                }
            }
        }
    },

    LoginOut: async () => {
        try {
            clearRefreshToken();
            await client.interceptors.request.use(
                function (config) {
                    if (config.headers !== undefined) {
                        config.headers["accessToken"] = '';
                        return config
                    }
                }
            )
            return {
                user: false
            }
        } catch (err: unknown) {
            if (err instanceof Error) {
                return {
                    error: err.message,
                }
            } else {
                return {
                    error: "error"
                }
            }
        }
    }
}

export default AuthService;