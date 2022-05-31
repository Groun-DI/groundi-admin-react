import Typography from "components/style/Typography";
import { NgsResAddressBody } from "dto/naver-geocoding.dto";
import styled from "styled-components";
import { theme } from "styles/theme";

type Props = {
    options: NgsResAddressBody[],
    handlerOnClick: (item: NgsResAddressBody) => void;
}

const AddressSelectionBox: React.FC<Props> = ({ options, handlerOnClick }) => {
    return (
        <>
            <SelectListBox>
                <ul>
                    {
                        options.map((item, k) => (
                            <li key={k}>
                                <input type="radio" id={k.toString()} name="address" value={item.roadAddr} />
                                <label htmlFor={k.toString()} onClick={(e) => handlerOnClick(item)}>
                                    <span>
                                        <i className="fn-booking fn-booking-check2" aria-hidden="true" />
                                    </span>
                                    <Typography.Regular spacing={-0.3}>{item.roadAddr}</Typography.Regular>
                                    <SubTitleWrap>
                                        <Typography.Micro>지번</Typography.Micro>
                                        <Typography.Small color={theme.color.dep_gray} spacing={-0.3}>{item.jibunAddress} </Typography.Small>
                                    </SubTitleWrap>
                                </label>
                            </li>
                        ))
                    }

                </ul>
            </SelectListBox>
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
const SelectListBox = styled.div`
    ul{
        height: calc(100% - 148px);
        margin-top: 20px;
        overflow-y: auto;
        background-color: #fff;
    }
    li{
        border-top: 1px solid #ecf0f2;
    }
    label{
        position: relative;
        display: block;
        padding: 19px 20px 18px 60px;
        cursor: pointer;
    }
    input{
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        padding: 0;
        overflow: hidden;
        clip: rect(0,0,0,0);
        border: 0;
    }

    input[type="radio"]:checked + label span{
        background-color: ${({ theme }) => theme.color.main};
    }
    input[type="radio"] + label > span{
        position: absolute;
        top: 20px;
        left: 20px;
        width: 28px;
        height: 28px;
        box-sizing: border-box;
        border-radius: 50%;
        border: 1px solid #e2e2e2;
    }
`


export default AddressSelectionBox;