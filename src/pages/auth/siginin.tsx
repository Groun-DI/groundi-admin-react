import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Wrapper from 'components/style/Wrapper';
import { BoxContainer, BoxContent, BoxFooter, BoxHeader, BoxWrapper } from 'components/style/Auth';
import Flex from 'components/style/Flex';
import Button from 'components/style/Button';
import Typography from 'components/style/Typography';
import Input from 'components/style/Input';
import Lock from 'images/svg/lock.svg';
import Profile from 'images/svg/profile.svg';
import { useEffect, useState } from 'react';
import CheckBox from 'components/style/CheckBox';
import client, { setClientHeaders } from 'services/axios';
import { setRefreshToken } from 'hooks/useRefreshToken';

type Values = {
    email: string,
    password: string
}
const AuthSignInPage = () => {
    const initialValues: Values = { email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState(initialValues);
    const navigate = useNavigate();

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        try {
            const res = await client.post(process.env.REACT_APP_API_URL + 'auth/signin', formValues);
            const { accessToken, refreshToken } = res.data;
            setClientHeaders(accessToken);
            setRefreshToken(refreshToken);
            if (res.data) navigate('/');
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
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const validate = (values: Values) => {
        const error = initialValues;
        if (!values.email) {
            error.email = '필수 항목입니다';
        } else if (!values.email.includes('@')) {
            error.email = '이메일 형식이 잘못되었습니다.';
        }
        if (!values.password) {
            error.password = '필수 항목입니다';
        }
        return error;
    }

    useEffect(() => {
        console.log(formErrors);
    }, [formErrors])

    return (
        <Wrapper>
            <BoxWrapper>
                <BoxContainer>
                    <BoxHeader>
                        <Flex layout="column">
                            <img src="/svg/logo.svg" alt="groundi logo" />
                            <Typography.Title3 weight={700}>로그인</Typography.Title3>
                        </Flex>
                    </BoxHeader>
                    <BoxContent>
                        <form onSubmit={onSubmit}>
                            <Input
                                type="text"
                                placeholder="groundi@groundi.com"
                                name="email"
                                value={formValues.email}
                                onChange={handleChange}
                                icon={Profile}
                            />
                            <p>{formErrors.email}</p>
                            <Input
                                type="password"
                                placeholder="groundi@groundi.com"
                                name="password"
                                value={formValues.password}
                                onChange={handleChange}
                                icon={Lock}
                            />
                            <p>{formErrors.password}</p>
                            <CheckBox
                                label="로그인 상태 유지"
                                name="password"
                                value={formValues.password}
                                onChange={handleChange}
                            />
                            <Button>로그인</Button>
                        </form>
                    </BoxContent>
                    <BoxFooter>
                        <Flex>
                            <Link to="/auth/signup">회원가입</Link>
                            <Link to="/auth/signin/find-email">이메일 찾기</Link>
                            <Link to="/auth/signin/find-password">비밀번호 찾기</Link>
                        </Flex>
                    </BoxFooter>
                </BoxContainer>
            </BoxWrapper>
        </Wrapper >
    )
}

export default AuthSignInPage;