import { useNavigate } from "react-router-dom";
import Wrapper from 'components/style/Wrapper';
import { BoxContainer, BoxContent, BoxHeader, BoxWrapper } from 'components/style/Auth';
import Flex from 'components/style/Flex';
import Button from 'components/style/Button';
import Typography from 'components/style/Typography';
import Input from 'components/style/Input';
import Lock from 'images/svg/lock.svg';
import Profile from 'images/svg/profile.svg';
import { useEffect, useState } from 'react';
import client, { setClientHeaders } from 'services/axios';
import { setRefreshToken } from 'hooks/useRefreshToken';

type Values = {
    phoneNumber: string,
    email: string,
    password: string,
    name: string,
    code: string
}
const AuthSignUpPage = () => {
    const initialValues: Values = { email: "", password: "", phoneNumber: "", name: "", code: "" };
    const [formStep, setFormStep] = useState<number>(1);
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState(initialValues);
    const navigate = useNavigate();

    const nextStep = () => {
        setFormStep((val) => val + 1);
    }

    const prevStep = () => {
        setFormStep((val) => val - 1);
    }

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        try {
            const res = await client.post(process.env.REACT_APP_API_URL + 'auth/signup', {
                email: formValues.email,
                password: formValues.password,
                phoneNumber: formValues.phoneNumber,
                name: formValues.name
            });
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

    const sendCode = async() =>{
        await client.get(`auth/${formValues.phoneNumber}`);
    }

    const verifyAuthNumber = async() =>{
        const res = await client.post('auth/phoneNumber-verify', {
            phoneNumber: formValues.phoneNumber,
            code: formValues.code
        });
        if(res.data){
            console.log(res.data);
            nextStep();
        }
    }

    useEffect(() => {
        console.log(formErrors);
    }, [formErrors])

    switch (formStep) {
        case 1:
            return (
                <Wrapper>
                    <BoxWrapper>
                        <BoxContainer>
                            <BoxHeader>
                                <Flex layout="column">
                                    <img src="/svg/logo.svg" alt="groundi logo" />
                                    <Typography.Title3 weight={700}>휴대폰 본인 확인</Typography.Title3>
                                </Flex>
                            </BoxHeader>
                            <BoxContent>
                                    <Input
                                        type="text"
                                        placeholder="전화번호"
                                        name="phoneNumber"
                                        value={formValues.phoneNumber}
                                        onChange={handleChange}
                                        icon={Profile}
                                    />
                                    <Button onClick={sendCode}>인증번호 전송</Button>
                                    <p>{formErrors.phoneNumber}</p>
                                    <Input
                                        type="number"
                                        placeholder="인증번호"
                                        name="code"
                                        value={formValues.code}
                                        onChange={handleChange}
                                        icon={Lock}
                                    />
                                    <p>{formErrors.code}</p>
                                    <Button onClick={verifyAuthNumber}>확인</Button>
                            </BoxContent>
                        </BoxContainer>
                    </BoxWrapper>
                </Wrapper >
            )
        case 2:
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
                                    <Input
                                        type="text"
                                        placeholder="이메일"
                                        name="email"
                                        value={formValues.email}
                                        onChange={handleChange}
                                        icon={Profile}
                                    />
                                    <p>{formErrors.email}</p>
                                    <Input
                                        type="password"
                                        placeholder="비밀번호"
                                        name="password"
                                        value={formValues.password}
                                        onChange={handleChange}
                                        icon={Lock}
                                    />
                                    <p>{formErrors.password}</p>
                                    <Input
                                        type="password"
                                        placeholder="비밀번호 확인"
                                        name="password"
                                        value={formValues.password}
                                        onChange={handleChange}
                                        icon={Lock}
                                    />
                                    <p>{formErrors.password}</p>
                                    <Button onClick={nextStep}>다음</Button>
                            </BoxContent>
                        </BoxContainer>
                    </BoxWrapper>
                </Wrapper >
            );
        case 3:
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
                                        placeholder="이름"
                                        name="name"
                                        value={formValues.name}
                                        onChange={handleChange}
                                        icon={Profile}
                                    />
                                    <p>{formErrors.name}</p>
                                    <Button>회원가입 완료</Button>
                                </form>
                            </BoxContent>
                        </BoxContainer>
                    </BoxWrapper>
                </Wrapper >
            )
        default: return(<div></div>);
    }

}

export default AuthSignUpPage;