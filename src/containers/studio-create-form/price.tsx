import styled from "styled-components";
import { useStudioContext } from "hooks/useStudioCreateContext";
import Typography from "components/style/Typography";
import { theme } from "styles/theme";
import CSS from 'csstype';
import BoxInput from "components/input/BoxInput";

const PriceForm: React.FC = () => {
    const { formValues, inputElements, SetFormValue } = useStudioContext();

    const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        SetFormValue(name, value);
    }

    return (
        <>
            <Wrapper>
                <InputWrapper>
                    <Typography.Large weight={theme.fontWeight.SemiBold}><Accent>최저</Accent> 대여 금액(1시간 기준)</Typography.Large>
                    <BoxInput {...inputElements.lowestPrice} onChange={handlerOnChange} value={formValues.lowestPrice} mark="원" />
                </InputWrapper>
                <InputWrapper>
                    <Typography.Large weight={theme.fontWeight.SemiBold}><Accent>최고</Accent> 대여 금액(1시간 기준)</Typography.Large>
                    <BoxInput {...inputElements.highestPrice} onChange={handlerOnChange} value={formValues.highestPrice} mark="원" />
                </InputWrapper>
                <InputWrapper>
                    <Typography.Large weight={theme.fontWeight.SemiBold}><Accent>인원추가</Accent> 금액(1인 기준)</Typography.Large>
                    <BoxInput {...inputElements.overCharge} onChange={handlerOnChange} value={formValues.overCharge} mark="원" />
                </InputWrapper>
            </Wrapper>
        </>

    )
}

const Wrapper = styled.div`
    padding: 10px;
    max-width: 600px;
    width: 100%;
    margin-top: 2vh;
`

const InputWrapper = styled.div`
    position: relative;
    margin-top: 3vh;
`

const Accent = styled.span`
    color: ${(props) => props.theme.color.main};
`
export default PriceForm;