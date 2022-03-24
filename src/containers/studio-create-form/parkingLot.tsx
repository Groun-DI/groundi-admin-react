import BoxInput from "components/input/BoxInput";
import Toggle from "components/input/Toggle";
import Typography from "components/style/Typography";
import { useStudioCreateContext } from "hooks/useStudioCreateContext";
import styled from "styled-components";
import { theme } from "styles/theme";
import InitialSelect from "components/select/Initial";
import parkingHours from "data/parkingHours.json";
import parkingMinutes from "data/parkingMinutes.json";
import Flex from "components/style/Flex";
import { useCallback, useEffect } from "react";
import ValidationUtils from "utils/validation.utils";

type Props = {
    stateValid: (state: boolean) => void;
}

const ParkingLotForm: React.FC<Props> = ({ stateValid }) => {
    const { formValues, inputElements, SetFormValue } = useStudioCreateContext();

    const setValidation = useCallback(() => {
        if (formValues.parkingIsAvailable === "true") {
            switch (formValues.parkingPaymentType) {
                case "free":
                    stateValid(false);
                    break;
                case "time":
                    stateValid(!(inputElements.parkingFirstHour.invalid === true && inputElements.parkingFirstTime.invalid === true && inputElements.parkingFirstPayment.invalid === true && inputElements.parkingAdditionHour.invalid === true && inputElements.parkingAdditionTime.invalid === true && inputElements.parkingAdditionPayment.invalid === true && inputElements.parkingAllDayPayment.invalid === true));
                    break;
                case "paytopay":
                    stateValid(!inputElements.parkingOneTimePayment.invalid);
                    break;
            }
        } else {
            stateValid(!(formValues.parkingIsAvailable === "true"))
        }
    }, [formValues.parkingIsAvailable, formValues.parkingPaymentType, stateValid, inputElements.parkingFirstHour.invalid, inputElements.parkingFirstTime.invalid, inputElements.parkingFirstPayment.invalid, inputElements.parkingAdditionHour.invalid, inputElements.parkingAdditionTime.invalid, inputElements.parkingAdditionPayment.invalid, inputElements.parkingAllDayPayment.invalid, inputElements.parkingOneTimePayment.invalid])

    useEffect(() => {
        setValidation();
    }, [inputElements, setValidation, formValues]);

    const handlerToggle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        SetFormValue(inputElements.parkingIsAvailable.name, (formValues.parkingIsAvailable === "true" ? "false" : "true"));
    }

    const handlerOnClick = (e: React.MouseEvent<HTMLLabelElement>) => {
        const value = (e.target as HTMLLabelElement).htmlFor;
        SetFormValue(inputElements.parkingPaymentType.name, value);
    }

    const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        switch (name) {
            case "parkingFirstHour":
                inputElements.parkingFirstHour = { ...inputElements.parkingFirstHour, ...ValidationUtils.isRequired(value) }
                break;
            case "parkingFirstTime":
                inputElements.parkingFirstTime = { ...inputElements.parkingFirstTime, ...ValidationUtils.isRequired(value) }
                break;
            case "parkingFirstPayment":
                inputElements.parkingFirstPayment = { ...inputElements.parkingFirstPayment, ...ValidationUtils.isRequired(value) }
                break;
            case "parkingAdditionHour":
                inputElements.parkingAdditionHour = { ...inputElements.parkingAdditionHour, ...ValidationUtils.isRequired(value) }
                break;
            case "parkingAdditionTime":
                inputElements.parkingAdditionTime = { ...inputElements.parkingAdditionTime, ...ValidationUtils.isRequired(value) }
                break;
            case "parkingAdditionPayment":
                inputElements.parkingAdditionPayment = { ...inputElements.parkingAdditionPayment, ...ValidationUtils.isRequired(value) }
                break;
            case "parkingAllDayPayment":
                inputElements.parkingAllDayPayment = { ...inputElements.parkingAllDayPayment, ...ValidationUtils.isRequired(value) }
                break;
            case "parkingOneTimePayment":
                inputElements.parkingOneTimePayment = { ...inputElements.parkingOneTimePayment, ...ValidationUtils.isRequired(value) }
                break;
            default: break;
        }
        SetFormValue(name, value);
    }

    const PaymentTypeContainer = () => {
        switch (formValues.parkingPaymentType) {
            case 'free':
                return;
            case 'paytopay':
                return (
                    <BoxContainer>
                        <InputWrap>
                            <BoxInput {...inputElements.parkingOneTimePayment} value={formValues.parkingOneTimePayment} onChange={handlerOnChange} mark="원" />
                        </InputWrap>
                    </BoxContainer>
                )
            case 'time':
                return (
                    <BoxContainer>
                        <InputWrap>
                            <Typography.Large weight={theme.fontWeight.SemiBold}>최초</Typography.Large>
                            <Flex justify="flex-start" align="flex-start">
                                <InitialSelect onChange={handlerOnChange} options={parkingHours} {...inputElements.parkingFirstHour} value={formValues.parkingFirstHour} />
                                <InitialSelect onChange={handlerOnChange} options={parkingMinutes} {...inputElements.parkingFirstTime} value={formValues.parkingFirstTime} />
                                <BoxInput {...inputElements.parkingFirstPayment} value={formValues.parkingFirstPayment} onChange={handlerOnChange} mark="원" />
                            </Flex>
                        </InputWrap>
                        <InputWrap>
                            <Typography.Large weight={theme.fontWeight.SemiBold}>추가 요금</Typography.Large>
                            <Flex justify="flex-start" align="flex-start">
                                <InitialSelect onChange={handlerOnChange} options={parkingHours} {...inputElements.parkingAdditionHour} value={formValues.parkingAdditionHour} />
                                <InitialSelect onChange={handlerOnChange} options={parkingMinutes} {...inputElements.parkingAdditionTime} value={formValues.parkingAdditionTime} />
                                <BoxInput {...inputElements.parkingAdditionPayment} value={formValues.parkingAdditionPayment} onChange={handlerOnChange} mark="원" />
                            </Flex>
                        </InputWrap>
                        <InputWrap>
                            <Typography.Large weight={theme.fontWeight.SemiBold}>최대</Typography.Large>
                            <BoxInput {...inputElements.parkingAllDayPayment} value={formValues.parkingAllDayPayment} onChange={handlerOnChange} mark="원" />
                        </InputWrap>
                    </BoxContainer>
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
                                    <Input id="free" value="free" {...inputElements.parkingPaymentType} defaultChecked={formValues.parkingPaymentType === "free" ? true : false} />
                                    <Item htmlFor="free" onClick={handlerOnClick}>무료</Item>
                                </div>
                                <div>
                                    <Input id="time" value="time" {...inputElements.parkingPaymentType} defaultChecked={formValues.parkingPaymentType === "time" ? true : false} />
                                    <Item htmlFor="time" onClick={handlerOnClick}>시간제</Item>
                                </div>
                                <div>
                                    <Input id="paytopay" value="paytopay" {...inputElements.parkingPaymentType} defaultChecked={formValues.parkingPaymentType === "paytopay" ? true : false} />
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
const BoxContainer = styled.div`
    margin-top: 6vh;
`

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

const InputWrap = styled.div`
    margin-top: 2.5vh;
    input{
        text-align: right;
        padding-right: 40px;
    }
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