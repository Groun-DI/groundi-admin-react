import Typography from "components/style/Typography"
import styled from "styled-components"
import { theme } from "styles/theme"
import { useState } from "react";
import inputElementDTO from "dto/inputElement.dto";

interface Props {
    style?: React.CSSProperties;
    value: any;
    elements: inputElementDTO;
    onChange: React.Dispatch<React.SetStateAction<string>>;
}

const Input1: React.FC<Props> = ({ style, value, elements, onChange }) => {
    const [error, setError] = useState<string>('');
    const [invalid, setInvalid] = useState<Boolean>(true);

    const hanlderOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { message, invalid } = elements.filter(e.target.value);
        setInvalid(invalid);
        setError(message);
        onChange(e.target.value);
    }

    return (
        <Wrapper style={style}>
            <Container>
                <Input
                    name={elements.name}
                    type={elements.type}
                    value={value}
                    required={elements.required}
                    onChange={hanlderOnChange}
                    onInvalid={() => invalid} />
                <Placeholder hasValue={value}><Span>{elements.label}</Span></Placeholder>
            </Container>
            <Error><Typography.Micro color={theme.color.input_invalid} align={theme.fontAlign.l}>{error}</Typography.Micro></Error>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-bottom: 15px;
`

const Container = styled.div`
    position: relative;
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

const Error = styled.span`
    padding: 8px;
    display: none;
`

const Input = styled.input`
    border: 1px solid ${theme.color.light_gray};
    padding: 20px 25px;
    border-radius: 4px;
    width: 100%;
    font-size: 16px;
    :not([disabled]):focus~ {
        ${Placeholder}{
            color:${theme.color.dark_black};
            -webkit-transform: scale(.75) translateY(-52px) translateX(-80px);
            transform: scale(.75) translateY(-52px) translateX(-80px);
        }
    }

    :focus:valid{
        border:1px solid ${theme.color.dark_black};
    }

    :focus:invalid {
        border: 1px solid ${theme.color.input_invalid};
    }

    :focus:invalid ~ ${Error} {
        display: block;
    }
`

const Span = styled.span`
    background: #ffffff;
    padding: 0px 8px;
`
export default Input1;