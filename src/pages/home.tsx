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
import Flex from "components/style/Flex";
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
                                <Flex justify={theme.justifyAlign.c} align={theme.itemAlign.c}>
                                    <Link to="/new-center">
                                        <Typography.Large weight={theme.fontWeight.SemiBold} >
                                            새로운 센터 등록
                                    </Typography.Large>
                                    </Link>
                                </Flex>
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
    margin: auto;
    cursor: pointer;
    ::before{
        content:'';
        position: absolute;
        background: url('/plus-red.svg') no-repeat center;
        background-size: cover;
        width: 30px;
        height: 30px;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    a{
        margin-top: 60px;
    }
`
export default Page;