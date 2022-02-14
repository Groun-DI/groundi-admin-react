import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        basicWidth: string;
        color: {
            main: string;
            sub: string;
        };
        fontSize: {
            Title1: string;
            Title2: string;
            Title3: string;
            Large: string;
            Regular: string;
            Small: string;
            Micro: string;
        }
    }
}
