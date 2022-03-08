import styled from "styled-components";
import FormValuesUtils from "utils/formValue.utils";
import InputElementsUtils from "utils/inputs.utils";

type Props = {
    inputs: typeof InputElementsUtils.studioCreate;
    formValue: typeof FormValuesUtils.studioCreate;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NameForm:React.FC<Props> = ({ inputs, formValue, onChange }) => {

    return (
        <InputWrapper>
            <Input type="text" onChange={onChange} maxLength={20} />
            <Img src="/Emoji-smile.svg" alt="input-search" width={30} />
        </InputWrapper>
    )
}

const InputWrapper = styled.div`
    position: relative;
`

const Input = styled.input`
    width: 700px;
    height: 80px;
    border: 2px solid black;
    border-radius: 50px;
    padding: 20px 60px;
    font-size: ${(props) => props.theme.fontSize.Large};
    :hover{
        border: 2px solid #c4c4c4c4;
    }
`

const Img = styled.img`
    position: absolute;
    transform: translate(-50%, -50%);
    left: 40px;
    top: 50%;
`
export default NameForm