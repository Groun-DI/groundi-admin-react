import Typography from "components/style/Typography";
import { NgsResAddressBody } from "dto/naver-geocoding.dto";
import styled from "styled-components";
import { theme } from "styles/theme";

type Props = {
    id: string;
    item: NgsResAddressBody;
    handlerOnClick: (item: NgsResAddressBody) => void;
}
const ResAddresList: React.FC<Props> = ({ id, item, handlerOnClick }) => {
    return (
        <>
            <input type="radio" id={id} name="address" value={item.roadAddr} />
            <label htmlFor={id} onClick={(e) => handlerOnClick(item)}>
                <span>
                    <i className="fn-booking fn-booking-check2" aria-hidden="true" />
                </span>
                <Typography.Regular spacing={-0.3}>{item.roadAddr}</Typography.Regular>
                <SubTitleWrap>
                    <Typography.Micro>지번</Typography.Micro>
                    <Typography.Small color={theme.color.dep_gray} spacing={-0.3}>{item.jibunAddress} </Typography.Small>
                </SubTitleWrap>
            </label>
        </>
    )
}

const SubTitleWrap = styled.div`
    position: relative;
    margin-top: 7px;
    padding-left: 34px;
    line-height: 2.1rem;
    color: #888;
    p{
        position: absolute;
        top: 1px;
        left: 0;
        width: 30px;
        margin-right: 8px;
        border-radius: 4px;
        border: 1px solid #888;
        letter-spacing: -.31px;
        color: #888;
        text-align: center;
        line-height: 1.8rem;
    }
`

export default ResAddresList;