import AddressSearchInput from "components/input/AddressSearchInput"
import BoxInput from "components/input/BoxInput"
import Typography from "components/style/Typography"
import Wrapper from "components/style/Wrapper"
import { AddressDto, NgsResAddressBody } from "dto/naver-geocoding.dto"
import { useCallback, useEffect, useRef, useState } from "react"
import NaverGeocodingService from "services/naver.geocoding.service"
import styled, { keyframes } from "styled-components"
import { theme } from "styles/theme"
import { CenterCreateInput } from "inputs/center.create"

type Values = {
    name: string,
    address: string,
    detailAddress: string,
    phoneNumber: string,
    latitude: string,
    longitude: string
}

type Props = {
    isOpen: boolean;
    isClose: (click: boolean) => void;
    inputs: typeof CenterCreateInput;
    formValue: Values;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


const AddressSearchModal: React.FC<Props> = ({ inputs, isOpen, isClose, formValue, onChange }) => {
    const [userInput, setUserInput] = useState<string>('');
    const [resAddress, setResAddress] = useState<NgsResAddressBody[]>();
    const [selectAddress, setSelectAddress] = useState<NgsResAddressBody>();
    const outSideClickRef = useRef<any>();

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (selectAddress) {
            formValue.latitude = selectAddress.y;
            formValue.longitude = selectAddress.x;
            formValue.address = selectAddress.roadAddress;
            isClose(false);
        } else {
            console.log("입력 값이 없습니다.");
        }
    }

    const handlerOnKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            setResAddress(await NaverGeocodingService(userInput));
            return false;
        };
    }

    const handlerOnClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setResAddress(await NaverGeocodingService(userInput));
        return false;
    }
    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(e.target.value);
        setResAddress(await NaverGeocodingService(e.target.value));
    }

    const handleOurSideClickEvent = useCallback(e => {
        if (!outSideClickRef.current.contains(e.target)) {
            isClose(false);
        }
    }, [isClose]);

    useEffect(() => {
        window.addEventListener('mousedown', handleOurSideClickEvent);
        return () => {
            window.removeEventListener('mousedown', handleOurSideClickEvent);
        }
    }, [handleOurSideClickEvent]);

    return (
        <>
            <StyleWrapper isOpen={isOpen}>
                <Container ref={outSideClickRef}>
                    <ContentHeader>
                        <Typography.Regular weight={theme.fontWeight.SemiBold}>주소 등록</Typography.Regular>
                        <CloseButton onClick={(e) => isClose(false)}>
                            <img src="/icon/close.svg" alt="검색 버튼" />
                        </CloseButton>
                    </ContentHeader>
                    <ContentBody>
                        <InputWrap>
                            <AddressSearchInput {...inputs.address}
                                value={userInput}
                                onChange={handleChange}
                                onKeyPress={handlerOnKeyPress}
                                onClick={handlerOnClick}
                            />
                        </InputWrap>
                        {
                            resAddress ? (
                                <SelectListBox>
                                    <ul>
                                        {
                                            resAddress.map((item, k) => (
                                                <li key={k}>
                                                    <input type="radio" id={k.toString()} name="address" value={item.roadAddress} />
                                                    <label htmlFor={k.toString()} onClick={(e) => setSelectAddress(item)}>
                                                        <span>
                                                            <i className="fn-booking fn-booking-check2" aria-hidden="true" />
                                                        </span>
                                                        <Typography.Regular spacing={-0.3}>{item.roadAddress}</Typography.Regular>
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
                                        <Typography.Small color={theme.color.dep_gray}>
                                            도로명이나 지역명을 이용해서 검색해보세요.<br />건물번호, 번지를 입력하시면 정확하게 검색됩니다.
                                        </Typography.Small>
                                    </TypographyWrap>
                                )
                        }
                    </ContentBody>
                    {
                        selectAddress && (
                            <ContentFooter>
                                <Typography.Regular>{selectAddress.roadAddress}</Typography.Regular>
                                <BoxInput {...inputs.detailAddress} onChange={onChange} errorMessage="" />
                                <Button type="button" onClick={handleSubmit}><Typography.Small spacing={-.43} color="#fff" weight={theme.fontWeight.SemiBold}>입력하기</Typography.Small></Button>
                            </ContentFooter>
                        )
                    }

                </Container>
            </StyleWrapper>
        </>
    )
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const CloseButton = styled.button`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 0 20px;    
    background-color: transparent;
    border: none;
    outline: none;
    color: #000;
    cursor: pointer;
`

const Button = styled.button`
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

const StyleWrapper = styled(Wrapper) <{ isOpen: boolean }>`
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.4);
    visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
    animation: ${({ isOpen }) => isOpen ? fadeIn : fadeOut} 0.15s ease-out;
    transition: visibility 0.15s ease-out;
`
const TypographyWrap = styled.div`
    padding: 16px 20px 0;
    color: #8f8f8f;
    line-height: 1.3;
`
const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
    height: 640px;
    border-radius: 15px;
    box-shadow: 0 2px 10px 0 rgb(0 0 0 / 10%);
    border: 1px solid rgba(0,0,0,.05);
    overflow: hidden;
    background-color: #f8f8f8;
    z-index: 11000;
`

const ContentHeader = styled.div`
    position: relative;
    display: flex;
    display: block;
    padding: 19px 0 16px;
    box-shadow: 0 1px 5px 0 rgb(0 0 0 / 5%);
    color: #242424;
    text-align: center;
    background-color: #fff;
`
const ContentBody = styled.div`

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

const InputWrap = styled.div`
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
    line-height: 1.3rem;
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
        line-height: 1.1rem;
    }
`
export default AddressSearchModal