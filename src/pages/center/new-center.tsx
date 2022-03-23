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
import FileUploadInput from "components/input/fileUpload.input";
import GoPrevNavigation from "components/frame/GoPrevNavigation";
import InitialSelect from "components/select/Initial";
import numberList from 'data/first-phoneNumber.json';

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
                <>
                    <GoPrevNavigation />
                    <Wrapper>
                        <Container>
                            <ContentHeader>
                                <Typography.Title3 weight={theme.fontWeight.ExtraBold}>개설할 센터의 정보를 입력해주세요</Typography.Title3>
                            </ContentHeader>
                            <ContentMain>
                                <Flex layout="column" gap={30}>
                                    <BoxInput {...inputs.centerName} onChange={handleChange} value={formValues.name} />
                                    <Flex justify="flex-start" align="flex-start" layout="column">
                                        <Label>
                                            <Typography.Regular weight={theme.fontWeight.SemiBold}>{inputs.frontPhoneNumber.label}</Typography.Regular>
                                        </Label>
                                        <Flex justify="flex-start" align="flex-start">
                                            <InitialSelect onChange={handleChange} options={numberList} {...inputs.frontPhoneNumber} value={formValues.frontPhoneNumber} />
                                            <BoxInput {...inputs.phoneNumber} onChange={handleChange} value={formValues.phoneNumber} />
                                        </Flex>
                                    </Flex>
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
                                        disabled={!inputs.centerName.invalid || inputs.phoneNumber.invalid || !formValues.address ? true : false}>다음</StyleButton>
                                </Flex>
                            </ContentMain>
                        </Container>
                    </Wrapper>
                </>
            )
        case 2:
            return (
                <>
                    <GoPrevNavigation />
                    <Wrapper>
                        <Container>
                            <ContentMain>
                                <Flex layout="column" gap={30}>
                                    <BoxInput {...inputs.ceoName} onChange={handleChange} value={formValues.ceoName} />
                                    <BoxInput {...inputs.busniessType} onChange={handleChange} value={formValues.busniessType} />
                                    <InputWrap>
                                        <BoxInput {...inputs.busniessCode} onChange={handleChange} value={formValues.busniessCode} />
                                        <FileUploadInput {...inputs.businessAttachment} onChange={handleChange} value={formValues.businessAttachment} />
                                        <Typography.Micro>
                                            • 5MB 이하의 jpg, jpeg, gif, png 파일형식만 가능합니다.<br />
                                            • 주민등록번호 등 개인정보가 보이지 않도록 처리한 뒤 업로드 바랍니다.<br />
                                            • 주민등록번호 등 개인정보가 표시된 경우, 해당 서류는 접수 즉시 파기되며 서비스 이용이 지연될 수 있습니다.
                                        </Typography.Micro>
                                    </InputWrap>
                                </Flex>
                                <Flex>
                                    <StyleButton type="submit" onClick={onSubmit}
                                        disabled={!inputs.ceoName.invalid || !inputs.busniessType.invalid || !inputs.busniessCode.invalid ? true : false}>개설 완료하기!</StyleButton>
                                </Flex>
                            </ContentMain>
                        </Container>
                    </Wrapper>
                </>
            )
        default: return (<>오케이</>);
    }
}
const InputWrap = styled.div`
    width: 100%;
    p{
        margin-top:10px;
    }
`

const AddressWrap = styled.div`
    width: 100%;
`

const Container = styled.div`
    max-width: 550px;
    width: 100%;
    margin: 0 auto;
`

const ContentMain = styled.div`
    margin-top: 70px;
`

const ContentHeader = styled.div`
    margin-top: 10px;
`

const StyleButton = styled(Button) <{ disabled: boolean }>`
    margin: 0 auto;
    margin-top: 70px;
    width: 50%;
    opacity: ${({ disabled }) => disabled ? 0.7 : 1};
    cursor: ${({ disabled }) => disabled ? 'auto' : 'pointer'};
`

const Input = styled.input`
    width: 100%;
    padding: 17px;
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: 8px;
    font-size: ${({ theme }) => theme.fontSize.Small};
    margin-top: 10px;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 2%);
    :hover{
        border: 1px solid ${({ theme }) => theme.color.main};
    }
    :focus:invalid {
        border: 1px solid red !important;
    }
    :focus:invalid ~ span {
        display: block;
    }
`

const Span = styled.span`
    font-size: ${({ theme }) => theme.fontSize.Micro};
    padding: 8px;
    color: ${({ theme }) => theme.color.main};
    //display: none;
`

const Label = styled.label`
    text-align: left;
`

export default Page;