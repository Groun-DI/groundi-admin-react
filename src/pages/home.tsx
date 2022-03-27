import BasicNavigation from "components/frame/BasicNavigation";
import Typography from "components/style/Typography";
import Wrapper from "components/style/Wrapper";
import MyCenterCard from "containers/MyCenterCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "services/axios";
import styled from "styled-components";
import { theme } from "styles/theme";
const Page = () => {
    const [centers, setCenters] = useState<any[]>([]);

    useEffect(() => {
        client.get("center").then((res) => {
            console.log(res);
            setCenters(res.data);
        });
    }, []);

    return (
        <>
            <BasicNavigation />
            <Wrapper>
                <Container>
                    <ContentHeader>
                        <Typography.Large weight={theme.fontWeight.SemiBold}>내 센터</Typography.Large>
                        <ButtonBox>
                            <Link to="/new-center"><Typography.Regular weight={theme.fontWeight.SemiBold} color={theme.color.main}>새로운 센터 등록 +</Typography.Regular></Link>
                        </ButtonBox>
                    </ContentHeader>
                    <ContentMain>
                        {
                            centers.map((item, k) => (
                                <MyCenterCard key={k} center={item} />
                            ))
                        }
                    </ContentMain>
                </Container>
            </Wrapper>
        </>
    )
}

const Container = styled.div`

`

const ContentHeader = styled.div`
    margin-top: 30px;
    button{
        margin-top: 30px;
    }
`

const ButtonBox = styled.button`
    position: relative;
    border: 2px solid ${({theme})=>theme.color.main};
    border-radius: 8px;
    padding: 30px 80px 30px 60px;
    background-color: white;
    cursor: pointer;
    ::before{
            content:'';
            position: absolute;
            background: url('/icon/center.svg') no-repeat center;
            background-size: cover;
            width: 26px;
            height: 26px;
            top: 50%;
            left: 20px;
            transform: translate(0%, -50%);
        }
`
const ContentMain = styled.div`
    margin-top: 25px;
`

export default Page;