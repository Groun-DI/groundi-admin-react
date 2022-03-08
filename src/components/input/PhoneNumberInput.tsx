import InitialSelect from "components/select/Initial"
import Flex from "components/style/Flex"
import Typography from "components/style/Typography"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { theme } from "styles/theme"

type Props = {
    errorMessage: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    label: string;
    value?: string | number | [],
    children?: React.ReactChild
}

const PhoneNumberInput: React.FC<Props> = ({ value, label, errorMessage, onChange, children, ...inputProps }) => {
    return (
        <Container>
            <Label>
                <Typography.Regular weight={theme.fontWeight.SemiBold}>{label}</Typography.Regular>
            </Label>
            <Flex justify="flex-start" align="flex-start">
                <InitialSelect onChange={onChange} />
                <Flex layout="column" justify="flex-start" align="flex-start">
                    <Input {...inputProps} onChange={onChange} value={value} autoComplete="off" />
                    <Span>{errorMessage}</Span>
                </Flex>
            </Flex>
        </Container>
    )
}

const Container = styled(Flex)`
    flex-direction: column;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
`
// const Content = styled`
//     display: flex;
//     flex-direction: row;
//     width: 100%;
//     justify-content: flex-start;
//     align-items: flex-end;
//     select{
//         margin-right:10px;
//     }
// `
const Input = styled.input`
    width: 100%;
    padding: 17px;
    border: 1px solid ${({ theme }) => theme.color.border};
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
    //display: none;
`

const Label = styled.label`
    text-align: left;
`

export default PhoneNumberInput;