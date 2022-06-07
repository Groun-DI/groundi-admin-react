import styled from "styled-components";
import { theme } from "styles/theme";
import Typography from "./style/Typography";


const CustomTypography = styled(Typography.Regular)`

`

const Button = styled.button`
    width: 150px;
    height: 48px;
    background-color: ${theme.color.red};
    color: ${({ theme }) => theme.color.white};;
    border: 2px solid ${theme.color.red};
    border-radius: 25px;
    cursor: pointer;
    /* :hover{
        ${CustomTypography}{
            color: ${theme.color.white};;
        }
        background-color: ${theme.color.red};
    } */
`

type Props = {
    value: string,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled: boolean,
    style?: React.CSSProperties
}

const Button2: React.FC<Props> = ({ style, value, onClick, disabled, ...others }) => {
    return (
        <Button {...others} onClick={onClick} disabled={disabled} style={style}>
            <CustomTypography color={theme.color.white} weight={theme.fontWeight.Bold}>{value}</CustomTypography>
        </Button>
    )
}

export default Button2;