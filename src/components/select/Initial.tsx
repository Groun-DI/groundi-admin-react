import styled from "styled-components";
import numberList from 'data/first-phoneNumber.json';

type Props = {
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const InitialSelect: React.FC<Props> = ({ onChange }) => {

    return (
        <Content>
            <Select defaultValue={numberList[0].number} onChange={onChange}>
                {
                    numberList.map((item, key) => (
                        <option value={item.number}>{item.number}</option>
                    ))}
            </Select>
        </Content>
    )
}

export default InitialSelect;

const Content = styled.div`

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
    :focus{
        outline: 1px solid ${({ theme }) => theme.color.main_light};
        border: 1px solid ${({ theme }) => theme.color.main};
    }
    :hover{
        border: 1px solid ${({ theme }) => theme.color.main};
    }
    cursor: pointer;
`