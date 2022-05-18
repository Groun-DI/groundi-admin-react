import styled from "styled-components";
import { theme } from "styles/theme";

type Props = {
    bg?: string
}
const Wrapper = styled.div<Props>`
    display: block;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    background-color: ${({ bg }) => bg ? bg : theme.color.white};
`

export default Wrapper;