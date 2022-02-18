import styled from "styled-components";

const PriceForm = () => {
    return (
        <>
            <Wrapper>
                <InputWrapper>
                    <label>최저</label>
                    <input type="number" defaultValue={10000} />
                    <label>원</label>
                </InputWrapper>
                <InputWrapper>
                    <label>최고</label>
                    <input type="number" defaultValue={30000} />
                    <label>원</label>
                </InputWrapper>
            </Wrapper>
        </>

    )
}
const Wrapper = styled.div`
    padding: 10px;
`

const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    font-size: ${(props) => props.theme.fontSize.Title3};
    margin: 60px 0px;
    input{
        width: 300px;
        text-align: center;
        font-weight: 600;
        font-size: ${(props) => props.theme.fontSize.Title1};
        border: 0px;
        border-bottom: 1px solid #c4c4c4;
        margin: 0px 20px;
    }
`
export default PriceForm;