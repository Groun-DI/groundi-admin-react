import Toggle from "components/input/Toggle";
import Typography from "components/style/Typography";
import { useStudioContext } from "hooks/useStudioCreateContext";
import styled from "styled-components";
import { theme } from "styles/theme";
import InputElementsUtils from "utils/inputs.utils";

const ParkingLotForm: React.FC = () => {
    const { formValues, inputElements, SetFormValue } = useStudioContext();
    const inputs = InputElementsUtils.centerParkingLotCreate;
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

    const handlerToggle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        console.log(formValues.parkingIsAvailable);
        SetFormValue(inputElements.parkingIsAvailable.name, (formValues.parkingIsAvailable === "true" ? "false" : "true"));
    }


    const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        SetFormValue(name, value);
    }

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

    const ToggleProps = {
        left: '',
        right: '',
        leftColor: '#fff',
        rightColor: '#fff',
        leftBgColor: theme.color.main,
        rightBgColor: theme.color.main_light,
        circleColor: '#fff',
        setChecked: handlerToggle
    }

    return (
        <Container>
            <ContentHeader>
                <Toggle {...ToggleProps} />
                <StyledTypographyTitle3 weight={theme.fontWeight.SemiBold} isValiable={formValues.parkingIsAvailable}>건물내 주차가 가능한가요?</StyledTypographyTitle3>

            </ContentHeader>
            {
                formValues.parkingIsAvailable === "true" && (
                    <>
                        <ContentMain>
                            <InputWrapper>
                                <label>주차비는</label>
                                <Select {...inputs.paymentType} value={formValues.parkingPaymentType} onChange={handlerOnChange}>
                                    <option value="clock">시간제</option>
                                    <option value="fixed">정액제</option>
                                    <option value="free">무료</option>
                                </Select>
                                <label>에요</label>
                            </InputWrapper>
                        </ContentMain>
                        <ContentFooter>
                            <InputWrapper>
                                <label>최초 시간</label>
                                <input {...inputs.firstHour} value={formValues.parkingFirstTime} onChange={handlerOnChange} />
                                <label>분</label>
                                <input {...inputs.firstPayment} onChange={handlerOnChange} />
                                <label>원</label>
                            </InputWrapper>
                            <InputWrapper>
                                <label>추가 시간</label>
                                <input {...inputs.additionHour} value={formValues.parkingAdditionTime} onChange={handlerOnChange} />
                                <label>분</label>
                                <input {...inputs.additionPayment} defaultValue={10000} value={formValues.parkingAdditionPayment} onChange={handlerOnChange} />
                                <label>원</label>
                            </InputWrapper>
                            <InputWrapper>
                                <label>하루종일</label>
                                <input {...inputs.allDayPayment} value={formValues.parkingAllDayPayment} onChange={handlerOnChange} />
                                <label>원</label>
                            </InputWrapper>
                            <InputWrapper>
                                <label>한번만</label>
                                <input {...inputs.oneTimePayment} value={formValues.parkingOneTimePayment} onChange={handlerOnChange} />
                                <label>원</label>
                            </InputWrapper>
                        </ContentFooter>
                    </>
                )
            }
        </Container>
    )
}

const StyledTypographyTitle3 = styled(Typography.Title3) <{ isValiable: string }>`
    color: ${(props) => props.isValiable === "true" ? props.theme.color.main : props.theme.color.main_light};
`

const Container = styled.div`

`

const ContentFooter = styled.div`

`

const ContentHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3vh;
    h3{
        margin-top: 0.3vh;
    }
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
    /* input{
        width: 200px;
        color: #F84F39;
        text-align: center;
        font-size: ${(props) => props.theme.fontSize.Title2};
        border: 0px;
        border-bottom: 1px solid #c4c4c4;
        margin: 0px 20px;
    } */
`
export default ParkingLotForm;