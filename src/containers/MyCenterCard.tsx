import styled from "styled-components";
import { Link } from "react-router-dom";
import Typography from "components/style/Typography";
import { useEffect, useState } from "react";
import { StudioService } from "api/studio.service";
import { theme } from "styles/theme";
import Col from "components/style/Column";

type Props = {
    center: any
}
const MyCenterCard: React.FC<Props> = ({ center }) => {
    const [studioId, setStudioId] = useState<string>('');

    useEffect(() => {
        const getStudioId = async () => {
            setStudioId(await StudioService.findOne(center.id));
        }
        getStudioId();
    });

    return (
        <Col xs={1} md={2} lg={4}>
            <BoxContainer>
                <BoxContentHeader>
                    <img src="/centerImage.png" alt="센터 대표 이미지" width="100%" height="100%" />
                </BoxContentHeader>
                <BoxContentBody>
                    <Link to={`${center.id}/reservation/${studioId}`}>
                        <Typography.Regular align={theme.fontAlign.l} weight={theme.fontWeight.Bold}>{center.name}</Typography.Regular>
                    </Link>
                </BoxContentBody>
            </BoxContainer>
        </Col>
    )
}


const BoxContainer = styled.div`
    border: 1px solid ${({ theme }) => theme.color.light_gray};
    border-radius: 25px;
    background-color: ${({ theme }) => theme.color.white};
    width: 100%;
    height: 250px;
`
const BoxContentHeader = styled.div`
    width: 100%;
    height: 75%;
`
const BoxContentBody = styled.div`
    position: relative;
    height: 25%;
    line-height: 6rem;
    padding: 0px 30px;
    cursor: pointer;
`

export default MyCenterCard;