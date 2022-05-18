import styled from "styled-components";

type Props = {
    weight?: number,
    color?: string,
    spacing?: number
    align?: string,
}

const Typography = {
    Title1: styled.h1<Props>`
        font-size: ${({ theme }) => theme.fontSize.Title1};
        font-weight: ${({ weight }) => weight || 400};
        letter-spacing: ${({ spacing }) => spacing + "px" || "1px"};
        color: ${({ theme, color }) => color || theme.color.dark_black};
        text-align: ${({ theme, align }) => align || theme.fontAlign.c};
    `,
    Title2: styled.h2<Props>`
        font-size: ${({ theme }) => theme.fontSize.Title2};
        font-weight: ${({ weight }) => weight || 400};
        line-height: 1.3;
        color: ${({ theme, color }) => color || theme.color.dark_black};
        letter-spacing: ${({ spacing }) => spacing + "px" || "1px"};
        text-align: ${({ theme, align }) => align || theme.fontAlign.c};
    `,
    Title3: styled.h3<Props>`
        font-size: ${({ theme }) => theme.fontSize.Title3};
        font-weight: ${({ weight }) => weight || 400};
        color: ${({ theme, color }) => color || theme.color.dark_black};
        line-height: 1.5;
        letter-spacing: ${({ spacing }) => spacing + "px" || "1px"};
        text-align: ${({ theme, align }) => align || theme.fontAlign.c};
    `,
    Large: styled.h4<Props>`
        font-size: ${({ theme }) => theme.fontSize.Large};
        font-weight: ${({ weight }) => weight || 400};
        color: ${({ theme, color }) => color || theme.color.dark_black};
        line-height: 1.5;
        letter-spacing: ${({ spacing }) => spacing + "px" || "1px"};
        text-align: ${({ theme, align }) => align || theme.fontAlign.c};
    `,
    Regular: styled.h5<Props>`
        font-size: ${({ theme }) => theme.fontSize.Regular};
        font-weight: ${({ weight }) => weight || 400};
        color: ${({ theme, color }) => color || theme.color.dark_black};
        letter-spacing: ${({ spacing }) => spacing + "px" || "1px"};
        text-align: ${({ theme, align }) => align || theme.fontAlign.c};
    `,
    Small: styled.h6<Props>`
        font-size: ${({ theme }) => theme.fontSize.Small};
        font-weight: ${({ weight }) => weight || 400};
        color: ${({ theme, color }) => color || theme.color.dark_black};
        letter-spacing: ${({ spacing }) => spacing + "px" || "1px"};
        text-align: ${({ theme, align }) => align || theme.fontAlign.c};
    `,
    Micro: styled.p<Props>`
        font-size: ${({ theme }) => theme.fontSize.Micro};
        font-weight: ${({ weight }) => weight || 400};
        color: ${({ theme, color }) => color || theme.color.dark_black};
        letter-spacing: ${({ spacing }) => spacing + "px" || "1px"};
        line-height: 1.5;
        text-align: ${({ theme, align }) => align || theme.fontAlign.c};
    `
}

export default Typography;