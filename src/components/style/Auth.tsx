import styled from "styled-components";

export const BoxWrapper = styled.div`
    position: relative;
`
export const BoxHeader = styled.div`
    margin-bottom: 45px;
    img{
        margin-bottom: 30px;
    }
`

export const BoxContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(50%, 20%);
    width: 480px;
    margin: 0 auto;
    border: 1px solid black;
    border-radius:10px;
    padding: 50px 40px 30px 40px;
`

export const BoxContent = styled.div`
    input{
        margin: 4px 0px;
    }
    button{
        margin: 8px 0px;
    }
`

export const BoxFooter = styled.div`
    width: 100%;
    margin-top: 30px;
    a{
        font-size: ${({ theme }) => theme.fontSize.Small};
        color: ${({ theme }) => theme.color.placeholder};
        font-weight: ${({ theme }) => theme.fontWeight.Regular};
        margin: 0px 10px;
    }
`