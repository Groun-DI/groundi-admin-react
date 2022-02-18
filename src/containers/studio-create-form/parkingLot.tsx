import { useState } from "react";
import styled from "styled-components";

const ParkingLotForm = () => {
    const [isAvailable, setIsAvailable] = useState<boolean>(false);
    return (
        <>
            <ContentHeader>
                <InputWrapper>
                    <Input type="radio" name="isparking" id="1" />
                    <Label htmlFor="1">주차가 가능해요☺️</Label>
                </InputWrapper>
                <InputWrapper>
                    <Input type="radio" name="isparking" id="2" />
                    <Label htmlFor="2">주차가 불가능해요🥲</Label>
                </InputWrapper>
            </ContentHeader>
            <ContentMain>
                <InputWrapper>
                    <Input type="radio" name="money" id="3" />
                    <Label htmlFor="3">시간제</Label>
                </InputWrapper>
                <InputWrapper>
                    <Input type="radio" name="money" id="4" />
                    <Label htmlFor="4">정액제</Label>
                </InputWrapper>
                <InputWrapper>
                    <Input type="radio" name="money" id="4" />
                    <Label htmlFor="4">무료</Label>
                </InputWrapper>
            </ContentMain>
            <ContentFooter>
                <InputWrapper>
                    <label>최초</label>
                    <input type="number" defaultValue={10000} />
                    <label>원</label>
                </InputWrapper>
                <InputWrapper>
                    <label>추가요금</label>
                    <input type="number" defaultValue={30000} />
                    <label>원</label>
                </InputWrapper>
                <InputWrapper>
                    <label>최대</label>
                    <input type="number" defaultValue={30000} />
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

const Label = styled.label`
    text-align: center;
    background-color: #c4c4c4;
    color: white;
    padding: 20px 30px;
    border-radius: 50px;
    font-size: ${(props) => props.theme.fontSize.Large};
    cursor: pointer;
    :hover{
        background-color: ${(props) => props.theme.color.sub};
    }
`

const Input = styled.input`
    display: none;
    :checked+label{
        background-color: ${(props) => props.theme.color.main} !important;
    }
`;

const InputWrapper = styled.div`
    margin-bottom: 50px;
    margin-right: 50px;
    margin-top: 20px;
`

export default ParkingLotForm;