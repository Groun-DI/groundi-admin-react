import styled from "styled-components";
import { theme } from "styles/theme";

type Props = {
    options: any[];
    style?: React.CSSProperties;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    errorMessage: string,
    value?: string | number | [],
}

const Select: React.FC<Props> = ({ style, options, onChange, errorMessage, value, ...inputProps }) => {

    return (
        <Wrapper style={style}>
            <StyleSelect defaultValue={options[0]} onChange={onChange} value={value} {...inputProps}>
                {
                    options.map((item, key) => (
                        <option key={key} value={item}>{item}</option>
                    ))}
            </StyleSelect>
        </Wrapper>
    )
}

export default Select;

const Wrapper = styled.div`
    width: 100%;
`
const StyleSelect = styled.select`
    width: 100%;
    padding: 18px;
    border: 1px solid ${theme.color.light_gray};
    border-radius: 8px;
    font-size: ${({ theme }) => theme.fontSize.Small};
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 1em;
    margin-top:10px;
    margin-right: 8px;
    line-height: 2.8rem;
    :focus{
        outline: 1px solid ${({ theme }) => theme.color.main_light};
        border: 1px solid ${({ theme }) => theme.color.main};
    }
    :hover{
        border: 1px solid ${({ theme }) => theme.color.main};
    }
    cursor: pointer;
`