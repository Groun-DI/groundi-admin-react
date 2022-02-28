import styled from "styled-components";

type Props = {
    weight: number
}

const Typography = {
    Title1: styled.h1<Props>`
        font-size: ${({ theme }) => theme.fontSize.Title1};
        letter-spacing: 1.3px;
        font-weight: ${({ weight }) => weight || 400};
    `,
    Title2: styled.h1<Props>`
        font-size: ${({ theme }) => theme.fontSize.Title2};
        letter-spacing: 1.3px;
        font-weight: ${({ weight }) => weight || 400};
    `,
    Title3: styled.h1<Props>`
        font-size: ${({ theme }) => theme.fontSize.Title3};
        letter-spacing: 1.3px;
        font-weight: ${({ weight }) => weight || 400};
    `,
    Large: styled.h1<Props>`
        font-size: ${({ theme }) => theme.fontSize.Large};
        letter-spacing: 1.3px;
        font-weight: ${({ weight }) => weight || 400};
    `,
    Regular: styled.h1<Props>`
        font-size: ${({ theme }) => theme.fontSize.Regular};
        letter-spacing: 1.3px;
        font-weight: ${({ weight }) => weight || 400};
    `,
    Small: styled.h1<Props>`
        font-size: ${({ theme }) => theme.fontSize.Small};
        letter-spacing: 1.3px;
        font-weight: ${({ weight }) => weight || 400};
    `,
    Micro: styled.h1<Props>`
        font-size: ${({ theme }) => theme.fontSize.Micro};
        letter-spacing: 1.3px;
        font-weight: ${({ weight }) => weight || 400};
    `
}

export default Typography;