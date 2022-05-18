import BasicNavigation from "components/frame/BasicNavigation";
import Typography from "components/style/Typography";
import Wrapper from "components/style/Wrapper";
import Container from "components/style/Container";
import Col from "components/style/Column";
import Row from "components/style/Row";
import MyCenterCard from "containers/MyCenterCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "services/axios";
import styled from "styled-components";
import { theme } from "styles/theme";
const Page = () => {
    const [centers, setCenters] = useState<any[]>([]);

    useEffect(() => {
        client.get("centers").then((res) => {
            console.log(res);
            setCenters(res.data);
        });
    }, []);

    return (
        <>
            <BasicNavigation />
            <StyledWrapper bg={theme.color.light_gray}>
                <Container>
                    <Typography.Title2 weight={theme.fontWeight.Bold} align={theme.fontAlign.l}>내 센터</Typography.Title2>
                </Container>
            </StyledWrapper>
            <Wrapper>
                <Container>
                    <Row>
                        <Col xs={1} md={2} lg={4}>
                            <ButtonBox>
                                <Link to="/new-center">
                                    <Typography.Regular weight={theme.fontWeight.Regular} color={theme.color.main}>
                                        새로운 센터 등록 +
                                    </Typography.Regular>
                                </Link>
                            </ButtonBox>
                        </Col>
                        {
                            centers.map((item, k) => (
                                <MyCenterCard key={k} center={item} />
                            ))
                        }
                    </Row>
                </Container>
            </Wrapper>
        </>
    )
}

const StyledWrapper = styled(Wrapper)`
    @media ${theme.device.pc}{
        padding: 65px 0px;
    }
    @media ${theme.device.tablet}{
        padding: 40px 0px;
    }
    @media ${theme.device.mobile}{
        padding: 20px 0px;
    }
`

const ButtonBox = styled.div`
    position: relative;
    width: 100%;
    height: 250px;
    border: 1px solid ${({ theme }) => theme.color.light_gray};
    border-radius: 25px;
    background-color: ${({ theme }) => theme.color.white};
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
export default Page;