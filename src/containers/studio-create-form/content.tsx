import styled from "styled-components";
import { useStudioCreateContext } from "hooks/useStudioCreateContext";
import Typography from "components/style/Typography";
import { theme } from "styles/theme";
import TextAreaInput from "components/input/TextAreaInput";
import ValidationUtils from "utils/validation.utils";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

type Props = {
    stateValid: (state: boolean) => void;
}

const ContentForm: React.FC<Props> = ({ stateValid }) => {
    const { centerId } = useParams();
    const { formValues, SetFormValue, inputElements } = useStudioCreateContext(Number(centerId));
    const handlerOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        inputElements.content = { ...inputElements.content, ...ValidationUtils.isStringOfDigits(value, 401) };
        SetFormValue(name, value);
    }


    useEffect(() => {
        stateValid(!(inputElements.content.invalid));
    }, [inputElements.content, stateValid]);

    return (
        <ContentWrap>
            <Typography.Large weight={theme.fontWeight.SemiBold}>설명 입력</Typography.Large>
            <TextAreaInput {...inputElements.content} onChange={handlerOnChange} height={250} />
            <StyledTypographySmall>{formValues.description ? formValues.description.length : 0}/400</StyledTypographySmall>
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