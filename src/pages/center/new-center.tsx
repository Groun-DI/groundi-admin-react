import client from "services/axios";
import styled from "styled-components";
import Button from 'components/style/Button';
import Typography from 'components/style/Typography';
import BoxInput from 'components/input/BoxInput';
import { useState } from "react";
import Wrapper from "components/style/Wrapper";
import { theme } from "styles/theme";
import Flex from "components/style/Flex";
import NaverMapService from "services/naver.map.service";
import AddressSearchModal from "containers/AddressSearchModal";
import AddressModalInputButton from "components/input/AddressModalInputButton";
import ValidationUtils from "utils/validation.utils";
import InputElementsUtils from "utils/inputs.utils";
import FormValuesUtils from "utils/formValue.utils";
import PhoneNumberInput from "components/input/PhoneNumberInput";
import FileUploadInput from "components/input/fileUpload.input";

const MapStyle = {
    width: '100%',
    height: '30vh',
    marginTop: '10px',
    borderRadius: '8px'
}

const Page = () => {
    const inputs = InputElementsUtils.centerCreate;
    const [formValues, setFormValues] = useState(FormValuesUtils.centerCreate);
    const [stateAddressSearchModal, setStateAddressSearchModal] = useState<boolean>(false);
    const [nowFormStep, setNowFormStep] = useState<number>(1);
    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await client.post(process.env.REACT_APP_API_URL + 'center/create', {
                ...formValues,
                latitude: Number(formValues.latitude),
                longitude: Number(formValues.longitude)
            });
            console.log(res.data);
        } catch (err: unknown) {
            if (err instanceof Error) {
                return {
                    error: err.message,
                }
            } else {
                return {
                    error: "error"
                }
            }
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        switch (name) {
            case 'name':
                inputs.centerName = { ...inputs.centerName, ...ValidationUtils.isRequired(value) };
                break;
            case 'phoneNumber':
                inputs.phoneNumber = { ...inputs.phoneNumber, ...ValidationUtils.isRequired(value) };
                break;
            case 'ceoName':
                inputs.ceoName = { ...inputs.ceoName, ...ValidationUtils.isRequired(value) };
                break;
            case 'busniessType':
                inputs.busniessType = { ...inputs.busniessType, ...ValidationUtils.isRequired(value) };
                break;
            case 'businessAttachment':
                inputs.businessAttachment = { ...inputs.businessAttachment, ...ValidationUtils.isRequired(value) };
                break;
            case 'busniessCode':
                inputs.busniessCode = { ...inputs.busniessCode, ...ValidationUtils.isBussniessCode(value) };
                console.log(inputs);
                setFormValues({ ...formValues, [name]: ValidationUtils.isBussniessCode(value).value });
                break;
            default:
                break;
        }
    }

    const nextStep = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setNowFormStep(nowFormStep + 1);
    }

    const goPrevios = () => {
        setNowFormStep(nowFormStep - 1);
    }

    switch (nowFormStep) {
        case 1:
            return (
                <Wrapper>
                    <Container>
                        <ContentHeader>
                            <Typography.Title3 weight={theme.fontWeight.ExtraBold}>개설할 센터의 정보를 입력해주세요</Typography.Title3>
                        </ContentHeader>
                        <ContentMain>
                            <Flex layout="column" gap={30}>
                                <BoxInput {...inputs.centerName} onChange={handleChange} value={formValues.name} />
                                <PhoneNumberInput {...inputs.phoneNumber} onChange={handleChange} value={formValues.phoneNumber}/>
                                <AddressWrap>
                                    <AddressModalInputButton
                                        label="주소를 입력해주세요"
                                        value={formValues.address}
                                        onClick={() => setStateAddressSearchModal(true)}
                                    >동/리/도로명으로 검색해주세요.</AddressModalInputButton>
                                    {
                                        formValues.address &&
                                        <BoxInput
                                            {...inputs.detailAddress}
                                            value={formValues.detailAddress}
                                            onChange={handleChange}
                                        />
                                    }
                                    <AddressSearchModal
                                        isOpen={stateAddressSearchModal}
                                        isClose={(click: boolean) => setStateAddressSearchModal(click)}
                                        onChange={handleChange}
                                        formValue={formValues}
                                        inputs={inputs} />
                                </AddressWrap>
                            </Flex>
                            {
                                formValues.latitude && formValues.longitude &&
                                <NaverMapService lat={Number(formValues.latitude)} lng={Number(formValues.longitude)} CustomStyle={MapStyle} />
                            }
                            <Flex>
                                <StyleButton onClick={nextStep}
                                    disabled={false}>다음</StyleButton>
                            </Flex>
                        </ContentMain>
                    </Container>
                </Wrapper>
            )
        case 2:
            return (
                <Wrapper>
                    <Container>
                        <ContentMain>
                            <Flex layout="column" gap={30}>
                                <BoxInput {...inputs.ceoName} onChange={handleChange} value={formValues.ceoName} />
                                <BoxInput {...inputs.busniessType} onChange={handleChange} value={formValues.busniessType} />
                                <BoxInput {...inputs.busniessCode} onChange={handleChange} value={formValues.busniessCode} />
                                <FileUploadInput {...inputs.businessAttachment} onChange={handleChange} value={formValues.businessAttachment}/>
                            </Flex>
                            <Flex>
                                <StyleButton type="submit" onClick={onSubmit}
                                    disabled={!inputs.ceoName.invalid || !inputs.busniessType.invalid || !inputs.busniessCode.invalid ? true : false}>개설 완료하기!</StyleButton>
                            </Flex>
                        </ContentMain>
                    </Container>
                </Wrapper>
            )
        default: return (<>오케이</>);
    }
}


const AddressWrap = styled.div`
    width: 100%;
`

const Container = styled.div`
    max-width: 550px;
    width: 100%;
    margin: 0 auto;
`

const ContentMain = styled.div`
    margin-top: 30px;
`

const ContentHeader = styled.div`
    margin-top: 30px;
`

const StyleButton = styled(Button) <{ disabled: boolean }>`
    margin: 0 auto;
    margin-top: 70px;
    width: 50%;
    opacity: ${({ disabled }) => disabled ? 0.7 : 1};
    cursor: ${({ disabled }) => disabled ? 'auto' : 'pointer'};
`

export default Page;