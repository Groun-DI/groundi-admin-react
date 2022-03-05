import styled from "styled-components";

type Props = {
    layout?: string;
    justify?: string;
    gap?: number;
}

const Flex = styled.div<Props>`
    display: flex;
    height: 100%;
    flex-direction: ${({ layout }) => layout || 'row'};
    align-items: center;
    justify-content: ${({ justify }) => justify || 'center'};
    gap:${({ gap }) => gap+"px" || "0px"}; 
    & > div,
    & >ul {
        flex:1;
    }
`

export default Flex; 