import BoxInput from "components/input/BoxInput";
import Toggle from "components/input/Toggle";
import Typography from "components/style/Typography";
import { useStudioContext } from "hooks/useStudioCreateContext";
import { useState } from "react";
import styled from "styled-components";
import { theme } from "styles/theme";
import InputElementsUtils from "utils/inputs.utils";
import TimeStampModal from "containers/TimeStampModal";

const ParkingLotForm: React.FC = () => {
    const { formValues, inputElements, SetFormValue } = useStudioContext();
    const [stateTimeStampModal, setStateTimeStampModal] = useState<boolean>(false);
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
        SetFormValue(inputElements.parkingIsAvailable.name, (formValues.parkingIsAvailable === "true" ? "false" : "true"));
    }

    const handlerOnClick = (e: React.MouseEvent<HTMLLabelElement>) => {
        const value = (e.target as HTMLLabelElement).htmlFor;
        SetFormValue(inputElements.parkingPaymentType.name, value);
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

    const PaymentTypeContainer = () => {
        switch (formValues.parkingPaymentType) {
            case 'free':
                return;
            case 'paytopay':
                return (
                    <InputWrap>
                        <Typography.Large weight={theme.fontWeight.SemiBold}>1회 주차 시</Typography.Large>
                        <input {...inputs.oneTimePayment} value={formValues.parkingOneTimePayment} onChange={handlerOnChange} />
                        <label>원</label>
                    </InputWrap>
                )
            case 'time':
                return (
                    <>
                        <InputWrap>
                            <Typography.Large weight={theme.fontWeight.SemiBold}>최초</Typography.Large>
                            <button onClick={() => setStateTimeStampModal(true)}>
                                {formValues.parkingFirstTime}
                            </button>
                            <TimeStampModal
                                isOpen={stateTimeStampModal}
                                isClose={(click: boolean) => setStateTimeStampModal(click)}
                                getValue={(value: string) => SetFormValue(inputElements.parkingFirstTime.name, value)} />
                            <BoxInput {...inputs.firstPayment} onChange={handlerOnChange} mark="원" />
                        </InputWrap>
                        <InputWrap>
                            <Typography.Large weight={theme.fontWeight.SemiBold}>추가 요금</Typography.Large>
                            <button onClick={() => setStateTimeStampModal(true)}>
                                {formValues.parkingAdditionTime}
                            </button>
                            <TimeStampModal
                                isOpen={stateTimeStampModal}
                                isClose={(click: boolean) => setStateTimeStampModal(click)}
                                getValue={(value: string) => SetFormValue(inputElements.parkingAdditionTime.name, value)} />
                            <BoxInput {...inputs.additionPayment} value={formValues.parkingAdditionPayment} onChange={handlerOnChange} mark="원" />
                        </InputWrap>
                        <InputWrap>
                            <Typography.Large weight={theme.fontWeight.SemiBold}>최대</Typography.Large>
                            <BoxInput {...inputs.allDayPayment} value={formValues.parkingAllDayPayment} onChange={handlerOnChange} mark="원" />
                        </InputWrap>
                    </>
                )
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
                            <Typography.Large weight={theme.fontWeight.SemiBold}>주차비 유형</Typography.Large>
                            <ContentWrap>
                                <div>
                                    <Input id="free" value="free" {...inputElements.parkingPaymentType} />
                                    <Item htmlFor="free" onClick={handlerOnClick}>무료</Item>
                                </div>
                                <div>
                                    <Input id="time" value="time" {...inputElements.parkingPaymentType} />
                                    <Item htmlFor="time" onClick={handlerOnClick}>시간제</Item>
                                </div>
                                <div>
                                    <Input id="paytopay" value="paytopay" {...inputElements.parkingPaymentType} />
                                    <Item htmlFor="paytopay" onClick={handlerOnClick}>정액제</Item>
                                </div>
                            </ContentWrap>
                        </ContentMain>
                        <ContentFooter>
                            {PaymentTypeContainer()}
                        </ContentFooter>
                    </>
                )
            }
        </Container>
    )
}

const ContentWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-top: 4.5vh;
`

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
    margin-top: 5.6vh;
    h3{
        margin-top: 0.3vh;
    }
`
const ContentMain = styled.div`
    margin-top: 3.6vh;
    text-align: center;
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

const InputWrap = styled.div`

`


const Input = styled.input`
    visibility: hidden;
    position: absolute;
    left: -333px;
    :checked+label{
        border: 1px solid ${({ theme }) => theme.color.main_light};
        background-color: ${({ theme }) => theme.color.hover};
        color: ${({ theme }) => theme.color.main};
    }
`;

const Item = styled.label`
    text-align: center;
    padding:20px 75px;
    border: 1px solid ${({ theme }) => theme.color.border};
    background-color: white;
    border-radius: 20px;
    font-size: ${({ theme }) => theme.fontSize.Regular};
    font-weight: ${({ theme }) => theme.fontWeight.SemiBold};
    cursor: pointer;
    :hover{
        border: 1px solid ${({ theme }) => theme.color.main_light};
        color: ${({ theme }) => theme.color.main};
    }
`

export default ParkingLotForm;