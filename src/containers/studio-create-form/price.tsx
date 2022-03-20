import styled from "styled-components";
import { useStudioContext } from "hooks/useStudioCreateContext";
import Typography from "components/style/Typography";
import { theme } from "styles/theme";
import CSS from 'csstype';

const PriceForm: React.FC = () => {
    const { formValues, inputElements, SetOnChageFormValue } = useStudioContext();

    const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        SetOnChageFormValue(name, value);
    }

    const unitStyle: CSS.Properties = {
        position: "absolute",
        top: "15px",
        right: "20px",
    }


    // const maxlength = 4;
    // const Type: [string, string, string] = ['lowest', 'highest', 'over'];

    // const handleOnInput = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    //     switch (type) {
    //         case Type[0]:
    //             if (e.target.value.length > maxlength) {
    //                 e.target.value = e.target.value.substr(0, maxlength);
    //             }
    //             setValue("lowestPrice", e.target.value)
    //             break;
    //         case Type[1]:
    //             if (e.target.value.length > maxlength) {
    //                 e.target.value = e.target.value.substr(0, maxlength);
    //             }
    //             setValue("highestPrice", e.target.value)
    //             break;
    //         case Type[2]:
    //             if (e.target.value.length > maxlength) {
    //                 e.target.value = e.target.value.substr(0, maxlength);
    //             }
    //             setValue("overCharge", e.target.value)
    //             break;
    //     }
    // }
    return (
        <>
            <Wrapper>
                <Typography.Large weight={theme.fontWeight.SemiBold}><Accent>최저</Accent> 대여 금액(1시간 기준)</Typography.Large>
                <InputWrapper>
                    <Input {...inputElements.lowestPrice} onChange={handlerOnChange} value={formValues.lowestPrice} />
                    <Typography.Regular style={unitStyle}>원</Typography.Regular>
                </InputWrapper>
                <Typography.Large weight={theme.fontWeight.SemiBold}><Accent>최고</Accent> 대여 금액(1시간 기준)</Typography.Large>
                <InputWrapper>
                    <Input {...inputElements.highestPrice} onChange={handlerOnChange} value={formValues.highestPrice} />
                    <Typography.Regular style={unitStyle}>원</Typography.Regular>
                </InputWrapper>
                <Typography.Large weight={theme.fontWeight.SemiBold}><Accent>인원추가</Accent> 금액(1인 기준)</Typography.Large>
                <InputWrapper>
                    <Input {...inputElements.overCharge} onChange={handlerOnChange} value={formValues.overCharge} />
                    <Typography.Regular style={unitStyle}>원</Typography.Regular>
                </InputWrapper>
            </Wrapper>
        </>

    )
}
const Wrapper = styled.div`
    padding: 10px;
    margin-top: 40px;
`

const InputWrapper = styled.div`
    position: relative;
`

const Accent = styled.span`
    color: ${(props) => props.theme.color.main};
`

const Input = styled.input`
    width: 700px;
    height: 50px;
    border: 1px solid ${(props) => props.theme.color.border};
    border-radius: 8px;
    padding: 20px 20px;
    padding-right: 50px;
    font-size: ${(props) => props.theme.fontSize.Large};
    :hover{
        border: 2px solid #c4c4c4c4;
    }
    margin-bottom: 40px;
`
export default PriceForm;