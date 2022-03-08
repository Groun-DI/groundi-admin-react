import { useAuth } from 'hooks/useAuth';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Flex from 'components/style/Flex';
import Typography from 'components/style/Typography';
import { theme } from 'styles/theme';
import { useState } from 'react';
import { useParams } from 'react-router';

const AdminNavigation = () => {
    let {centerId} = useParams();
    const { pathname } = useLocation();

    const navigator = useNavigate();
    const { LoginOut } = useAuth();

    return (
        <>
            <Wrapper>
                <Container>
                    <ContentHeader>
                        <img src="/logo.svg" alt="logo" width="130px" />
                    </ContentHeader>
                    <ContentBody>
                        <Link to={"/center/" + centerId}><Typography.Meidum className={pathname.includes('')? 'active':'disable'}>예약관리</Typography.Meidum></Link>
                        <Link to={`/center/${centerId}/calendar`}><Typography.Meidum className={pathname.includes('calendar')? 'active':'disable'}>캘린더</Typography.Meidum></Link>
                        <Link to={`/center/${centerId}/studio`}><Typography.Meidum className={pathname.includes('studio')? 'active':'disable'}>스튜디오</Typography.Meidum></Link>
                    </ContentBody>
                    <ContentFooter>
                        <Button>알림</Button>
                        <Button onClick={async () => {
                            LoginOut();
                            navigator('/signin')
                        }
                        }>로그아웃</Button>
                    </ContentFooter>
                </Container>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.color.border};
    box-shadow: 0 1px 4px rgb(0 0 0 / 10%) !important;
`
const Container = styled(Flex)`
    padding: 18px;
    justify-content: space-between;
    align-items: center;
`

const ContentHeader = styled(Flex)`
    justify-content: flex-start;
`

const ContentBody = styled(Flex)`
    h5{
        position: relative;
        margin-left: 25px;
        color:${({ theme }) => theme.color.placeholder};
        :hover{
            color:${({ theme }) => theme.color.TitleActive};
        }
    }
    .active{
        color:${({ theme }) => theme.color.TitleActive};
        :before{
            content:'';
            background: url('/icon/gnb-ellipse.svg') no-repeat center;
            position: absolute;
            left:50%;
            bottom:-8px;
            transform: translate(-50%, 0%);
            width: 4px;
            height: 4px;
            border-radius: 100%;
            color:${({ theme }) => theme.color.main};
        }
    }
`
const ContentFooter = styled(Flex)`
    justify-content: flex-end;
`
const Button = styled.button`
    width: 36px;
    height: 36px;
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: 100%;
    background-color: #fff;
`
export default AdminNavigation;