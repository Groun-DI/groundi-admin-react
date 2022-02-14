import axios from 'axios'
import { GetRefreshToken, SetRefreshToken } from '../hooks/authorization'

const client = axios.create(
    {
        baseURL: process.env.REACT_APP_API_URL,
    }
)

export const setClientHeaders = (accessToken: string) => {
    client.interceptors.request.use(
        function (config) {
            if (config.headers !== undefined) {
                if (!accessToken) {
                    config.headers.Authorization = '';
                    return config
                }
                config.headers.Authorization = `Bearer ${accessToken}`;
                return config
            }
        }
    )
};


client.interceptors.response.use(
    function (response) {
        return response
    },
    async function (error) {
        if (error.response && error.response.status === 401) {
            try {
                const originalRequest = error.config;
                const orignRefreshToken = GetRefreshToken();
                if (orignRefreshToken) {
                    const data = await client.post('auth/refresh', {
                        refreshToken: orignRefreshToken
                    });
                    if (data.data) {
                        const { accessToken, refreshToken } = data.data;
                        SetRefreshToken(refreshToken);
                        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
                        return originalRequest;
                    }
                    return Promise.reject(error)
                }
            } catch (error) {
                console.log(error);
            }
            return Promise.reject(error)
        }
        return Promise.reject(error)
    }
)

export default client;