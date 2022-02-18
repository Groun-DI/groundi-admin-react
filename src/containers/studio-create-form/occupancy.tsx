import styled from "styled-components";

const OccupancyForm = () => {
    return (
        <>
            <Wrapper>
                <InputWrapper>
                    <label>기본</label>
                    <input type="number" defaultValue={1} />
                    <label>명</label>
                </InputWrapper>
                <InputWrapper>
                    <label>최대</label>
                    <input type="number" defaultValue={1} />
                    <label>명</label>
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
        width: 120px;
        text-align: center;
        font-weight: 600;
        font-size: ${(props) => props.theme.fontSize.Title1};
        border: 0px;
        border-bottom: 1px solid #c4c4c4;
        margin: 0px 20px;
    }
`
export default OccupancyForm;