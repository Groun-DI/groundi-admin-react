import styled from "styled-components";

type Props = {
    layout?: string;
    justify?: string;
    align?: string;
    gap?: number;
}

const Flex = styled.div<Props>`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: ${({ layout }) => layout || 'row'};
    align-items: ${({ align }) => align || 'center'};
    justify-content: ${({ justify }) => justify || 'center'};
    gap:${({ gap }) => gap + "px" || "0px"};
`

export default Flex; 