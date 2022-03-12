import { useAuth } from 'hooks/useAuth';
import { useNavigate } from "react-router";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const BasicNavigation = () => {
    const { pathname } = useLocation();
    const navigator = useNavigate();
    const { LoginOut } = useAuth();
    if (pathname === '/center' || pathname === '/studio/new') {
        return null;
    }
    return (
        <>
            <Wrapper>
                <Container>
                    <img src="/logo.svg" alt="logo" width="130px" />
                    <div>
                        <button onClick={async () => {
                            LoginOut();
                            navigator('/signin')}}>로그아웃</button>
                        마이페이지
                    </div>
                </Container>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 80px;
    padding: 10px 30px;
    background-color: white;
    width: 100%;
    border-bottom: 1px solid #c4c4c4;
    box-shadow: white;
`
const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export default BasicNavigation;