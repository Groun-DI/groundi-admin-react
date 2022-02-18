import styled from "styled-components";

const ContentForm = () => {
    return (
        <TextArea />
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

export default ContentForm;