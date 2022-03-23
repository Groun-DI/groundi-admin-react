import { useStudioCreateContext } from "hooks/useStudioCreateContext";
import styled, { css } from "styled-components";
import Typography from "components/style/Typography";
import { theme } from "styles/theme";
import BoxInput from "components/input/BoxInput";
import ValidationUtils from "utils/validation.utils";

const NameForm: React.FC = () => {
    const { formValues, inputElements, SetFormValue } = useStudioCreateContext();

    const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        inputElements.studioName = { ...inputElements.studioName, ...ValidationUtils.isStringOfDigits(value, 30) };
        if (inputElements.studioName.invalid) 
            SetFormValue(name, value);
    }

    return (
        <>
            <InputWrapper>
                <Typography.Large weight={theme.fontWeight.SemiBold}>이름 입력</Typography.Large>
                <BoxInput {...inputElements.studioName} onChange={handlerOnChange} value={formValues.name} />
                <StyledTypographySmall>{formValues.name ? formValues.name.length : 0}/30</StyledTypographySmall>
            </InputWrapper>
        </>
    )
}

const InputWrapper = styled.div`
    max-width: 600px;
    width: 100%;
    margin-top: 5.6vh;
`

const StyledTypographySmall = styled(Typography.Small)`
    text-align: right;
    margin-top: 1vh;
`
export default NameForm