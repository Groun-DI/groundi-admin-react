import styled from "styled-components";
import InputElementsUtils from "utils/inputs.utils";
import FormValuesUtils from "utils/formValue.utils";
import Typography from "components/style/Typography";
import { theme } from "styles/theme";
import Flex from "components/style/Flex";

type Props = {
    inputs: typeof InputElementsUtils.studioCreate;
    formValue: typeof FormValuesUtils.studioCreate;
    onChange: (e: React.MouseEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement>) => void;
}

const OccupancyForm: React.FC<Props> = ({ inputs, formValue, onChange }) => {

    const handlerPlus = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        e.preventDefault();
        const { value } = e.target as HTMLInputElement;
        (e.target as HTMLInputElement).value = (Number(value) + 1).toString();
        onChange(e);
    }

    const handlerMius = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        e.preventDefault();
        const { value } = e.target as HTMLInputElement;
        if (value === '0') return;
        (e.target as HTMLInputElement).value = (Number(value) - 1).toString();
        onChange(e);
    }

    return (
        <>
            <Wrapper>
                <ContentHeader>
                    <ContentWrap>
                        <Label>
                            <Typography.Title3 weight={theme.fontWeight.SemiBold}>{inputs.basicOccupancy.label}</Typography.Title3>
                        </Label>
                        <InputWrap>
                            <MinusButton>
                                <input type="button" name={inputs.basicOccupancy.name} value={formValue.basicOccupancy} onClick={handlerMius} />
                            </MinusButton>
                            <TypographyWrap>
                                <Typography.Large>{formValue.basicOccupancy}</Typography.Large>
                            </TypographyWrap>
                            <PlusButton>
                                <input type="button" name={inputs.basicOccupancy.name} value={formValue.basicOccupancy} onClick={handlerPlus} />
                            </PlusButton>
                        </InputWrap>
                    </ContentWrap>
                    <ContentWrap>
                        <Label>
                            <Typography.Title3 weight={theme.fontWeight.SemiBold}>{inputs.maximumOccupancy.label}</Typography.Title3>
                        </Label>
                        <InputWrap>
                            <MinusButton>
                                <input type="button" name={inputs.maximumOccupancy.name} value={formValue.maximumOccupancy} onClick={handlerMius} />
                            </MinusButton>
                            <TypographyWrap>
                                <Typography.Large>{formValue.maximumOccupancy}</Typography.Large>
                            </TypographyWrap>
                            <PlusButton>
                                <input type="button" name={inputs.maximumOccupancy.name} value={formValue.maximumOccupancy} onClick={handlerPlus} />
                            </PlusButton>
                        </InputWrap>
                    </ContentWrap>
                </ContentHeader>
                <ContentMain>
                    <Typography.Large weight={theme.fontWeight.SemiBold}>❗️Tips 단위 면적당 인원수 측정하기</Typography.Large>
                    <Typography.Regular>2인이 사용하기 좋은 평수는 20이며, 평당 수를 모르신다면 성인 한명이
                    <br /> 누웠을때의 가로 세로가 1평으로 측정됩니다. 2인이 사용하기 좋은 평수는 20이며,
                    평당 수를 모르신다면
                    <br /><br />2인이 사용하기 좋은 평수는 20이며, 평당 수를 모르신다면 성인 한명이 누웠을때의 측정됩니다. </Typography.Regular>
                </ContentMain>
            </Wrapper>
        </>

    )
}
const Label = styled.label`
`
const TypographyWrap = styled.div`
    padding: 0 20px;
`
const PlusButton = styled.label`
    width: 32px;
    height: 32px;
    border: 2px solid ${({ theme }) => theme.color.sub};
    box-sizing: border-box;
    border-radius: 32px;
    background: url('/icon/plus.svg') no-repeat center;
    cursor: pointer;
    input{
        visibility: hidden;
    }  
`

const MinusButton = styled.label`
    width: 32px;
    height: 32px;
    border: 2px solid ${({ theme }) => theme.color.sub};
    box-sizing: border-box;
    border-radius: 32px;
    background: url('/icon/minus.svg') no-repeat center;
    cursor: pointer;
    input{
        visibility: hidden;
    }
`
const Wrapper = styled.div`

`

const ContentHeader = styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 7vh;
`

const ContentMain = styled.div`
    width: 100%;
    border: 2px solid ${({theme})=>theme.color.TitleActive};
    border-radius: 20px;
    padding: 30px 20px;
    margin-top: 7vh;
    h4{
        line-height: 1.5;
        
    }
    h5{
        margin-top: 4vh;
        line-height: 1.5;
    }
`
const InputWrap = styled(Flex)`
    margin-left: 15vh;
`

const ContentWrap = styled.div`
    display: flex;
    flex-direction: row;
    margin: 25px 0px;
`
export default OccupancyForm;