import Typography from "components/style/Typography";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import styled from "styled-components";

type Props = {
    onChange: (value: number) => void,
}

type context = {
    countNumber: number,
    setCountNumber: React.Dispatch<React.SetStateAction<number>>,
    onChange: (value: number) => void,
    incrementValid: boolean,
    decrementValid: boolean,
    setIncrementValid: React.Dispatch<React.SetStateAction<boolean>>,
    setDecrementValid: React.Dispatch<React.SetStateAction<boolean>>
}

const useValue = () => {
    const [countNumber, setCountNumber] = useState<number>(1);
    const [incrementValid, setIncrementValid] = useState<boolean>(false);
    const [decrementValid, setDecrementValid] = useState<boolean>(true);
    const onChange = (value: number) => { }
    return {
        countNumber,
        setCountNumber,
        onChange,
        incrementValid,
        decrementValid,
        setIncrementValid,
        setDecrementValid
    }
}

const IncrementStepperContext = createContext<context>({} as ReturnType<typeof useValue>);
const useIncrementStepperContext = () => useContext(IncrementStepperContext);


const IncrementStepper: React.FC<Props> = ({ onChange }) => {
    const value = useValue();

    const OnValid = useCallback(() =>{
        if (value.countNumber <= 1) {
            value.setDecrementValid(true);
            value.setIncrementValid(false);
        } else if (100 >= value.countNumber) {
            value.setDecrementValid(false);
            value.setIncrementValid(false);
        } else if (100 < value.countNumber) {
            value.setDecrementValid(false);
            value.setIncrementValid(true);
        }
    },[value]);

    useEffect(() => {
        OnValid();
        onChange(value.countNumber);
    }, [value.countNumber, onChange, OnValid]);

    return (
        <IncrementStepperContext.Provider value={value}>
            <DecrementStepperButton />
            <StepperText />
            <IncrementStepperButton />
        </IncrementStepperContext.Provider>
    )
}

const IncrementStepperButton = () => {
    const { countNumber, setCountNumber, incrementValid } = useIncrementStepperContext();

    const handlerPlus = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setCountNumber(countNumber + 1);
    }

    return (
        <PlusButton name="decrement" value={countNumber} onClick={handlerPlus} disabled={incrementValid} />
    )
}

const DecrementStepperButton = () => {
    const { countNumber, setCountNumber, decrementValid } = useIncrementStepperContext();

    const handlerMius = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setCountNumber(countNumber - 1);
    }

    return (
        <MinusButton name="increment" value={countNumber} onClick={handlerMius} disabled={decrementValid} />
    )
}

const StepperText = () => {
    const { countNumber } = useIncrementStepperContext();
    return (
        <TypographyWrap>
            <Typography.Large>{countNumber}</Typography.Large>
        </TypographyWrap>
    )
}


const PlusButton = styled.button`
    width: 32px;
    height: 32px;
    border: 2px solid ${({ theme }) => theme.color.sub_light};
    box-sizing: border-box;
    border-radius: 32px;
    background: url('/icon/plus-initial.svg') no-repeat center;
    cursor: pointer;
    button{
        visibility: hidden;
    }
    :hover{
        border: 2px solid ${({ theme }) => theme.color.sub};
        background: url('/icon/plus-active.svg') no-repeat center;
    }
    :focus{
        outline: 2px solid ${({ theme }) => theme.color.sub_light};
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
    border: 2px solid ${({ theme }) => theme.color.sub_light};
    box-sizing: border-box;
    border-radius: 32px;
    background: url('/icon/minus-initial.svg') no-repeat center;
    
    cursor: pointer;
    :hover{
        border: 2px solid ${({ theme }) => theme.color.sub};
        background: url('/icon/minus-active.svg') no-repeat center;
    }
    :focus{
        outline: 2px solid ${({ theme }) => theme.color.sub_light};
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