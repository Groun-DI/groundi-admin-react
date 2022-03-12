import { useStudioContext } from "hooks/useStudioCreateContext";
import styled from "styled-components";

const NameForm: React.FC = () => {
    const { formValues, inputElements, SetOnChageFormValue } = useStudioContext();

    const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        SetOnChageFormValue(name, value);
    }

    return (
        <>
            <InputWrapper>
                <Input {...inputElements.studioName} onChange={handlerOnChange} value={formValues.name} />
                {/* <Img src="/Emoji-smile.svg" alt="input-search" width={30} /> */}
            </InputWrapper>
        </>
    )
}

const InputWrapper = styled.div`
    /* position: relative; */
`

const Input = styled.input`
    width: 700px;
    height: 80px;
    border: 2px solid black;
    border-radius: 50px;
    padding: 20px 60px;
    font-size: ${(props) => props.theme.fontSize.Large};
    :hover{
        border: 2px solid #c4c4c4c4;
    }
`

// const Img = styled.img`
//     position: absolute;
//     transform: translate(-50%, -50%);
//     left: 40px;
//     top: 50%;
// `
export default NameForm