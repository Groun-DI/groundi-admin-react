import styled from "styled-components";
import { theme } from "styles/theme";
import Typography from "./style/Typography";


const CustomTypography = styled(Typography.Regular)`

`

const Button = styled.button`
    width: 150px;
    height: 48px;
    background-color: ${theme.color.white};
    color: ${({ theme }) => theme.color.red};;
    border: 2px solid ${theme.color.red};
    border-radius: 25px;
    cursor: pointer;
    :hover{
        ${CustomTypography}{
            color: ${theme.color.white};;
        }
        background-color: ${theme.color.red};
    }
`

type Props = {
    value: string,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled: boolean,
    style?: React.CSSProperties
}

const Button1: React.FC<Props> = ({ style, value, onClick, disabled, ...others }) => {
    return (
        <Button {...others} onClick={onClick} disabled={disabled} style={style}>
            <CustomTypography color={theme.color.red} weight={theme.fontWeight.Bold}>{value}</CustomTypography>
        </Button>
    )
}

export default Button1;