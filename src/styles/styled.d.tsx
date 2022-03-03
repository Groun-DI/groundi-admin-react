import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        basicWidth: string;
        color: {
            main: string;
            disabled_main: string;
            dep_gray: string;
            disabled: string;
            placeholder: string;
            offWhite: string;
            line: string;
            b_font: string;
        };
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
        }
    }
}
