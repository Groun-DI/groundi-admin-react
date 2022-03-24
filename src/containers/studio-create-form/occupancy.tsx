import styled from "styled-components";
import Typography from "components/style/Typography";
import { theme } from "styles/theme";
import Flex from "components/style/Flex";
import IncrementStepper from 'components/input/IncrementStepper';
import { useStudioCreateContext } from "hooks/useStudioCreateContext";
import { useCallback } from "react";
import ValidationUtils from "utils/validation.utils";

type Props = {
    stateValid: (state: boolean) => void;
}

const OccupancyForm: React.FC<Props> = ({ stateValid }) => {
    const { inputElements, formValues, SetFormValue } = useStudioCreateContext();

    const basicOccupancyChange = useCallback((value: number) => {
        inputElements.basicOccupancy = { ...inputElements.basicOccupancy, ...ValidationUtils.isNumberOfDigits(value, 1, 100) }
        SetFormValue(inputElements.basicOccupancy.name, value.toString());
        stateValid(!(inputElements.basicOccupancy.invalid === true && inputElements.maximumOccupancy.invalid === true));
    }, [SetFormValue, inputElements, stateValid]);

    const maximumOccupancyChange = useCallback((value: number) => {
        inputElements.maximumOccupancy = { ...inputElements.maximumOccupancy, ...ValidationUtils.isNumberOfDigits(value, 1, 100) }
        SetFormValue(inputElements.maximumOccupancy.name, value.toString());
        stateValid(!(inputElements.basicOccupancy.invalid === true && inputElements.maximumOccupancy.invalid === true));
    }, [SetFormValue, inputElements, stateValid]);

    return (
        <>
            <Wrapper>
                <Content>
                    <Typography.Title3 weight={theme.fontWeight.SemiBold}>{inputElements.basicOccupancy.label}</Typography.Title3>
                    <InputWrap>
                        <IncrementStepper onChange={basicOccupancyChange} value={formValues.basicOccupancy} {...inputElements.basicOccupancy} />
                    </InputWrap>
                </Content>
                <Content>
                    <Typography.Title3 weight={theme.fontWeight.SemiBold}>{inputElements.maximumOccupancy.label}</Typography.Title3>
                    <InputWrap>
                        <IncrementStepper onChange={maximumOccupancyChange} value={formValues.maximumOccupancy} {...inputElements.maximumOccupancy} />
                    </InputWrap>
                </Content>
            </Wrapper>
        </>
    )
}


const Wrapper = styled(Flex)`
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 3vh;
`

const InputWrap = styled(Flex)`
    margin-top: 1.5vh;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    :nth-child(2){
        margin-top: 6.6vh;
    }
`

export default OccupancyForm;