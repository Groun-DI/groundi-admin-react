import { useEffect, useState } from "react";
import styled from "styled-components";
import FormInput from "components/input/FormInput";
import InputElementsUtils from "utils/inputs.utils";
import FormValuesUtils from "utils/formValue.utils";
import Typography from "components/style/Typography";
import { theme } from "styles/theme";
import Flex from "components/style/Flex";

type Props = {
    inputs: typeof InputElementsUtils.studioCreate;
    formValue: typeof FormValuesUtils.studioCreate;
    setValue: (name: string, value: string | string[]) => void;
}

const OccupancyForm: React.FC<Props> = ({ inputs, formValue, setValue }) => {
    const [basicNumber, setBasicNumber] = useState<number>(2);
    // const handleOnInput = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {

    //     // if (maximumOccupancy < basicOccupancy) {
    //     //     console.log("최대인원을 기준 인원보다 높게 설정해주세요")
    //     // }
    // }

    const handlerPlus = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setBasicNumber(basicNumber + 1);
    }

    const handlerMius = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (basicNumber === 0) return;
        setBasicNumber(basicNumber - 1);
    }


    return (
        <>
            <Wrapper>
                <ContentHeader>
                    <InputWrapper>
                        <label><Typography.Large>{inputs.basicOccupancy.label}</Typography.Large></label>
                        <Flex>
                            <button onClick={handlerMius}>-</button>
                            <FormInput {...inputs.basicOccupancy} value={basicNumber} />
                            <button onClick={handlerPlus}>+</button>
                        </Flex>
                    </InputWrapper>
                    <InputWrapper>
                        <label><Typography.Large>{inputs.maximumOccupancy.label}</Typography.Large></label>
                        <button onClick={handlerMius}>-</button>
                        <FormInput {...inputs.maximumOccupancy}
                            onChange={onChange} value={basicNumber} />
                        <button onClick={handlerPlus}>+</button>
                    </InputWrapper>
                </ContentHeader>
                <ContentMain>
                    <Typography.Large weight={theme.fontWeight.SemiBold}>❗️Tips 단위 면적당 인원수 측정하기</Typography.Large>
                    <Typography.Regular>2인이 사용하기 좋은 평수는 20이며, 평당 수를 모르신다면 성인 한명이
                    <br /> 누웠을때의 가로 세로가 1평으로 측정됩니다. 2인이 사용하기 좋은 평수는 20이며,
                    평당 수를 모르신다면
                    <br /><br />2인이 사용하기 좋은 평수는 20이며, 평당 수를 모르신다면 성인 한명이 누웠을때의
                    <br />2인이 사용하기 좋은 평수는 20이며, 평당 수를 모르신다면 성인 한명이 누웠을때의 가로 세로가 1평으로 측정됩니다</Typography.Regular>
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

const ContentHeader = styled(Flex)`
    flex-direction: column;
    align-items: center;
`

const ContentMain = styled.div`
    width: 100%;
    border: 1px dotted black;
    border-radius: 20px;
    padding: 20px;
    h5{
        line-height: 1.5;
        margin-bottom: 10px;
    }
    h6{
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