import { DefaultTheme } from "./styled.d";
const rem = (value: number) => { return value + "rem" };

const theme: DefaultTheme = {
    basicWidth: "320px",
    color: {
        main: "#F84F39;",
        main_light: "#FF7967",
        sub: '#6E917B',
        sub_light: '#88AC96',
        sub_dark: '#5B7966',
        disabled_main: "#FF7967",
        disabled: "#E8E8E8",
        placeholder: '#BBBBBB',
        offWhite: '#FCFCFC',
        line: '#ECEEF3',
        b_font: '#343A40',
        border: "#DBDBDB",
        TitleActive: "#343A40",
        hover: 'rgb(255, 250, 250)',

        red: "#F84F39",
        dep_beige: "#D7BEB9",
        light_beige: "#FFF5EF",
        white: "#ffffff",
        light_gray: "#EEEEEE",
        dep_gray: "#636363",
        dark_black: "#0E0E0E",
        dep_green: "#008B48",
        light_green: "#0CFF8A",
        input_invalid : "#BA2714",
        input_valid : "#0CFF8A"
    },
    svgColor: {
        main: "invert(64%) sepia(57%) saturate(7142%) hue-rotate(337deg) brightness(96%) contrast(102%)"
    },
    fontSize: {
        Title1: rem(4.8),
        Title2: rem(3.2),
        Title3: rem(2.4),
        Large: rem(1.8),
        Regular: rem(1.6),
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
    },
    device: {
        mobile: `screen and (max-width:767px)`,
        tablet: `screen and (min-width:768px) and (max-width: 1023px)`,
        pc: `screen and (min-width:1024px)`,
    },
    fontAlign: {
        l: "left",
        c: "center",
        r: "right",
    },
    itemAlign: {
        s: "start",
        c: "center",
        e: "end",
    },
    justifyAlign: {
        s: "flex-start",
        c: "center",
        e: "flex-end",
        sb: "space-between"
    },
    layout: {
        r: "row",
        c: "column"
    }
};

export { theme };