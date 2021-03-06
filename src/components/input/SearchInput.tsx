import inputElementDTO from "dto/inputElement.dto";
import styled from "styled-components"

type Props<T, R> = {
    elements: inputElementDTO;
    value: string;
    setResult: React.Dispatch<React.SetStateAction<R[]>>;
    onChange: React.Dispatch<React.SetStateAction<string>>;
    post: <T, R>(address: T) => Promise<R[]>
}

const SearchInput = <T, R>({ value, setResult, onChange, post, elements }: Props<T, R>) => {
    const handlerOnKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            setResult(await post(value));
        };
    }

    const handlerOnClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setResult(await post(value));
    }

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
    }

    return (
        <Wrapper>
            <Form>
                <Input
                    name={elements.name}
                    type={elements.type}
                    value={value}
                    required={elements.required}
                    onChange={handleChange}
                    onKeyPress={handlerOnKeyPress}
                />
                <Button onClick={handlerOnClick}>
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

export default SearchInput;