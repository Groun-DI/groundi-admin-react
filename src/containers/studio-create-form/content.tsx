import { UseFormRegister } from "react-hook-form";
import styled from "styled-components";

type Props = {
    register: UseFormRegister<Record<string, any>>
}

const ContentForm = ({ register }: Props) => {

    return (
        <TextArea {...register('content', { required: true })} maxLength={500} />
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