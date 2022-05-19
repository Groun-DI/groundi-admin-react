import Typography from "components/style/Typography"
import { useState } from "react"
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
    placeholder: string,
}

const Input1: React.FC<Props> = ({ style, value, label, errorMessage, placeholder, mark, onChange, invalid, ...inputProps }) => {
    const [isValue, setIsValue] = useState<boolean>(false);

    const customOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length > 0) {
            setIsValue(true);
        } else {
            setIsValue(false);
        }

        return onChange;
    }
    return (
        <Wrapper style={style}>
            <Input {...inputProps} onChange={customOnChange} value={value} id=""  onFocus={() => true} />
            <Placeholder hasValue={isValue}><Span>{placeholder}</Span></Placeholder>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;
    margin-bottom: 15px;
`

const Placeholder = styled.div<{ hasValue: boolean }>`
    font-size: 16px;
    position: absolute;
    top: 50%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #80868b;
    left: 8px;
    padding: 0 8px;
    -webkit-transition: transform 150ms cubic-bezier(0.4,0,0.2,1),opacity 150ms cubic-bezier(0.4,0,0.2,1);
    transition: transform 150ms cubic-bezier(0.4,0,0.2,1),opacity 150ms cubic-bezier(0.4,0,0.2,1);
    z-index: 1;
    text-align: left;
    width: 100%;
    transform: ${({ hasValue }) => hasValue ? "scale(.75) translateY(-52px) translateX(-80px);" : "translate(0%, -50%)"};
    -webkit-transform: ${({ hasValue }) => hasValue ? "scale(.75) translateY(-52px) translateX(-80px)" : "translate(0%, -50%)"};
`

const Input = styled.input`
    border: 1px solid ${theme.color.light_gray};
    padding: 15px;
    border-radius: 4px;
    width: 100%;
    line-height: 2.5;
    :focus{
        border:1px solid ${theme.color.dark_black};
    }

    :not([disabled]):focus~ {
        ${Placeholder}{
            color:${theme.color.dark_black};
            -webkit-transform: scale(.75) translateY(-52px) translateX(-80px);
            transform: scale(.75) translateY(-52px) translateX(-80px);
        }
    }
`

const Span = styled.span`
    background: #ffffff;
    padding: 0px 8px;
`
export default Input1;