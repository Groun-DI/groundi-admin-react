import styled from "styled-components"

type Props = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    value: string;
}


const AddressSearchInput: React.FC<Props> = ({ value, onChange, onKeyPress, onClick, ...inputProps }) => {
    return (
        <Wrapper>
            <Form>
                <Input
                    {...inputProps}
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                    value={value}
                />
                <Button onClick={onClick}>
                    <img src="/icon/search.svg" alt="검색 버튼" />
                </Button>
            </Form>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    width: 100%;
`
const Form = styled.form`
    position: relative;
    display: flex;
    padding-right: 56px;
    border-radius: 12px;
    border: 1px solid ${({ theme }) => theme.color.border};
    box-shadow: 0 3px 10px 0 rgb(0 0 0 / 3%);
    background-color: #fff;
    box-sizing: border-box;
`
const Input = styled.input`
    width: 100%;
    padding: 14px 15px;
    border-radius: 12px;
    border: none;
    background-color: #fff;
    font-size: ${({ theme }) => theme.fontSize.Small};
    line-height: 2rem;
    letter-spacing: -.39px;
    :hover{
        cursor: text;
    }
    :checked{
        border: 2px solid ${({ theme }) => theme.color.main};
    }
`
const Button = styled.button`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 0 20px;    
    background-color: transparent;
    border: none;
    outline: none;
    color: #000;
    cursor: pointer;
`

export default AddressSearchInput;