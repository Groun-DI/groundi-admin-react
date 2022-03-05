import { UseFormRegister } from "react-hook-form";
import styled from "styled-components";
import { CreateStudioValue } from "dto/create-studio.dto";

type Props = {
    values: CreateStudioValue;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ContentForm:React.FC<Props> = ({ values, onChange }) => {

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