import { useEffect } from "react";
import { UseFormRegister, UseFormSetValue, UseFormGetValues } from "react-hook-form";
import styled from "styled-components";
import { CreateStudioValue } from "dto/create-studio.dto";

type Props = {
    values: CreateStudioValue;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ParkingLotForm:React.FC<Props> = ({ values, onChange }) => {
    const Type: [string, string] = ['isAvailable', 'paymentType'];
    const maxLengthType: [number, number] = [2, 4];

    // const handleOnChangeSelect = (value: string, type: string) => {
    //     switch (type) {
    //         case Type[0]:
    //             if (value === 'true') setValue("isAvailable", true);
    //             else if (value === 'false') setValue("isAvailable", false)
    //             break;
    //         case Type[1]:
    //             setValue("paymentType", value)
    //             break;
    //     }
    // }

    const handleOnInput = (e: React.ChangeEvent<HTMLInputElement>, maxLength: number) => {
        switch (maxLength) {
            case maxLengthType[0]:
                if (e.target.value.length > maxLengthType[0]) {
                    e.target.value = e.target.value.substr(0, maxLengthType[0]);
                    console.log(e.target.value);
                }
                break;
            case maxLengthType[1]:
                if (e.target.value.length > maxLengthType[1]) {
                    e.target.value = e.target.value.substr(0, maxLengthType[0]);
                    console.log(e.target.value);
                }
                break;
        }
    }

    return (
        <>
            <ContentHeader>
                <InputWrapper>
                    <label>주차가</label>
                    <Select>
                        <option value="true">가능</option>
                        <option value="false">불가능</option>
                    </Select>
                    <label>해요</label>
                </InputWrapper>
            </ContentHeader>
            <ContentMain>
                <InputWrapper>
                    <label>주차비는</label>
                    <Select>
                        <option value="clock">시간제</option>
                        <option value="fixed">정액제</option>
                        <option value="free">무료</option>
                    </Select>
                    <label>에요</label>
                </InputWrapper>
            </ContentMain>
            <ContentFooter>
                <InputWrapper>
                    <label>최초</label>
                    <input type="number" defaultValue={1}
                        onChange={onChange} />
                    <label>시간</label>
                    <input type="number" defaultValue={30}
                        onChange={onChange} />
                    <label>분</label>
                    <input type="number" defaultValue={10000}
                        onChange={onChange} />
                    <label>원</label>
                </InputWrapper>
                <InputWrapper>
                    <label>최초</label>
                    <input type="number" defaultValue={1}
                        onChange={onChange} />
                    <label>시간</label>
                    <input type="number" defaultValue={30}
                        onChange={onChange} />
                    <label>분</label>
                    <input type="number" defaultValue={10000}
                        onChange={onChange} />
                    <label>원</label>
                </InputWrapper>
                <InputWrapper>
                    <label>하루종일</label>
                    <input type="number" defaultValue={30000}
                        onChange={onChange} />
                    <label>원</label>
                </InputWrapper>
                <InputWrapper>
                    <label>한번만</label>
                    <input type="number" defaultValue={30000}
                        onChange={onChange} />
                    <label>원</label>
                </InputWrapper>
            </ContentFooter>
        </>

    )
}
const ContentFooter = styled.div`

`

const ContentHeader = styled.div`
    display: flex;
    flex-direction: row;

`
const ContentMain = styled.div`
    display: flex;
    flex-direction: row;
`

const Select = styled.select`
    border: 0px;
    font-size: ${(props) => props.theme.fontSize.Title3};
    color: #F84F39;
    text-align: center;
    font-size: ${(props) => props.theme.fontSize.Title2};
    border: 0px;
    border-bottom: 1px solid #c4c4c4;
    margin: 0px 20px;
`

const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: ${(props) => props.theme.fontSize.Title3};
    margin: 10px;
    font-weight: 400;
    color: black;
    input{
        width: 200px;
        color: #F84F39;
        text-align: center;
        font-size: ${(props) => props.theme.fontSize.Title2};
        border: 0px;
        border-bottom: 1px solid #c4c4c4;
        margin: 0px 20px;
    }
`
export default ParkingLotForm;