import { DefaultTheme } from "styled-components";
const rem = (value: number) => { return value + "rem" };

const theme: DefaultTheme = {
    basicWidth: "320px",

    color: {
        main: "#F84F39;",
        main_light: "#EF887B",
        sub: '#6E917B',
        sub_light: '#88AC96',
        sub_dark:'#5B7966',
        disabled_main: "#FF7967",
        dep_gray: "#a5a0a0",
        disabled: "#E8E8E8",
        placeholder: '#BBBBBB',
        offWhite: '#FCFCFC',
        line: '#ECEEF3',
        b_font: '#343A40',
        border:"#DBDBDB",
        TitleActive:"#343A40",
        hover : 'rgb(255, 250, 250)'
    },
    fontSize: {
        Title1:rem(4.8),
        Title2: rem(3.2),
        Title3: rem(2.4),
        Large: rem(1.8),
        Regular:rem(1.6),
        Small: rem(1.4),
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