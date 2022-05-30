import { useStudioCreateContext } from "hooks/useStudioCreateContext";
import styled from "styled-components";
import Typography from "components/style/Typography";
import { theme } from "styles/theme";
import Input from "components/input/Input";
import ValidationUtils from "utils/validation.utils";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

type Props = {
    stateValid: (state: boolean) => void;
}

const NameForm: React.FC<Props> = ({ stateValid }) => {
    const { centerId } = useParams();
    const { inputElements, formValues, SetFormValue } = useStudioCreateContext(Number(centerId));

    const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        inputElements.studioName = { ...inputElements.studioName, ...ValidationUtils.isStringOfDigits(value) };
        SetFormValue(name, value);
        stateValid(!inputElements.studioName.invalid);
    }

    useEffect(() => {
        stateValid(!inputElements.studioName.invalid);
    }, [inputElements.studioName, stateValid]);


    return (
        <>
            <InputWrapper>
                <Typography.Large weight={theme.fontWeight.SemiBold}>이름 입력</Typography.Large>
                <Input {...inputElements.studioName} onChange={handlerOnChange} value={formValues.name} />
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