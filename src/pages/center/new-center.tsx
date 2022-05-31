import { useState } from "react";
// style
import { theme } from "styles/theme";
import styled from "styled-components";
import Wrapper from "components/style/Wrapper";
import Typography from 'components/style/Typography';
import Flex from "components/style/Flex";
import Modal from "containers/Modal";
import FileUploadInput from "components/input/fileUpload.input";
import LogoNavigation from "components/frame/LogoNavigation";
import Select from "components/select";
import Button from "components/input/Button";
import SearchInput from "components/input/SearchInput";
import Input1 from "components/input/Input-1";
import StepForm from "containers/StepForm";
import AddressSelectionBox from "containers/AddressSelectionBox";
// utils + data
import numberList from 'data/first-phoneNumber.json';
import CenterCreateInputElements from "utils/center-create.input";
// service
import NaverGeocodingService from "services/naver.geocoding.service";
import NaverMapService from "services/naver.map.service";
import client from "services/axios";
// dto
import { NgsResAddressBody } from "dto/naver-geocoding.dto";

const MapStyle = {
    width: '100%',
    height: '30vh',
    marginTop: '10px',
    borderRadius: '8px'
}

const Page = () => {
    const [searchAddress, setSearchAddress] = useState<NgsResAddressBody[]>([{
        roadAddr: "",
        jibunAddress: "string",
        distance: 0,
        addressElements: [{
            longName: "",
            shortName: "",
            code: "",
        }],
    }]);
    const [selectAddress, setSelectAddress] = useState<NgsResAddressBody>();
    const [stateAddressSearchModal, setStateAddressSearchModal] = useState<boolean>(false);

    const [name, setName] = useState<string>('');
    const [areaNumber, setAreaNumber] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [detailAddress, setDetailAddress] = useState<string>('');
    const [busniessLicenseNumber, setBusniessLicenseNumber] = useState<string>('');
    const [busniessLicenseFile, setBusniessLicenseFile] = useState<File | null>(null);
    const [latitude, setLatitude] = useState<number>(0);
    const [longitude, setLongitude] = useState<number>(0);

    const onSubmit = async () => {
        let formData = new FormData();

        if (busniessLicenseFile) formData.set(busniessLicenseFile.name, busniessLicenseFile);

        formData.append("data", JSON.stringify({
            name: name,
            phoneNumber: phoneNumber,
            address: address,
            detailAddress: detailAddress,
            busniessLicenseNumber: busniessLicenseNumber,
            latitude: latitude,
            longitude: longitude
        }));

        const res = await client.post(process.env.REACT_APP_API_URL + 'centers', formData, {
            headers: {
                'Content-Type': 'multipart/form-data;',
                'Accept': '*/*'
            }
        });
    };

    const getGeocode = async () => {
       // const { lat, log } = await client.post(process.env.REACT_APP_API_URL + 'centers', selectAddress).then((res) => { return res.data });

        setLatitude(0);
        setLongitude(0);
        setStateAddressSearchModal(false);
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
                            elements={CenterCreateInputElements.address}
                            value={address}
                            setResult={setSearchAddress}
                            onChange={setAddress}
                            post={NaverGeocodingService} />
                    </ModalInputWrap>
                    {searchAddress && <AddressSelectionBox options={searchAddress} handlerOnClick={(item: NgsResAddressBody) => setSelectAddress(item)} />}
                    {!searchAddress &&
                        <TypographyWrap>
                            <Typography.Small color={theme.color.dep_gray}>도로명이나 지역명을 이용해서 검색해보세요.<br />건물번호, 번지를 입력하시면 정확하게 검색됩니다.</Typography.Small>
                        </TypographyWrap>
                    }
                    {
                        selectAddress && (
                            <ContentFooter>
                                <Typography.Regular>{selectAddress?.roadAddr}</Typography.Regular>
                                <ModalButton onClick={getGeocode}><Typography.Small spacing={-.43} color="#fff" weight={theme.fontWeight.SemiBold}>입력하기</Typography.Small></ModalButton>
                            </ContentFooter>
                        )
                    }
                </div>
            </Modal>
        )
    }

    const items = [
        {
            title: "개설할 센터의 정보를 입력해주세요",
            body: <Input1 value={name} elements={CenterCreateInputElements.name} onChange={setName} />
        },
        {
            title: "개설할 센터의 정보를 입력해주세요",
            body: (
                <Flex gap={10} layout={theme.layout.r} align="baseline" justify={theme.justifyAlign.c}>
                    <Select style={{ width: '20%' }} elements={CenterCreateInputElements.areaNumber} onChange={setAreaNumber} options={numberList} value={areaNumber} />
                    <Input1 style={{ width: '80%' }} value={phoneNumber} elements={CenterCreateInputElements.phoneNumber} onChange={setPhoneNumber} />
                </Flex>
            )
        },
        {
            title: "개설할 센터의 정보를 입력해주세요",
            body: (
                <Flex gap={30}>
                    <Button
                        value={address}
                        onClick={() => setStateAddressSearchModal(true)}>동/리/도로명으로 검색해주세요.</Button>
                    {selectAddress && <Input1 elements={CenterCreateInputElements.detailAddress} value={detailAddress} onChange={setDetailAddress} />}
                    {selectAddress && <NaverMapService lat={0} lng={0} CustomStyle={MapStyle} />}
                    {showModal()}
                </Flex>
            )
        },
        {
            title: "개설할 센터의 정보를 입력해주세요",
            body: (
                <Flex>
                    <InputWrap>
                        <Input1 elements={CenterCreateInputElements.busniessLicenseNumber} onChange={setBusniessLicenseNumber} value={busniessLicenseNumber} />
                        <FileUploadInput elements={CenterCreateInputElements.busniessLicenseFile} onChange={setBusniessLicenseFile} value={busniessLicenseFile} />
                        <Typography.Micro align={theme.fontAlign.l}>
                            • 주민등록번호 등 개인정보가 표시된 경우, 해당 서류는 접수 즉시 파기되며 서비스 이용이 지연될 수 있습니다.
                        </Typography.Micro>
                    </InputWrap>
                </Flex>
            )
        }
    ];

    return (
        <>
            <LogoNavigation />
            <Wrapper>
                <StepForm items={items} onSubmit={onSubmit} />
            </Wrapper>
        </>
    )
}

const InputWrap = styled.div`
    width: 100%;
    p{
        margin-top:10px;
    }
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


const TypographyWrap = styled.div`
    padding: 16px 20px 0;
    color: #8f8f8f;
    line-height: 1.3;
`
export default Page;