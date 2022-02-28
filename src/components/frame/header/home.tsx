import { useAuth } from 'hooks/useAuth';

import { useNavigate } from "react-router";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const HomeHeader = () => {
    const { pathname } = useLocation();
    const navigator = useNavigate();
    const { LoginOut } = useAuth();
    if (pathname === '/center' || pathname === '/studio/new') {
        return null;
    }
    return (
        <>
            <Header>
                <img src="/logo.svg" alt="logo" width="150px" />
                <div>
                    <button onClick={async () => {
                        LoginOut();
                        navigator('/signin');
                    }}>로그아웃</button>
                </div>
            </Header>
        </>
    )
}

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding: 10px 30px;
    position: fixed;
    background-color: white;
    width: 100%;
    border-bottom: 1px solid #c4c4c4;
    box-shadow: white;
`;


export default HomeHeader;