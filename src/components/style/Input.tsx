import styled from "styled-components";

type Props = {
    type: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    icon?: string;
}

const Input = ({ type, name, icon, value, placeholder, onChange }: Props) => {
    return (
        <Wrapper>
            {/* <Img src={icon} alt="plus-icon" /> */}
            <StyleInput
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 80px;
    padding: 20px 0px;
`

const StyleInput = styled.input`
    width: 100%;
    padding: 10px 10px;
    border: 0px;
    border-bottom: 1px solid black;
    font-size: ${({ theme }) => theme.fontSize.Regular};
`
const Img = styled.img`
    position: absolute;
    top: 0px;
    left: 5px;
`



export default Input;