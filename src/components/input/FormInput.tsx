import { useState } from "react"
import styled from "styled-components";

type Props = {
    errorMessage: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


const FormInput: React.FC<Props> = ({ errorMessage, onChange, ...inputProps }) => {
    return (
        <div>
            <Input {...inputProps} onChange={onChange}/>
            <Span>{errorMessage}</Span>
        </div>
    )
}

const Input = styled.input`
    :focus:invalid {
        border: 1px solid red !important;
    }

    :focus:invalid ~ span {
        display: block;
    }
`

const Span = styled.span`
    font-size: ${({ theme }) => theme.fontSize.Micro};
    padding: 3px;
    color: ${({ theme }) => theme.color.main};
    display: none;
`

export default FormInput;