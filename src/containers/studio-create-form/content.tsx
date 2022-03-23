import styled from "styled-components";
import { useStudioCreateContext } from "hooks/useStudioCreateContext";
import Typography from "components/style/Typography";
import { theme } from "styles/theme";
import TextAreaInput from "components/input/TextAreaInput";
import ValidationUtils from "utils/validation.utils";

const ContentForm: React.FC = () => {
    const { formValues, inputElements, SetFormValue } = useStudioCreateContext();

    const handlerOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        inputElements.content = { ...inputElements.content, ...ValidationUtils.isStringOfDigits(value, 400) };
        if (inputElements.content.invalid) 
            SetFormValue(name, value);
    }

    return (
        <ContentWrap>
            <Typography.Large weight={theme.fontWeight.SemiBold}>설명 입력</Typography.Large>
            <TextAreaInput {...inputElements.content} onChange={handlerOnChange} height={250}/>
            <StyledTypographySmall>{formValues.content ? formValues.content.length : 0}/400</StyledTypographySmall>
        </ContentWrap>
    )
}

const StyledTypographySmall = styled(Typography.Small)`
    text-align: right;
    margin-top: 1vh;
`
const ContentWrap = styled.div`
    margin-top: 5.6vh;
    text-align: left;
    width: 100%;
    max-width: 600px;
`
export default ContentForm