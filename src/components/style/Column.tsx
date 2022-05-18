import styled from "styled-components";
import { theme } from "styles/theme";

type Props = {
    xs: number,
    md: number,
    lg: number,
    children: React.ReactChild | React.ReactChild[]
}
type StyledProps = {
    xs: number,
    md: number,
    lg: number
}

const Column: React.FC<Props> = ({ xs, md, lg, children }) => {
    return (
        <>
            {}
            <Col xs={xs} md={md} lg={lg}></Col>
        </>
    )
}

const Row = styled.div`
    width: 100%;
`

const Col = styled.div<StyledProps>`
    float: left;
    padding: 1rem;
    max-width: 100%;
    margin: 0 auto;
    @media ${theme.device.mobile}{
        width: ${({ xs }) => `calc(100% / ${xs})`};
    }
    @media ${theme.device.tablet}{
        width: ${({ md }) => `calc(100% / ${md})`};
    }
    @media ${theme.device.pc}{
        width: ${({ lg }) => `calc(100% / ${lg})`};
    }
`

export default Col;