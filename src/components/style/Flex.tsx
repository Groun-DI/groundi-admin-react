import styled from "styled-components";

type Alignment = "start" | "center" | "end";

type Props = {
    layout?: "r" | "c";
    justify?: Alignment;
    align?: Alignment;
    gap?: number;
}

const Flex = styled.div<Props>`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: ${({ layout }) => layout ? (layout === "r" ? "row" : "column") : "column"};
    align-items: ${({ align }) => align || "center"};
    justify-content: ${({ justify }) => justify || "center"};
    gap:${({ gap }) => gap + "px" || "0px"};
`

export default Flex; 