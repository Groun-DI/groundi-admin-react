import Typography from "components/style/Typography"
import styled from "styled-components"
import { theme } from "styles/theme"
import { ReactComponent as Cookie } from 'images/svg/forward.svg';

type Props = {
    label: string;
    value: any;
    onClick: () => void;
}

const Button: React.FC<Props> = ({ label, value, onClick }) => {
    return (
        <Wrapper>
            {/* <Img src={icon} alt="plus-icon" /> */}
            { label && <Typography.Regular align={theme.fontAlign.l} weight={theme.fontWeight.SemiBold}>{label}</Typography.Regular>}
            <StyleButton onClick={onClick}>{
                value ? <Typography.Small>{value}</Typography.Small>
                    : <p>동/리/도로명으로 검색해주세요.</p>}
                <Cookie stroke={theme.color.placeholder} stroke-width="1" />
            </StyleButton>

        </Wrapper>
    )
}
const Wrapper = styled.div`
    width: 100%;
`

const StyleButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 100%;
    padding: 17px;
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: 8px;
    font-size: ${({ theme }) => theme.fontSize.Small};
    margin-top: 10px;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 2%);
    background-color: #fff;
    text-align: left;
    cursor: pointer;
    :hover{
        border: 1px solid ${({ theme }) => theme.color.main};
    }
    p{
        color: ${({ theme }) => theme.color.placeholder};
    }
`

export default Button;