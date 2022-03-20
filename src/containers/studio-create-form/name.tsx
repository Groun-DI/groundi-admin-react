import { useStudioContext } from "hooks/useStudioCreateContext";
import styled, { css } from "styled-components";
import Typography from "components/style/Typography";
import { theme } from "styles/theme";

const NameForm: React.FC = () => {
    const { formValues, inputElements, SetOnChageFormValue } = useStudioContext();

    const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        console.log(name + value + e.target);
        SetOnChageFormValue(name, value);
    }

    return (
        <>
            <InputWrapper>
                <Typography.Large weight={theme.fontWeight.SemiBold}>이름 입력</Typography.Large>
                <Typography.Small style={{ textAlign: "right" }}>{formValues.name ? formValues.name.length : 0}/30</Typography.Small>
                <br />
                <Input {...inputElements.studioName} onChange={handlerOnChange} value={formValues.name} />
            </InputWrapper>
        </>
    )
}

const InputWrapper = styled.div`
    /* position: relative; */
`

const Input = styled.input`
    width: 700px;
    height: 50px;
    border: 1px solid ${(props) => props.theme.color.border};
    border-radius: 8px;
    padding: 20px 20px;
    font-size: ${(props) => props.theme.fontSize.Large};
    :hover{
        border: 2px solid #c4c4c4c4;
    }
`

// const Img = styled.img`
//     position: absolute;
//     transform: translate(-50%, -50%);
//     left: 40px;
//     top: 50%;
// `
export default NameForm