import { useAuth } from 'hooks/useAuth';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const GoPrevNavigation = () => {
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
                    <img src="/icon/backArrow.svg" alt="logo"/>
                </Container>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 65px;
    padding: 10px 30px;
    background-color: white;
    width: 100%;
    border-bottom: 1px solid${({theme})=>theme.color.border};
    box-shadow: white;
`
const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export default GoPrevNavigation;