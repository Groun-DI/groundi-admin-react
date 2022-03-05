import { DefaultTheme } from "styled-components";
const rem = (value: number) => { return value + "rem" };

const theme: DefaultTheme = {
    basicWidth: "320px",

    color: {
        main: "#F84F39;",
        disabled_main: "#FF7967",
        dep_gray: "#a5a0a0",
        disabled: "#E8E8E8",
        placeholder: '#BBBBBB',
        offWhite: '#FCFCFC',
        line: '#ECEEF3',
        b_font: '#343A40',
    },
    fontSize: {
        Title1: rem(5.6),
        Title2:rem(4.8),
        Title3: rem(3.2),
        Large: rem(2.4),
        Regular: rem(1.8),
        Small:rem(1.6),
        Micro: rem(1.1),
    },
    fontWeight: {
        Regular: 400,
        Medium: 500,
        SemiBold: 600,
        Bold: 700,
        ExtraBold: 800,
        Black: 900,
    }
};

export { theme };