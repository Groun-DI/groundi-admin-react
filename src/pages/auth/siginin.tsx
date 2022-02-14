import { HandleLogin } from '../../hooks/authorization';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data: any) => {
        try {
            const res = await HandleLogin(data);
            if (res) navigate('/');
        } catch {

        }
    };

    return (
        <Wrapper>
            <Container>
                <Nav>
                    <h1>GrounDI</h1>
                </Nav>
                <ContentHeader>
                    <h1>내 소중한 공간을, 공유하다</h1>
                    <h1>웰니스 공간대여 그라운디</h1>
                </ContentHeader>
                <ContentMain>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <input type="email"
                            {...register("email", { required: true })}
                            placeholder="이메일" />
                        {errors.email && <span>이메일을 입력해주세요</span>}
                        <input type="password"
                            {...register("password", { required: true })}
                            placeholder="비밀번호" />
                        {errors.password && <span>비밀번호를 입력해주세요</span>}
                        <input type="checkbox" />
                        <button type="submit">로그인</button>
                    </Form>
                </ContentMain>
                <ContentFooter>
                    <Link to="/signup">회원가입</Link>
                    <ul>
                        <li>
                            <Link to="/signin/find-email">이메일 찾기</Link>
                        </li>
                        <li>
                            <Link to="/signin/find-password">비밀번호 찾기</Link>
                        </li>
                    </ul>
                </ContentFooter>
            </Container>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    display: flex;
    height: 100%;
`

const Container = styled.div`
    margin: auto;
    text-align: center;
    height: 500px;
    width: 500px;
`
const Nav = styled.div`
    margin-bottom: 30px;
`
const ContentHeader = styled.div`
    margin-bottom: 60px;
`

const ContentMain = styled.div`

`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const ContentFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    ul{
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    li{
        margin: 0 5px;
    }
`
export default SignIn;