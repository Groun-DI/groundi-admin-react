import styled from "styled-components";

const RefundForm = () => {
    return (
        <>
            <Wrapper>
                <InputWrapper>
                    <label>7일 전 환불 금액</label>
                    <input type="number" defaultValue={100} />
                </InputWrapper>
                <InputWrapper>
                    <label>6일 전 환불 금액</label>
                    <input type="number" defaultValue={100} />
                </InputWrapper>
                <InputWrapper>
                    <label>5일 전 환불 금액</label>
                    <input type="number" defaultValue={100} />
                </InputWrapper>
                <InputWrapper>
                    <label>4일 전 환불 금액</label>
                    <input type="number" defaultValue={100} />
                </InputWrapper>
                <InputWrapper>
                    <label>3일 전 환불 금액</label>
                    <input type="number" defaultValue={100} />
                </InputWrapper>
                <InputWrapper>
                    <label>2일 전 환불 금액</label>
                    <input type="number" defaultValue={100} />
                </InputWrapper>
                <InputWrapper>
                    <label>1일 전 환불 금액</label>
                    <input type="number" defaultValue={30000} />
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
    font-size: ${(props) => props.theme.fontSize.Large};
    margin: 20px 0px;
    input{
        width: 300px;
        text-align: center;
        font-weight: 600;
        font-size: ${(props) => props.theme.fontSize.Title3};
        border: 0px;
        border-bottom: 1px solid #c4c4c4;
        margin: 0px 20px;
    }
`
export default RefundForm;