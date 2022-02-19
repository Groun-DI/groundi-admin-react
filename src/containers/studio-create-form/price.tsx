import { useEffect } from "react";
import { UseFormRegister, UseFormSetValue, UseFormGetValues } from "react-hook-form";
import styled from "styled-components";

type Props = {
    register: UseFormRegister<Record<string, any>>
    setValue: UseFormSetValue<Record<string, any>>
    getValues: UseFormGetValues<Record<string, any>>
}


const PriceForm = ({ register, setValue, getValues }: Props) => {
    const maxlength = 4;
    const Type: [string, string, string] = ['lowest', 'highest', 'over'];

    useEffect(() => {
        register('lowestPrice');
        register('highestPrice');
        register('overCharge');
        setValue("lowestPrice", 10000);
        setValue("highestPrice", 10000);
        setValue("overCharge", 10000);
    }, [register, setValue]);

    const handleOnInput = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
        switch (type) {
            case Type[0]:
                if (e.target.value.length > maxlength) {
                    e.target.value = e.target.value.substr(0, maxlength);
                }
                setValue("lowestPrice", e.target.value)
                break;
            case Type[1]:
                if (e.target.value.length > maxlength) {
                    e.target.value = e.target.value.substr(0, maxlength);
                }
                setValue("highestPrice", e.target.value)
                break;
            case Type[2]:
                if (e.target.value.length > maxlength) {
                    e.target.value = e.target.value.substr(0, maxlength);
                }
                setValue("overCharge", e.target.value)
                break;
        }
    }
    return (
        <>
            <Wrapper>
                <InputWrapper>
                    <label>최저</label>
                    <input type="number" defaultValue={10000}
                        onChange={(e) => handleOnInput(e, Type[0])} />
                    <label>원</label>
                </InputWrapper>
                <InputWrapper>
                    <label>최고</label>
                    <input type="number" defaultValue={30000}
                        onChange={(e) => handleOnInput(e, Type[1])} />
                    <label>원</label>
                </InputWrapper>
                <InputWrapper>
                    <label>인원추가시</label>
                    <input type="number" defaultValue={30000}
                        onChange={(e) => handleOnInput(e, Type[2])} />
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