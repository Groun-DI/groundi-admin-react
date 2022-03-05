import client from "services/axios";
import styled from "styled-components";
import Button from 'components/style/Button';
import Typography from 'components/style/Typography';
import BoxInput from 'components/input/BoxInput';
import { useCallback, useState } from "react";
import Wrapper from "components/style/Wrapper";
import { theme } from "styles/theme";
import Flex from "components/style/Flex";
import NaverMapService from "services/naver.map.service";
import AddressSearchModal from "containers/AddressSearchModal";
import AddressModalInputButton from "components/input/AddressModalInputButton";
import { CenterCreateInput } from "inputs/center.create";
import RequiredValidate from "hooks/validation/RequiredValidate";

type Values = {
    name: string,
    address: string,
    detailAddress: string,
    phoneNumber: string,
    latitude: string,
    longitude: string
}
const MapStyle = {
    width: '100%',
    height: '30vh',
    marginTop: '20px',
    borderRadius: '8px'
}
const CenterNew = () => {
    const initialValues: Values = { name: "", detailAddress: "", address: "", phoneNumber: "", latitude: "", longitude: "" };
    const inputs = CenterCreateInput;
    const [formValues, setFormValues] = useState<Values>(initialValues);
    const [stateAddressSearchModal, setStateAddressSearchModal] = useState<boolean>(false);
    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await client.post(process.env.REACT_APP_API_URL + 'center/create', {
                name: formValues.name,
                address: formValues.address,
                detailAddress: formValues.detailAddress,
                phoneNumber: formValues.phoneNumber,
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let errors;
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        switch (name) {
            case 'name':
                errors = RequiredValidate(value);
                inputs.centerName.errorMessage = errors.errorMessage;
                inputs.centerName.invalid = errors.invalid;
                break;
            case 'phoneNumber':
                errors = RequiredValidate(value);
                inputs.phoneNumber.errorMessage = errors.errorMessage;
                inputs.phoneNumber.invalid = errors.invalid;
                break;
            default:
                break;
        }
    }

    return (
        <Wrapper>
            <Container>
                <ContentHeader>
                    <Typography.Title3 weight={theme.fontWeight.ExtraBold}>개설할 센터의 정보를 입력해주세요</Typography.Title3>
                </ContentHeader>
                <ContentMain>
                    <Flex layout="column" gap={15}>
                        <BoxInput {...inputs.centerName} onChange={handleChange} />
                        <BoxInput
                            {...inputs.phoneNumber}
                            value={formValues.phoneNumber}
                            onChange={handleChange}
                        />
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
                        <StyleButton type="submit" onClick={onSubmit}
                            disabled={!inputs.centerName.invalid || !inputs.phoneNumber.invalid || formValues.address === "" ? true : false}>개설하기</StyleButton>
                    </Flex>
                </ContentMain>
            </Container>
        </Wrapper>
    )
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
    margin-top: 45px;
    width: 50%;
    opacity: ${({ disabled }) => disabled ? 0.7 : 1};
    cursor: ${({ disabled }) => disabled ? 'auto' : 'pointer'};
`

export default CenterNew;