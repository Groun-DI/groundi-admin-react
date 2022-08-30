import "styled-components";


    export interface DefaultTheme {
        basicWidth: string;
        color: {
            main: string;
            main_light: string;
            sub: string;
            sub_light: string;
            sub_dark: string;
            disabled_main: string;
            disabled: string;
            placeholder: string;
            offWhite: string;
            line: string;
            b_font: string;
            border: string;
            TitleActive: string;
            hover: string;

            red: string;
            dep_beige: string;
            light_beige: string;
            white: string;
            light_gray: string;
            dep_gray: string;
            dark_black: string;
            dep_green: string;
            light_green: string;
            input_invalid : string;
            input_valid:string;
        };
        svgColor: {
            main: string;
        }
        fontSize: {
            Title1: string;
            Title2: string;
            Title3: string;
            Large: string;
            Regular: string;
            Small: string;
            Micro: string;
        },
        fontWeight: {
            Regular: number,
            Medium: number,
            SemiBold: number,
            Bold: number,
            ExtraBold: number,
            Black: number,
        },
        device: {
            mobile: string,
            tablet: string,
            pc: string,
        },
        fontAlign: {
            l: string,
            c: string,
            r: string
        }
        itemAlign: {
            s: string,
            c: string,
            e: string
        },
        justifyAlign: {
            s: string,
            c: string,
            e: string,
            sb: string
        },
        layout: {
            r: string,
            c: string
        }
    }
