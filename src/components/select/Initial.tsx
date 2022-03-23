import Typography from "components/style/Typography";
import styled from "styled-components";
import { theme } from "styles/theme";

type Props = {
    options: any[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    errorMessage: string,
    value?: string | number | [],
}

const InitialSelect: React.FC<Props> = ({ options, onChange, errorMessage, value, ...inputProps }) => {

    return (
        <Wrapper>
            <Select defaultValue={options[0]} onChange={onChange} value={value} {...inputProps}>
                {
                    options.map((item, key) => (
                        <option value={item}>{item}</option>
                    ))}
            </Select>
        </Wrapper>
    )
}

export default InitialSelect;

const Wrapper = styled.div`

`
const Select = styled.select`
    width: 125px;
    padding: 18px;
    border: 1px solid ${({ theme }) => theme.color.border};
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
    line-height: 2rem;
    :focus{
        outline: 1px solid ${({ theme }) => theme.color.main_light};
        border: 1px solid ${({ theme }) => theme.color.main};
    }
    :hover{
        border: 1px solid ${({ theme }) => theme.color.main};
    }
    cursor: pointer;
`