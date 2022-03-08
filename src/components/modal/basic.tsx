import { useCallback, useEffect, useRef } from "react"
import styled from "styled-components"

type Props = {
    isOpen: boolean;
    isClose: (click: boolean) => void;
    children: React.ReactChild
}
const ModalBasic: React.FC<Props> = ({ isOpen, isClose, children }) => {
    const outSideClickRef = useRef<any>();

    const handleOurSideClickEvent = useCallback(e => {
        if (!outSideClickRef.current.contains(e.target)) {
            isClose(false)
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
            <Wrapper isOpen={isOpen}>
                <Conatiner ref={outSideClickRef}>
                    {children}
                </Conatiner>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div<{isOpen: boolean}>`
    width: 100%;
    border-radius: 15px;
    border: 0px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
    z-index: 5555;
    visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
`

const Conatiner = styled.div`
    display: inline-block;
    margin: 10px 0px;
    background-color: #fff;
`

export default ModalBasic