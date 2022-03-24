import styled from "styled-components";
import { useStudioCreateContext } from "hooks/useStudioCreateContext";
import Typography from "components/style/Typography";
import { theme } from "styles/theme";
import BoxInput from "components/input/BoxInput";
import ValidationUtils from "utils/validation.utils";
import { useEffect } from "react";

type Props = {
    stateValid: (state: boolean) => void;
}

const PriceForm: React.FC<Props> = ({ stateValid }) => {
    const { formValues, inputElements, SetFormValue } = useStudioCreateContext();

    const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        switch (name) {
            case "lowestPrice":
                inputElements.lowestPrice = { ...inputElements.lowestPrice, ...ValidationUtils.isRequired(value) }
                break;
            case "highestPrice":
                inputElements.highestPrice = { ...inputElements.highestPrice, ...ValidationUtils.isRequired(value) }
                break;
            case "overCharge":
                inputElements.overCharge = { ...inputElements.overCharge, ...ValidationUtils.isRequired(value) }
                break;
        }
        SetFormValue(name, value);
    }

    useEffect(() => {
        stateValid(!(inputElements.lowestPrice.invalid === true && inputElements.highestPrice.invalid === true && inputElements.overCharge.invalid === true));
    }, [inputElements.highestPrice, inputElements.lowestPrice, inputElements.overCharge, stateValid]);

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