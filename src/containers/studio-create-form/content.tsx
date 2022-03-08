import styled from "styled-components";
import FormValuesUtils from "utils/formValue.utils";
import InputElementsUtils from "utils/inputs.utils";

type Props = {
    inputs: typeof InputElementsUtils.studioCreate;
    formValue: typeof FormValuesUtils.studioCreate;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ContentForm:React.FC<Props> = ({ inputs, formValue, onChange }) => {

    return (
        <>
        </>
        // <TextArea onChange={onChange}/>
    )
}

const TextArea = styled.textarea`
    width: 800px;
    height: 300px;
    border: 2px solid black;
    border-radius: 30px;
    padding: 30px 40px;
    font-size: ${(props) => props.theme.fontSize.Large};
    :hover{
        border: 2px solid #c4c4c4c4;
    }
`
export default ContentForm