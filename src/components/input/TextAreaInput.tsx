import Typography from "components/style/Typography"
import styled from "styled-components"
import { theme } from "styles/theme"

type Props = {
    errorMessage: string,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    label: string;
    value?: string | number | [],
    mark?: string
    height: number
}

const TextAreaInput: React.FC<Props> = ({ value, height, label, errorMessage, mark, onChange, ...inputProps }) => {
    return (
        <Wrapper>
            {
                label ?
                    <Label>
                        <Typography.Regular weight={theme.fontWeight.SemiBold}>{label}</Typography.Regular>
                    </Label>
                    : null
            }
            <InputWrap>
                <Input {...inputProps} onChange={onChange} value={value} autoComplete="off" height={height} />
                {
                    mark && <Typography.Regular><Mark>{mark}</Mark></Typography.Regular>
                }
                {
                    errorMessage && <Span>{errorMessage}</Span>
                }
            </InputWrap>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
`
const InputWrap = styled.div`
    position: relative;
    margin-top: 10px;
`
const Mark = styled.span`
    position: absolute;
    top:50%;
    right: 15px;
    transform: translate(0, -50%);
`
const Input = styled.textarea<{ height: number }>`
    position: relative;
    width: 100%;
    padding: 18px;
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: 8px;
    font-size: ${({ theme }) => theme.fontSize.Small};
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 2%);
    height: ${({ height }) => height}px;
    :hover{
        border: 1px solid ${({ theme }) => theme.color.main};
    }
    :focus:invalid {
        border: 1px solid red !important;
    }
    :focus:invalid ~ span {
        display: block;
    }
`
const Span = styled.span`
    font-size: ${({ theme }) => theme.fontSize.Micro};
    padding: 8px;
    color: ${({ theme }) => theme.color.main};
`
const Label = styled.label`
    text-align: left;
`
export default TextAreaInput;