import client from "services/axios";
import styled from "styled-components";
import Typography from 'components/style/Typography';
import { useState } from "react";
import Wrapper from "components/style/Wrapper";
import { theme } from "styles/theme";
import Flex from "components/style/Flex";
import NaverMapService from "services/naver.map.service";
import Modal from "containers/Modal";
import FileUploadInput from "components/input/fileUpload.input";
import LogoNavigation from "components/frame/LogoNavigation";
import Select from "components/select";
import numberList from 'data/first-phoneNumber.json';
import { name, areaNumber, phoneNumber, address, detailAddress, busniessLicenseFile, busniessLicenseNumber } from "utils/center-create.input";
import Button from "components/input/Button";
import StyleButton from "components/style/Button";
import SearchInput from "components/input/SearchInput";
import NaverGeocodingService from "services/naver.geocoding.service";
import { NgsResAddressBody } from "dto/naver-geocoding.dto";
import { Input, Group } from "components/input";
import Input1 from "components/input/Input-1";

const MapStyle = {
    width: '100%',
    height: '30vh',
    marginTop: '10px',
    borderRadius: '8px'
}

const Page = () => {
    const [resAddress, setResAddress] = useState<NgsResAddressBody[]>();
    const [selectAddress, setSelectAddress] = useState<NgsResAddressBody>();
    const [latitude, setLatitude] = useState<number>();
    const [longitude, setLongitude] = useState<number>();
    const [stateAddressSearchModal, setStateAddressSearchModal] = useState<boolean>(false);
    const [nowFormStep, setNowFormStep] = useState<number>(1);

    const onSubmit = async (e: React.FormEvent) => {
        let formData = new FormData();
        if (busniessLicenseFile.getValue() !== undefined) {
            formData.set(busniessLicenseFile.elements.name, busniessLicenseFile.getValue());
        }

        formData.append("data", JSON.stringify({
            name: name.getValue(),
            phoneNumber: phoneNumber.getValue(),
            address: address.getValue(),
            detailAddress: detailAddress.getValue(),
            busniessLicenseNumber: busniessLicenseNumber.getValue(),
            latitude: 0,
            longitude: 0
        }));

        const res = await client.post(process.env.REACT_APP_API_URL + 'centers', formData, {
            headers: {
                'Content-Type': 'multipart/form-data;',
                'Accept': '*/*'
            }
        });

        console.log(res);
    };

    const preStep = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setNowFormStep(nowFormStep - 1);
    }

    const nextStep = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setNowFormStep(nowFormStep + 1);
    }

    const handlerOnKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            setResAddress(await NaverGeocodingService(address.getValue()));
            return false;
        };
    }

    const handlerOnClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setResAddress(await NaverGeocodingService(address.getValue()));
        return false;
    }

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        address.setValue(e.target.value);
        //  setResAddress(await NaverGeocodingService(e.target.value));
    }

    const showModal = () => {
        return (
            <Modal
                title="주소 등록"
                isOpen={stateAddressSearchModal}
                isClose={(click: boolean) => setStateAddressSearchModal(click)}>
                <div>
                    <ModalInputWrap>
                        <SearchInput
                            {...address.elements}
                            value={address.getValue()}
                            onChange={handleChange}
                            onKeyPress={handlerOnKeyPress}
                            onClick={handlerOnClick} />
                    </ModalInputWrap>
                    {
                        resAddress ? (
                            <SelectListBox>
                                <ul>
                                    {
                                        resAddress.map((item, k) => (
                                            <li key={k}>
                                                <input type="radio" id={k.toString()} name="address" value={item.roadAddr} />
                                                <label htmlFor={k.toString()} onClick={(e) => setSelectAddress(item)}>
                                                    <span>
                                                        <i className="fn-booking fn-booking-check2" aria-hidden="true" />
                                                    </span>
                                                    <Typography.Regular spacing={-0.3}>{item.roadAddr}</Typography.Regular>
                                                    <SubTitleWrap>
                                                        <Typography.Micro>지번</Typography.Micro>
                                                        <Typography.Small color={theme.color.dep_gray} spacing={-0.3}>{item.jibunAddress} </Typography.Small>
                                                    </SubTitleWrap>
                                                </label>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </SelectListBox>
                        ) : (
                                <TypographyWrap>
                                    <Typography.Small color={theme.color.dep_gray}>도로명이나 지역명을 이용해서 검색해보세요.<br />건물번호, 번지를 입력하시면 정확하게 검색됩니다.</Typography.Small>
                                </TypographyWrap>
                            )
                    }{
                        selectAddress && (
                            <ContentFooter>
                                <Typography.Regular>{selectAddress?.roadAddr}</Typography.Regular>
                                <Input {...detailAddress.elements} onChange={(e) => detailAddress.setValue(e.target.value)} errorMessage="" />
                                <ModalButton onClick={() => setStateAddressSearchModal(false)}><Typography.Small spacing={-.43} color="#fff" weight={theme.fontWeight.SemiBold}>입력하기</Typography.Small></ModalButton>
                            </ContentFooter>
                        )
                    }
                </div>
            </Modal>
        )
    }

    switch (nowFormStep) {
        case 1:
            return (
                <>
                    <LogoNavigation />
                    <Wrapper>
                        <Container>
                            <ContentHeader>
                                <Typography.Title2 weight={theme.fontWeight.Bold}>개설할 센터의 정보를 입력해주세요</Typography.Title2>
                            </ContentHeader>
                            <ContentBody>
                                <Input1 {...name.elements} onChange={(e) => name.setValue(e.target.value)} value={name.getValue()}/>
                                <Flex>
                                    {/* { <StyleButton onClick={nextStep}
                                        disabled={!name.inputElements.invalid || phoneNumber.inputElements.invalid || !address.getValue() ? true : false}>다음</StyleButton> } */}
                                    <StyleButton onClick={preStep} disabled={false}>이전</StyleButton>
                                    <StyleButton onClick={nextStep} disabled={false}>다음</StyleButton>
                                </Flex>
                            </ContentBody>
                        </Container>
                    </Wrapper>
                </>
            )
        case 2:
            return (
                <>
                    <LogoNavigation />
                    <Wrapper>
                        <Container>
                            <ContentHeader>
                                <Typography.Title3 weight={theme.fontWeight.ExtraBold}>개설할 센터의 정보를 입력해주세요</Typography.Title3>
                            </ContentHeader>
                            <ContentBody>
                                <Flex gap={30}>
                                    <Group label={areaNumber.elements.label}>
                                        <Select style={{ width: '20%' }}  {...areaNumber.elements} onChange={(e) => areaNumber.setValue(e.target.value)} options={numberList} />
                                        <Input style={{ width: '80%' }}  {...phoneNumber.elements} value={phoneNumber.getValue()} onChange={(e) => phoneNumber.setValue(e.target.value)} />
                                    </Group>
                                </Flex>
                                <Flex>
                                    {/* { <StyleButton onClick={nextStep}
                                        disabled={!name.inputElements.invalid || phoneNumber.inputElements.invalid || !address.getValue() ? true : false}>다음</StyleButton> } */}
                                    <StyleButton onClick={preStep} disabled={false}>이전</StyleButton>
                                    <StyleButton onClick={nextStep} disabled={false}>다음</StyleButton>
                                </Flex>
                            </ContentBody>
                        </Container>
                    </Wrapper>
                </>
            )
        case 3:
            return (
                <>
                    <LogoNavigation />
                    <Wrapper>
                        <Container>
                            <ContentHeader>
                                <Typography.Title3 weight={theme.fontWeight.ExtraBold}>개설할 센터의 정보를 입력해주세요</Typography.Title3>
                            </ContentHeader>
                            <ContentBody>
                                <Flex gap={30}>
                                    <Button
                                        label="주소를 입력해주세요"
                                        value={address.getValue()}
                                        onClick={() => setStateAddressSearchModal(true)}>동/리/도로명으로 검색해주세요.</Button>
                                    {address.getValue() && <Input {...detailAddress.elements} value={detailAddress.getValue()} onChange={(e) => detailAddress.setValue(e.target.value)} />}
                                    {showModal()}
                                </Flex>
                                {(latitude && longitude) && <NaverMapService lat={latitude} lng={longitude} CustomStyle={MapStyle} />}
                                <Flex>
                                    {/* { <StyleButton onClick={nextStep}
                                        disabled={!name.inputElements.invalid || phoneNumber.inputElements.invalid || !address.getValue() ? true : false}>다음</StyleButton> } */}
                                    <StyleButton onClick={preStep} disabled={false}>이전</StyleButton>
                                    <StyleButton onClick={nextStep} disabled={false}>다음</StyleButton>
                                </Flex>
                            </ContentBody>
                        </Container>
                    </Wrapper>
                </>
            )
        case 4:
            return (
                <>
                    <LogoNavigation />
                    <Wrapper>
                        <Container>
                            <ContentBody>
                                <Flex gap={30}>
                                    <InputWrap>
                                        <Input {...busniessLicenseNumber.elements} onChange={(e) => busniessLicenseNumber.setValue(Number(e.target.value))} value={busniessLicenseNumber.getValue()} />
                                        <FileUploadInput {...busniessLicenseFile.elements} onChange={(file: File) => busniessLicenseFile.setValue(file)} value={busniessLicenseFile.getValue()} />
                                        <Typography.Micro>
                                            • 5MB 이하의 jpg, jpeg, gif, png 파일형식만 가능합니다.<br />
                                            • 주민등록번호 등 개인정보가 보이지 않도록 처리한 뒤 업로드 바랍니다.<br />
                                            • 주민등록번호 등 개인정보가 표시된 경우, 해당 서류는 접수 즉시 파기되며 서비스 이용이 지연될 수 있습니다.
                                        </Typography.Micro>
                                    </InputWrap>
                                </Flex>
                                <Flex>
                                    {/* <StyleButton type="submit" onClick={onSubmit}
                                        disabled={!ceoName.invalid || !busniessType.invalid || !busniessCode.invalid ? true : false}>개설 완료하기!</StyleButton> */}
                                    <StyleButton onClick={preStep} disabled={false}>이전</StyleButton>
                                    <CustomStyleButton type="submit" onClick={onSubmit} disabled={false}>개설 완료하기!</CustomStyleButton>
                                </Flex>
                            </ContentBody>
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

const Container = styled.div`
    max-width: 550px;
    width: 100%;
    margin: 0 auto;
`

const ContentBody = styled.div`
    margin-top: 70px;
`

const ContentHeader = styled.div`
    margin-top: 10px;
`

const CustomStyleButton = styled(StyleButton) <{ disabled: boolean }>`
    margin: 0 auto;
    margin-top: 70px;
    width: 50%;
    opacity: ${({ disabled }) => disabled ? 0.7 : 1};
    cursor: ${({ disabled }) => disabled ? 'auto' : 'pointer'};
`

const ModalButton = styled.button`
    width: 100%;
    line-height: 3rem;
    background-color: ${({ theme }) => theme.color.main};
    border-radius: 12px;
    border: 0px;
    height: 54px;
    margin-top: 23px;
    line-height: 2rem;
    cursor: pointer;
`

const ContentFooter = styled.div`
    width: 100%;
    height: auto;
    position: absolute;
    bottom: 0;
    background-color: #fff;
    padding: 24px 20px 20px;
    box-shadow: 0 -2px 12px 0 rgb(0 0 0 / 9%);
    border: 1px solid rgba(0,0,0,.05);
    z-index: 12000;
    input{
        margin-top: 12px;
    }
`

const ModalInputWrap = styled.div`
    padding: 20px 20px 0;
`

const SelectListBox = styled.div`
    ul{
        height: calc(100% - 148px);
        margin-top: 20px;
        overflow-y: auto;
        background-color: #fff;
    }
    li{
        border-top: 1px solid #ecf0f2;
    }
    label{
        position: relative;
        display: block;
        padding: 19px 20px 18px 60px;
        cursor: pointer;
    }
    input{
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        padding: 0;
        overflow: hidden;
        clip: rect(0,0,0,0);
        border: 0;
    }

    input[type="radio"]:checked + label span{
        background-color: ${({ theme }) => theme.color.main};
    }
    input[type="radio"] + label > span{
        position: absolute;
        top: 20px;
        left: 20px;
        width: 28px;
        height: 28px;
        box-sizing: border-box;
        border-radius: 50%;
        border: 1px solid #e2e2e2;
    }
`
const SubTitleWrap = styled.div`
    position: relative;
    margin-top: 7px;
    padding-left: 34px;
    line-height: 2.1rem;
    color: #888;
    p{
        position: absolute;
        top: 1px;
        left: 0;
        width: 30px;
        margin-right: 8px;
        border-radius: 4px;
        border: 1px solid #888;
        letter-spacing: -.31px;
        color: #888;
        text-align: center;
        line-height: 1.8rem;
    }
`

const TypographyWrap = styled.div`
    padding: 16px 20px 0;
    color: #8f8f8f;
    line-height: 1.3;
`
export default Page;