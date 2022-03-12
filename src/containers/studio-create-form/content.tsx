import styled from "styled-components";
import { useStudioContext } from "hooks/useStudioCreateContext";

const ContentForm: React.FC = () => {
    const { formValues, inputElements, SetOnChageFormValue } = useStudioContext();

    const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        SetOnChageFormValue(name, value);
    }

    return (
        <>
            <Input {...inputElements.content} value={formValues.content} type="textarea" onChange={handlerOnChange} />
        </>

    )
}

const Input = styled.input`
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