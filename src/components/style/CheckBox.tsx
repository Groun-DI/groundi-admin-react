import styled from "styled-components";
import Typography from "./Typography";

type Props = {
    name: string;
    label: string;
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox = ({ value, label }: Props) => {
    return (
        <>
            <Wrapper>
                <StyleInput
                    type="checkbox"
                    value={value}
                />
                <Lable weight={700}>{label}</Lable>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 80px;
    padding: 20px 0px;
    justify-content: flex-start;
    align-items: center;
`;
const Lable = styled(Typography.Regular)`
    color: ${({theme})=>theme.color.placeholder};
    margin-left: 10px;
`
const StyleInput = styled.input`
    /* 클릭시 기본 css 없애기 */
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 0px;
    border-radius: 100%;
    background-color: white;
    width: 32px;
    height: 32px;
    background-color: ${({theme})=>theme.color.disabled_main};
    cursor: pointer;
    :checked {
        appearance: none;
        background:url("/svg/check.svg") no-repeat center/15px 12px; 
        float: right;
        background-color: ${({theme})=>theme.color.main};
  }
`

export default CheckBox;