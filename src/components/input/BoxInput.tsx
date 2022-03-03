import Typography from "components/style/Typography"
import styled from "styled-components"

type Props = {
    label?: string;
    type: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    icon?: string;
}


const BoxInput: React.FC<Props> = ({ label, type, name, icon, value, placeholder, onChange }) => {
    return (
        <Wrapper>
            {/* <Img src={icon} alt="plus-icon" /> */}
            {
                label ?
                    <Label htmlFor={name}>
                        <Typography.Small>{label}</Typography.Small>
                    </Label>
                    : null
            }
            <StyleInput
                id={name}
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
    width: 100%;
`

const StyleInput = styled.input`
    width: 100%;
    padding: 17px;
    border: 2px solid ${({ theme }) => theme.color.main};
    border-radius: 8px;
    font-size: ${({ theme }) => theme.fontSize.Regular};
    margin-top: 10px;
`
const Img = styled.img`
    position: absolute;
    top: 0px;
    left: 5px;
`
const Label = styled.label`

`

export default BoxInput;