import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Flex from 'components/style/Flex';
import Typography from 'components/style/Typography';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ModalBasic from 'components/modal/basic';
import client from 'services/axios';
import { theme } from 'styles/theme';

const AdminNavigation = () => {
    const { centerId } = useParams();
    const { pathname } = useLocation();
    const [userProfileImg, setUserProfileImg] = useState<string>('');
    const [isMyprofileModalOpen, setIsMyprofileModalOpen] = useState<boolean>(false);
    const [isNotifyModalOpen, setIsNotifyModalOpen] = useState<boolean>(false);

    useEffect(() => {
        client.get('user').then(res => {
            setUserProfileImg(res.data.profileImage);
        });
    }, []);

    return (
        <>
            <Wrapper>
                <Container>
                    <ContentHeader>
                        <Link to={`/`}>
                            <img src="/logo.svg" alt="logo" width="130px" />
                        </Link>
                    </ContentHeader>
                    <ContentBody>
                        <Link to={`/${centerId}/reservation`}><Typography.Small className={pathname.includes('reservation') ? 'active' : 'disable'}>예약관리</Typography.Small></Link>
                        <Link to={`/${centerId}/calendar`}><Typography.Small className={pathname.includes('calendar') ? 'active' : 'disable'}>캘린더</Typography.Small></Link>
                        <Link to={`/${centerId}/studio`}><Typography.Small className={pathname.includes('studio') ? 'active' : 'disable'}>스튜디오</Typography.Small></Link>
                    </ContentBody>
                    <ContentFooter>
                        <ContentWrap>
                            <NotifyButton onClick={() => setIsNotifyModalOpen(!isNotifyModalOpen)} />
                            <ModalWrap>
                                <ModalBasic isOpen={isNotifyModalOpen} isClose={(value: boolean) => setIsNotifyModalOpen(value)}>
                                    <ul>
                                        <Link to={`/center/${centerId}/studio`}><li><Typography.Regular>계정정보</Typography.Regular></li></Link>
                                    </ul>
                                </ModalBasic>
                            </ModalWrap>
                        </ContentWrap>
                        <ContentWrap>
                            <ProfileButton onClick={() => setIsMyprofileModalOpen(!isMyprofileModalOpen)} url={userProfileImg} />
                            <ModalWrap>
                                <ModalBasic isOpen={isMyprofileModalOpen} isClose={(value: boolean) => setIsMyprofileModalOpen(value)}>
                                    <ul>
                                        <Link to={`/center/${centerId}/studio`}><li><Typography.Regular weight={theme.fontWeight.SemiBold}>계정정보</Typography.Regular></li></Link>
                                        <Link to={`/center/${centerId}/studio`}><li><Typography.Regular weight={theme.fontWeight.SemiBold}>대금정보</Typography.Regular></li></Link>
                                        <Link to={`/center/${centerId}/studio`}> <li><Typography.Regular weight={theme.fontWeight.SemiBold}>물어보기</Typography.Regular></li></Link>
                                        <Link to={`/center/${centerId}/studio`}><li><Typography.Regular weight={theme.fontWeight.SemiBold}>로그아웃</Typography.Regular></li></Link>
                                    </ul>
                                </ModalBasic>
                            </ModalWrap>
                        </ContentWrap>
                    </ContentFooter>
                </Container>
            </Wrapper>
        </>
    )
}

const ModalWrap = styled.div`
    position: absolute;
    top: 120%;
    right: 0;
    li{
        min-width: 200px;
        padding: 18px 20px;
        text-align: left;
        :hover{
            background-color: rgb(255,250,250);
        }
    }
`

const ContentWrap = styled.div`
    position: relative;
`

const Wrapper = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.color.border};
    box-shadow: 0 1px 4px rgb(0 0 0 / 10%) !important;
`
const Container = styled(Flex)`
    padding: 18px 24px;
    justify-content: space-between;
    align-items: center;
`

const ContentHeader = styled(Flex)`
    justify-content: flex-start;
`

const ContentBody = styled(Flex)`
    h6{
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

const NotifyButton = styled.button`
    width: 36px;
    height: 36px;
    background: url('/icon/bell.svg') no-repeat center;
    background-size: fill;
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: 100%;
    background-color: #fff;
    cursor:pointer;
`

const ProfileButton = styled.button<{ url: string }>`
    width: 36px;
    height: 36px;
    margin-left: 20px;
    background: url(${({ url }) => url}) no-repeat center;
    background-size: cover;
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: 100%;
    background-color: #fff;
    cursor:pointer;
`
export default AdminNavigation;