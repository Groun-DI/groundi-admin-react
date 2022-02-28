import axios, { AxiosInstance } from 'axios'
import { getRefreshToken, setRefreshToken } from '../hooks/useRefreshToken'

const client: AxiosInstance = axios.create(
    {
        baseURL: process.env.REACT_APP_API_URL,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJya2RtczA1MjFAbmF2ZXIuY29tIiwicGhvbmVOdW1iZXIiOiIwMjA0MzA1MjM0NiIsImlhdCI6MTY0NjAzMDgwMCwiZXhwIjoxNjQ2NjM1NjAwfQ.4fioe_BGH70XpKprHcH3-wdXPqT9e5Ltl28oFr-2eZs"
        }
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
                const orignRefreshToken = getRefreshToken();
                if (orignRefreshToken) {
                    const data = await client.post('auth/refresh', {
                        refreshToken: orignRefreshToken
                    });
                    if (data.data) {
                        const { accessToken, refreshToken } = data.data;
                        setRefreshToken(refreshToken);
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