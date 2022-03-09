import styled from "styled-components";
import FormValuesUtils from "utils/formValue.utils";
import InputElementsUtils from "utils/inputs.utils";

type Props = {
    inputs: typeof InputElementsUtils.studioCreate;
    formValue: typeof FormValuesUtils.studioCreate;
    onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement>) => void;
}

const PriceForm: React.FC<Props> = ({ inputs, formValue, onChange }) => {
    // const maxlength = 4;
    // const Type: [string, string, string] = ['lowest', 'highest', 'over'];

    // const handleOnInput = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    //     switch (type) {
    //         case Type[0]:
    //             if (e.target.value.length > maxlength) {
    //                 e.target.value = e.target.value.substr(0, maxlength);
    //             }
    //             setValue("lowestPrice", e.target.value)
    //             break;
    //         case Type[1]:
    //             if (e.target.value.length > maxlength) {
    //                 e.target.value = e.target.value.substr(0, maxlength);
    //             }
    //             setValue("highestPrice", e.target.value)
    //             break;
    //         case Type[2]:
    //             if (e.target.value.length > maxlength) {
    //                 e.target.value = e.target.value.substr(0, maxlength);
    //             }
    //             setValue("overCharge", e.target.value)
    //             break;
    //     }
    // }
    return (
        <>
            <Wrapper>
                <InputWrapper>
                    <label>최저</label>
                    <input {...inputs.lowestPrice} value={formValue.lowestPrice} onChange={onChange} />
                    <label>원</label>
                </InputWrapper>
                <InputWrapper>
                    <label>최고</label>
                    <input {...inputs.highestPrice} value={formValue.highestPrice} onChange={onChange} />
                    <label>원</label>
                </InputWrapper>
                <InputWrapper>
                    <label>인원추가시</label>
                    <input {...inputs.overCharge} value={formValue.overCharge} onChange={onChange} />
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