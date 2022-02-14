import { useAppSelector } from "hooks/redux";

const SignUp = () => {
    const token = useAppSelector(state => state.token.accessToken);
    const isTokenIssue = useAppSelector(state => state.token.isTokenIssue);
    console.log(token);
    console.log(isTokenIssue);

    return (
        <div>

        </div>
    )
}

export default SignUp;