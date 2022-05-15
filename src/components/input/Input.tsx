import Typography from "components/style/Typography"
import styled from "styled-components"
import { theme } from "styles/theme"

type Props = {
    errorMessage: string,
    style?: React.CSSProperties,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    value?: any,
    mark?: string,
    invalid: boolean;
}

const Input: React.FC<Props> = ({ style, value, label, errorMessage, mark, onChange, invalid, ...inputProps }) => {
    return (
        <Wrapper style={style}>
            { label && <Typography.Regular weight={theme.fontWeight.SemiBold} align={theme.fontAlign.l}>{label}</Typography.Regular>}
            <InputWrap>
                <StyleInput {...inputProps} onChange={onChange} value={value} autoComplete="off" />
                {mark && <Typography.Regular><Mark>{mark}</Mark></Typography.Regular>}
                {errorMessage && <Span>{errorMessage}</Span>}
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
const StyleInput = styled.input`
    position: relative;
    width: 100%;
    padding: 18px;
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: 8px;
    font-size: ${({ theme }) => theme.fontSize.Small};
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 2%);
    :hover{
        border: 1px solid ${({ theme }) => theme.color.main};
    }
    :focus:invalid {
        border: 1px solid ${({ theme }) => theme.color.main};
    }
    :focus:invalid ~ span {
        display: block;
    }
`
const Span = styled.span`
    font-size: ${({ theme }) => theme.fontSize.Micro};
    padding: 8px;
    color: ${({ theme }) => theme.color.main};
    display: none;
`
export default Input;