import Typography from "components/style/Typography"
import Wrapper from "components/style/Wrapper"
import { useCallback, useEffect, useRef, useState } from "react"
import styled, { keyframes } from "styled-components"
import { theme } from "styles/theme"

type Props = {
    isOpen: boolean;
    isClose: (click: boolean) => void;
    getValue: (time: string) => void;
}


const TimeStampModal: React.FC<Props> = ({ isOpen, isClose, getValue }) => {
    const outSideClickRef = useRef<any>();
    const [hour, setHour] = useState<string>('0');
    const [time, setTime] = useState<string>('00');

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        getValue(hour + "시간 " + time + "분");
        isClose(false);
    }

    const handleOurSideClickEvent = useCallback(e => {
        if (!outSideClickRef.current.contains(e.target)) {
            isClose(false);
        }
    }, [isClose]);

    // useEffect(() => {
    //     window.addEventListener('mousedown', handleOurSideClickEvent);
    //     return () => {
    //         window.removeEventListener('mousedown', handleOurSideClickEvent);
    //     }
    // }, [handleOurSideClickEvent]);

    return (
        <>
            <StyleWrapper isOpen={isOpen}>
                <Container ref={outSideClickRef}>
                    <ContentHeader>
                        <Typography.Regular weight={theme.fontWeight.SemiBold}>시간 입력</Typography.Regular>
                    </ContentHeader>
                    <ContentMain>
                        <InputWrap>
                            <Input type="number" onChange={(e) => setHour(e.target.value)} />
                            <p>:</p>
                            <Input type="number" onChange={(e) => setTime(e.target.value)} />
                        </InputWrap>
                    </ContentMain>
                    <ContentFooter>
                        <Button onClick={handleSubmit}>저장</Button>
                    </ContentFooter>
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

const Input = styled.input`
    width: 80px;
    height: 80px;
    padding: 18px;
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: 8px;
    font-size: ${({ theme }) => theme.fontSize.Small};
  :hover{
        border: 1px solid ${({ theme }) => theme.color.main};
    }
    :focus:invalid {
        border: 1px solid red !important;
    }
    :focus:invalid ~ span {
        display: block;
    }
`;

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

const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
    height: 300px;
    border-radius: 15px;
    box-shadow: 0 2px 10px 0 rgb(0 0 0 / 10%);
    border: 1px solid rgba(0,0,0,.05);
    overflow: hidden;
    background-color: #fff;
    z-index: 11000;
    padding: 20px;
`

const ContentHeader = styled.div`
    position: relative;
    display: flex;
    display: block;
    padding: 19px 0 16px;
    color: #242424;
    text-align: left;
`
const ContentMain = styled.div`

`
const ContentFooter = styled.div`
    width: 100%;
    height: auto;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 12000;
`

const InputWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export default TimeStampModal