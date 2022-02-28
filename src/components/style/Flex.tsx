import styled from "styled-components";

type Props = {
    layout?: string;
    content?: string
}

const Flex = styled.div<Props>`
    display: flex;
    height: 100%;
    flex-direction: ${({ layout }) => layout || 'row'};
    align-items: center;
    justify-content: ${({ content }) => content || 'center'};
    & > div,
    & >ul {
        flex:1;
    }
`

export default Flex; 