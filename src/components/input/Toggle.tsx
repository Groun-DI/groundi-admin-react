import React from 'react';
import styled from 'styled-components';

type Props = {
    left: string
    right: string
    leftColor: string
    rightColor: string
    leftBgColor: string
    rightBgColor: string
    circleColor: string
    setChecked: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

type CheckBoxProp = {
    left: string
    right: string
    leftColor: string
    rightColor: string
    leftBgColor: string
    rightBgColor: string
    circleColor: string
}

const Toggle: React.FC<Props> = ({ left, right, leftColor, rightColor, leftBgColor, rightBgColor, circleColor, setChecked }) => {
    return (
        <Wrapper>
            <CheckBox
                left={left}
                right={right}
                leftColor={leftColor}
                rightColor={rightColor}
                leftBgColor={leftBgColor}
                rightBgColor={rightBgColor}
                circleColor={circleColor}
                onChange={setChecked}
                type="checkbox"
            />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex; 
    justify-content: center; 
    align-items: center; 
    z-index: 0;
`

const CheckBox = styled.input<CheckBoxProp>`
    z-index: 1; 
    width: 6.4rem; 
    height: 3.6rem; 
    background: ${({theme}) => theme.color.main_light}; 
    background: ${(props) => props.leftBgColor ?? props.leftBgColor}; 
    border-radius: 2em; 
    
    /* 선택X 텍스트 */ 
    ::before { 
        position: absolute;
        content: '${(props) => props.left}'; 
        padding-left: 1em;
        color: ${(props) => props.leftColor}; 
        font-weight: ${({theme}) => theme.fontWeight.SemiBold}; 
        font-size: ${({theme}) => theme.fontSize.Small};
        transition: all 0.2s ease-in-out; 
    } 
    
    /* 선택X 원 */ 
    ::after { 
        position: relative; 
        content: ''; 
        display: block; 
        width: 2em; 
        height: 2em; 
        top: 50%; 
        left: calc(6.4rem - 2.4em); 
        transform: translate(0, -50%);
        border-radius: 50%; 
        background: ${(props) => props.circleColor};
        
        /* 원 이동 트랜지션 */ 
        transition: all 0.2s ease-in-out; 
    } 
    
    &:checked { 
        background: ${(props) => props.rightBgColor ?? props.theme.color.main}; 
        
        /* 배경색 변경 트랜지션 */ 
        transition: all 0.2s ease-in-out; 
        
        /* 선택 O 텍스트 */ 
        ::before { 
            position: absolute; 
            padding-right: 1em; 
            content: '${(props) => props.right ?? ''}'; 
            align-items: center; 
            justify-content: flex-end; 
            color: ${(props) => props.rightColor ?? "white"}; 
        } 
        /* 선택 O 원 */ 
        ::after { 
            content: ''; 
            z-index: 2; 
            left: calc((2rem - 0.9em) / 2); 
            width: 2em; 
            height: 2em; 
            top: 50%;
            transform: translate(0, -50%);
            display: block; 
            border-radius: 50%; 
            background: ${(props) => props.circleColor ?? "white"}; position: relative; 
        } 
    }
`

export default Toggle;