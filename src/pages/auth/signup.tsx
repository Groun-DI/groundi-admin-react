import { useAppSelector } from "hooks/redux";

const AuthSignUpPage = () => {
    const token = useAppSelector(state => state.token.accessToken);
    const isTokenIssue = useAppSelector(state => state.token.isTokenIssue);
    console.log(token);
    console.log(isTokenIssue);

    return (
        <div>

        </div>
    )
}

export default AuthSignUpPage;