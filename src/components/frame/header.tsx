import { useAuth } from 'hooks/useAuth';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Header = () => {
    const { pathname } = useLocation();
    const navigator = useNavigate();
    const { LoginOut } = useAuth();
    if (pathname === '/center' || pathname === '/studio/new') {
        return null;
    }
    return (
        <>
            <Nav>
                <NavBar>
                    <h1>LOGO</h1>
                    <MainMenu>
                        <li>
                            today
                        </li>
                        <li>
                            message
                        </li>
                        <li>
                            <Link to='/space/create'>
                                공간
                            </Link>

                        </li>
                    </MainMenu>
                    <div>
                        <button onClick={async () => {
                            LoginOut();
                            navigator('/signin')
                        }
                        }>로그아웃</button>
                        마이페이지
                    </div>
                </NavBar>
            </Nav>
        </>
    )
}

const Nav = styled.div`

`

const NavBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`
const MainMenu = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export default Header;