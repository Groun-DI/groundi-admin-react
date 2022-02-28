import styled from "styled-components";

const Button = styled.button`
    width: 400px;
    height: 64px;
    font-size: ${({ theme }) => theme.fontSize.Regular};
    background-color: ${({ theme }) => theme.color.main};
    color: white;
    border: 0px;
    border-radius: 4px;
    cursor: pointer;
    :hover{
        opacity: 0.7;
    }
`

export default Button;