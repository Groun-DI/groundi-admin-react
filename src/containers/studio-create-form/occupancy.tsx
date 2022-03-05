import { useEffect } from "react";
import { UseFormGetValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import styled from "styled-components";
import { CreateStudioInputData, CreateStudioValue } from "dto/create-studio.dto";
import FormInput from "components/input/FormInput";

type Props = {
    values: typeof CreateStudioInputData;
    value: CreateStudioValue;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const OccupancyForm: React.FC<Props> = ({ values, value, onChange }) => {
    // const maxlength = 3;
    // const Type: [string, string] = ['BASIC', 'MAXIMUM'];

    // const handleOnInput = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    //     switch (type) {
    //         case Type[0]:
    //             if (e.target.value.length > maxlength) {
    //                 e.target.value = e.target.value.substr(0, maxlength);
    //             }
    //             setValue("basicOccupancy", e.target.value)
    //             break;
    //         case Type[1]:
    //             if (e.target.value.length > maxlength) {
    //                 e.target.value = e.target.value.substr(0, maxlength);
    //             }
    //             setValue("maximumOccupancy", e.target.value)
    //             break;
    //     }
    //     const maximumOccupancy = getValues("maximumOccupancy");
    //     const basicOccupancy = getValues("basicOccupancy");

    //     if (maximumOccupancy < basicOccupancy) {
    //         console.log("최대인원을 기준 인원보다 높게 설정해주세요")
    //     }
    // }
    return (
        <>
            <Wrapper>
                <ContentHeader>
                    <InputWrapper>
                        <label>기준</label>
                        <FormInput {...values.basicOccupancy}
                            onChange={onChange}/>
                        <label>인, </label>
                    </InputWrapper>
                    <InputWrapper>
                        <label>최대</label>
                        <FormInput {...values.maximumOccupancy}
                            onChange={onChange}/>
                        <label>인까지 받을께요</label>
                    </InputWrapper>
                </ContentHeader>
                <ContentMain>
                    <h5>❗️Tips 단위 면적당 인원수 측정하기</h5>
                    <p>2인이 사용하기 좋은 평수는 20이며, 평당 수를 모르신다면 성인 한명이
                    <br /> 누웠을때의 가로 세로가 1평으로 측정됩니다. 2인이 사용하기 좋은 평수는 20이며,
                    평당 수를 모르신다면
                    <br /><br />2인이 사용하기 좋은 평수는 20이며, 평당 수를 모르신다면 성인 한명이 누웠을때의
                    <br />2인이 사용하기 좋은 평수는 20이며, 평당 수를 모르신다면 성인 한명이 누웠을때의 가로 세로가 1평으로 측정됩니다</p>
                </ContentMain>
            </Wrapper>
        </>

    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100%;
`

const ContentHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
`

const ContentMain = styled.div`
    width: 100%;
    border: 1px dotted black;
    border-radius: 20px;
    padding: 20px;
    h5{
        font-size: ${(props) => props.theme.fontSize.Large};
        line-height: 1.5;
        font-weight: 800;
        margin-bottom: 10px;
    }
    p{
        font-size: ${(props) => props.theme.fontSize.Regular};
        line-height: 1.5;
    }
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
        width: 90px;
        color: #F84F39;
        text-align: center;
        font-size: ${(props) => props.theme.fontSize.Title2};
        border: 0px;
        border-bottom: 1px solid #c4c4c4;
        margin: 0px 20px;
    }
`
export default OccupancyForm;