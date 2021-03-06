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
            error.email = '?????? ???????????????';
        } else if (!values.email.includes('@')) {
            error.email = '????????? ????????? ?????????????????????.';
        }
        if (!values.password) {
            error.password = '?????? ???????????????';
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
                        <Flex layout="c">
                            <img src="/svg/logo.svg" alt="groundi logo" />
                            <Typography.Title3 weight={700}>?????????</Typography.Title3>
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
                                label="????????? ?????? ??????"
                                name="password"
                                value={formValues.password}
                                onChange={handleChange}
                            />
                            <Button>?????????</Button>
                        </form>
                    </BoxContent>
                    <BoxFooter>
                        <Flex>
                            <Link to="/auth/signup">????????????</Link>
                            <Link to="/auth/signin/find-email">????????? ??????</Link>
                            <Link to="/auth/signin/find-password">???????????? ??????</Link>
                        </Flex>
                    </BoxFooter>
                </BoxContainer>
            </BoxWrapper>
        </Wrapper >
    )
}

export default AuthSignInPage;