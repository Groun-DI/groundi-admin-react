import { createContext, useContext, useState } from "react";
import AuthService from "services/authService";

interface Value {
    user: boolean | undefined,
    setUser: any,
    error: string,
    SignInWithEmailAndPassword: (email: string, password: string) => Promise<any>,
    LoginOut: () => Promise<any>,
}

const defaultValue: Value = {
    user: undefined,
    setUser: undefined,
    error: "",
    SignInWithEmailAndPassword: (email: string, password: string) => {
        return Promise.resolve('SignInWithEmailAndPassword');
    },
    LoginOut: () => { return Promise.resolve('LoginOut') }
}

export const authContext = createContext<Value>(defaultValue);

export const useAuth: any = () => {
    return useContext(authContext);
}

export const AuthProvider = (props: { children: React.ReactNode }) => {
    const [user, setUser] = useState<boolean>(false);
    const [error, setError] = useState('');

    const SignInWithEmailAndPassword = async (email: string, password: string) => {
        const { error, user } = await AuthService.SignInWithEmailAndPassword(email, password);
        setUser(user ?? false);
        setError(error ?? "");
    }

    const LoginOut = async () => {
        await AuthService.LoginOut();
        setUser(false);
    }

    const value = { user, setUser, error, SignInWithEmailAndPassword, LoginOut, };

    return <authContext.Provider value={value} {...props} />
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { AuthProvider, useAuth, authContext };