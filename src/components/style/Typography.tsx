import styled from "styled-components";

type Props = {
    weight?: number,
    color?: string,
    spacing?: number
}

const Typography = {
    Title1: styled.h1<Props>`
        font-size: ${({ theme }) => theme.fontSize.Title1};
        font-weight: ${({ weight }) => weight || 400};
        letter-spacing: ${({ spacing }) => spacing + "px" || "1px"};
        color: ${({ theme, color }) => color || theme.color.b_font};
    `,
    Title2: styled.h2<Props>`
        font-size: ${({ theme }) => theme.fontSize.Title2};
        font-weight: ${({ weight }) => weight || 400};
        color: ${({ theme, color }) => color || theme.color.b_font};
        letter-spacing: ${({ spacing }) => spacing + "px" || "1px"};
    `,
    Title3: styled.h3<Props>`
        font-size: ${({ theme }) => theme.fontSize.Title3};
        font-weight: ${({ weight }) => weight || 400};
        color: ${({ theme, color }) => color || theme.color.b_font};
        letter-spacing: ${({ spacing }) => spacing + "px" || "1px"};
    `,
    Large: styled.h4<Props>`
        font-size: ${({ theme }) => theme.fontSize.Large};
        font-weight: ${({ weight }) => weight || 400};
        color: ${({ theme, color }) => color || theme.color.b_font};
        letter-spacing: ${({ spacing }) => spacing + "px" || "1px"};
    `,
    Regular: styled.h5<Props>`
        font-size: ${({ theme }) => theme.fontSize.Regular};
        font-weight: ${({ weight }) => weight || 400};
        color: ${({ theme, color }) => color || theme.color.b_font};
        letter-spacing: ${({ spacing }) => spacing + "px" || "1px"};
    `,
    Small: styled.h6<Props>`
        font-size: ${({ theme }) => theme.fontSize.Small};
        font-weight: ${({ weight }) => weight || 400};
        color: ${({ theme, color }) => color || theme.color.b_font};
        letter-spacing: ${({ spacing }) => spacing + "px" || "1px"};
    `,
    Micro: styled.p<Props>`
        font-size: ${({ theme }) => theme.fontSize.Micro};
        font-weight: ${({ weight }) => weight || 400};
        color: ${({ theme, color }) => color || theme.color.b_font};
        letter-spacing: ${({ spacing }) => spacing + "px" || "1px"};
    `
}

export default Typography;