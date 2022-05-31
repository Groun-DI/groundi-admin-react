import { Link } from "react-router-dom";
import styled from "styled-components";
import Flex from 'components/style/Flex';
import { theme } from 'styles/theme';

const AdminNavigation = () => {

    return (
        <>
            <Wrapper>
                <Flex layout={theme.layout.r} align={theme.itemAlign.c} justify={theme.justifyAlign.c}>
                        <Link to={`/`}>
                            <img src="/logo/logo6.svg" alt="logo" width="60px" height="auto" />
                        </Link>
                </Flex>
            </Wrapper>
        </>
    )
}


const Wrapper = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.color.light_gray};
    padding: 2.5rem;
    /* box-shadow: 0 1px 4px rgb(0 0 0 / 10%) !important; */
`
export default AdminNavigation;