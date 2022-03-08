import styled from "styled-components";
import { Link } from "react-router-dom";
import Typography from "components/style/Typography";

type Props = {
    item: any
}
const MyCenterCard: React.FC<Props> = ({ item }) => {
    return (
        <BoxContainer>
            <BoxContentHeader>
                <img src="/centerImage.png" alt="센터 대표 이미지" />
            </BoxContentHeader>
            <BoxContentMain>
                <Link to={`/center/${item.id}`}>
                    <Typography.Small>{item.name}</Typography.Small>
                </Link>
            </BoxContentMain>
        </BoxContainer>
    )
}


const BoxContainer = styled.div`
    display: inline-block;
    border: 1px solid ${({ theme }) => theme.color.line};
    border-radius: 10px;
    background-color: ${({ theme }) => theme.color.offWhite};
`
const BoxContentHeader = styled.div`
    width: 100%;
    height: 170px;
`
const BoxContentMain = styled.div`
    position: relative;
    padding: 20px 25px;
    cursor: pointer;
    ::before{
        content:'';
        position: absolute;
        background: url('/icon/arrow-right.svg') no-repeat center;
        background-size: cover;
        width: 16px;
        height: 16px;
        top: 50%;
        right: 20px;
        transform: translate(0%, -50%);
    }
`

export default MyCenterCard;