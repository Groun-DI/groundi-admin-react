import AddressSearchInput from "components/input/SearchInput"
import Input from "components/input/Input"
import Typography from "components/style/Typography"
import Wrapper from "components/style/Wrapper"
import { AnyARecord } from "dns"
import { NgsResAddressBody } from "dto/naver-geocoding.dto"
import { Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from "react"
import NaverGeocodingService from "services/naver.geocoding.service"
import styled, { keyframes } from "styled-components"
import { theme } from "styles/theme"
import InputElementsUtils from "utils/inputs.utils"

type Values = {
    title: string,
    address: string,
    detailAddress: string,
    phoneNumber: string,
    latitude: string,
    longitude: string
}

type Props = {
    title: string,
    isOpen: boolean;
    isClose: (click: boolean) => void;
    children: JSX.Element
}


const Modal: React.FC<Props> = ({ title, isOpen, isClose, children }) => {
    const outSideClickRef = useRef<any>();

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
            <ModalWrapper isOpen={isOpen}>
                <Container ref={outSideClickRef}>
                    <ContentHeader>
                        <Typography.Regular weight={theme.fontWeight.SemiBold}>{title}</Typography.Regular>
                        <CloseButton onClick={(e) => isClose(false)}>
                            <img src="/icon/close.svg" alt="닫기 버튼" />
                        </CloseButton>
                    </ContentHeader>
                    {children}
                </Container>
            </ModalWrapper>
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

const ModalWrapper = styled(Wrapper) <{ isOpen: boolean }>`
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

export default Modal