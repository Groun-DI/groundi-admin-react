import Typography from "components/style/Typography";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

type Props = {
    onChange: (value: number) => void,
}

const IncrementStepper: React.FC<Props> = ({ onChange }) => {
    const [countNumber, setCountNumber] = useState<number>(1);
    const [incrementValid, setIncrementValid] = useState<boolean>(false);
    const [decrementValid, setDecrementValid] = useState<boolean>(true);

    const OnValid = useCallback(() =>{
        if (countNumber <= 1) {
            setDecrementValid(true);
            setIncrementValid(false);
        } else if (100 >= countNumber) {
            setDecrementValid(false);
            setIncrementValid(false);
        } else if (100 < countNumber) {
            setDecrementValid(false);
            setIncrementValid(true);
        }
    },[countNumber]);

    const handlerPlus = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setCountNumber(countNumber + 1);
    };

    const handlerMius = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setCountNumber(countNumber - 1);
    };

    useEffect(() => {
        OnValid();
        onChange(countNumber);
    }, [OnValid, onChange, countNumber]);

    return (
        <>
            <MinusButton name="increment" value={countNumber} onClick={handlerMius} disabled={decrementValid} />
            <TypographyWrap>
                <Typography.Large>{countNumber}</Typography.Large>
            </TypographyWrap>
            <PlusButton name="decrement" value={countNumber} onClick={handlerPlus} disabled={incrementValid} />
        </>
    )
}

const PlusButton = styled.button`
    width: 32px;
    height: 32px;
    border: 2px solid ${({ theme }) => theme.color.main_light};
    box-sizing: border-box;
    border-radius: 32px;
    background: url('/icon/plus-initial.svg') no-repeat center;
    svg{
        fill: ${({ theme }) => theme.color.main};
    }
    cursor: pointer;
    button{
        visibility: hidden;
    }
    :hover{
        border: 2px solid ${({ theme }) => theme.color.main};
        background: url('/icon/plus-active.svg') no-repeat center;
    }
    :disabled{
        border: 2px solid ${({ theme }) => theme.color.border};
        background: url('/icon/plus-disabled.svg') no-repeat center;
        cursor: no-drop;
    }
`

const MinusButton = styled.button`
    width: 32px;
    height: 32px;
    border: 2px solid ${({ theme }) => theme.color.main_light};
    box-sizing: border-box;
    border-radius: 32px;
    background: url('/icon/minus-initial.svg') no-repeat center;
    
    cursor: pointer;
    :hover{
        border: 2px solid ${({ theme }) => theme.color.main};
        background: url('/icon/minus-active.svg') no-repeat center;
    }
    :disabled{
        border: 2px solid ${({ theme }) => theme.color.border};
        background: url('/icon/minus-disabled.svg') no-repeat center;
        cursor: no-drop;
    }
`

const TypographyWrap = styled.div`
    padding: 0 20px;
`

export default IncrementStepper;