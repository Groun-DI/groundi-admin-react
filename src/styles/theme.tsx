import { DefaultTheme } from "styled-components";

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
        Title1: "56px",
        Title2: "48px",
        Title3: "32px",
        Large: "24px",
        Regular: "18px",
        Small: "16px",
        Micro: "11px",
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