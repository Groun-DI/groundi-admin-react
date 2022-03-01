import styled from "styled-components";

type Props = {
    weight?: number,
    color?: string
}

const Typography = {
    Title1: styled.h1<Props>`
        font-size: ${({ theme }) => theme.fontSize.Title1};
        letter-spacing: 1.3px;
        font-weight: ${({ weight }) => weight || 400};
        color: ${({ theme, color }) => color || theme.color.b_font};
    `,
    Title2: styled.h1<Props>`
        font-size: ${({ theme }) => theme.fontSize.Title2};
        letter-spacing: 1.3px;
        font-weight: ${({ weight }) => weight || 400};
        color: ${({ theme, color }) => color || theme.color.b_font};
    `,
    Title3: styled.h1<Props>`
        font-size: ${({ theme }) => theme.fontSize.Title3};
        letter-spacing: 1.3px;
        font-weight: ${({ weight }) => weight || 400};
        color: ${({ theme, color }) => color || theme.color.b_font};
    `,
    Large: styled.h1<Props>`
        font-size: ${({ theme }) => theme.fontSize.Large};
        letter-spacing: 1.3px;
        font-weight: ${({ weight }) => weight || 400};
        color: ${({ theme, color }) => color || theme.color.b_font};
    `,
    Regular: styled.h1<Props>`
        font-size: ${({ theme }) => theme.fontSize.Regular};
        letter-spacing: 1.3px;
        font-weight: ${({ weight }) => weight || 400};
        color: ${({ theme, color }) => color || theme.color.b_font};
    `,
    Small: styled.h1<Props>`
        font-size: ${({ theme }) => theme.fontSize.Small};
        letter-spacing: 1.3px;
        font-weight: ${({ weight }) => weight || 400};
        color: ${({ theme, color }) => color || theme.color.b_font};
    `,
    Micro: styled.h1<Props>`
        font-size: ${({ theme }) => theme.fontSize.Micro};
        letter-spacing: 1.3px;
        font-weight: ${({ weight }) => weight || 400};
        color: ${({ theme, color }) => color || theme.color.b_font};
    `
}

export default Typography;