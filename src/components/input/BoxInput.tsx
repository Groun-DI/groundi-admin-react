import Typography from "components/style/Typography"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { theme } from "styles/theme"

type Props = {
    errorMessage: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    value?: string | number | [],
    invalid: boolean
}

const BoxInput: React.FC<Props> = ({ invalid, value, label, errorMessage, onChange, ...inputProps }) => {
    return (
        <Wrapper>
            {/* <Img src={icon} alt="plus-icon" /> */}
            {
                label ?
                    <Label>
                        <Typography.Regular weight={theme.fontWeight.SemiBold}>{label}</Typography.Regular>
                    </Label>
                    : null
            }
            <Input {...inputProps} onChange={onChange} value={value} autoComplete="off"
                aria-invalid={invalid ? "false" : "true"} />
            <Span>{errorMessage}</Span>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
`

const Input = styled.input`
    width: 100%;
    padding: 17px;
    border: 1px solid ${({ theme }) => theme.color.disabled};
    border-radius: 8px;
    font-size: ${({ theme }) => theme.fontSize.Small};
    margin-top: 10px;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 2%);
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
    display: block;
`

const Label = styled.label`
    text-align: left;
`

export default BoxInput;