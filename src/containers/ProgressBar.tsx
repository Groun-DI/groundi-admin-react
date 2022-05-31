import styled from "styled-components"
import { theme } from "styles/theme"

type Props = {
    shape: "circle" | "bar",
    endStep: number,
    nowStep: number
}

const ProgressBar: React.FC<Props> = ({ shape, endStep, nowStep }) => {
    return (
        <>
            <Ul>
                {
                    Array(endStep).fill(1).map((item, key) => {
                        if (key - 1 < nowStep) {
                            return (
                                <li>
                                    <Circle select={true} />
                                </li>)
                        } else {
                            return (
                                <li>
                                    <Circle select={false} />
                                </li>)
                        }
                    })
                }
            </Ul>
        </>
    )
}

const Circle = styled.div<{ select: boolean }>`
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: ${({ select }) => select? theme.color.light_green : theme.color.light_gray};
    margin-right: 5px;
`
const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`
export default ProgressBar