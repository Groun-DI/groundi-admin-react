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
    flex-direction: ${({ theme, layout }) => layout || theme.layout.c};
    align-items: ${({ theme, align }) => align || theme.itemAlign.c};
    justify-content: ${({ theme, justify }) => justify || theme.itemAlign.c};
    gap:${({ gap }) => gap + "px" || "0px"};
`

export default Flex; 