import styled from "styled-components";
import { useStudioContext } from "hooks/useStudioCreateContext";
import Typography from "components/style/Typography";
import { theme } from "styles/theme";

const ContentForm: React.FC = () => {
    const { formValues, inputElements, SetFormValue } = useStudioContext();

    const handlerOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        SetFormValue(name, value);
    }

    return (
        <ContentWrap>
            <Typography.Large weight={theme.fontWeight.SemiBold}>설명 입력</Typography.Large>
            <Typography.Small style={{ textAlign: "right" }}>{formValues.content ? formValues.content.length : 0}/400</Typography.Small>
            <TextArea {...inputElements.content} onChange={handlerOnChange} maxLength={400} >
                {formValues.content}
            </TextArea>
        </ContentWrap>

    )
}

const ContentWrap = styled.div`
    margin-top: 3vh;
    text-align: left;
    width: 100%;
`

const TextArea = styled.textarea`
    width: 100%;
    height: 300px;
    border: 1px solid ${(props) => props.theme.color.border};
    margin-top: 10px;
    border-radius: 8px;
    padding: 30px 40px;
    font-size: ${(props) => props.theme.fontSize.Large};
    resize: none;
    -webkit-transition: border 0.5s;
    transition: border 0.5s;
    :focus{
        border: 1px solid ${({ theme }) => theme.color.main};
        -webkit-transition: border 0.5s;
        transition: border 0.5s;
    }
`
export default ContentForm