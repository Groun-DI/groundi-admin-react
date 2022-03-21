import styled from "styled-components";
import Typography from "components/style/Typography";
import { theme } from "styles/theme";
import Flex from "components/style/Flex";
import IncrementStepper from 'components/input/IncrementStepper';
import { useStudioContext } from "hooks/useStudioCreateContext";
import { useCallback } from "react";

const OccupancyForm: React.FC = () => {
    const { inputElements, SetFormValue } = useStudioContext();

    const basicOccupancyChange = useCallback((value: number) => {
        if (value < 1 || 100 < value) {
            inputElements.basicOccupancy.invalid = true;
        }
        inputElements.basicOccupancy.invalid = false;

        SetFormValue(inputElements.basicOccupancy.name, value.toString());
    }, [SetFormValue, inputElements.basicOccupancy]);

    const maximumOccupancyChange = useCallback((value: number) => {
        if (value < 1 || 100 < value) {
            inputElements.maximumOccupancy.invalid = true;
        }
        inputElements.maximumOccupancy.invalid = false;

        SetFormValue(inputElements.maximumOccupancy.name, value.toString());
    }, [SetFormValue, inputElements.maximumOccupancy]);

    return (
        <>
            <Container>
                <ContentWrap>
                    <Typography.Title3 weight={theme.fontWeight.SemiBold}>{inputElements.basicOccupancy.label}</Typography.Title3>
                    <InputWrap>
                        <IncrementStepper onChange={basicOccupancyChange}/>
                    </InputWrap>
                </ContentWrap>
                <ContentWrap>
                    <Typography.Title3 weight={theme.fontWeight.SemiBold}>{inputElements.maximumOccupancy.label}</Typography.Title3>
                    <InputWrap>
                        <IncrementStepper onChange={maximumOccupancyChange}/>
                    </InputWrap>
                </ContentWrap>
            </Container>
        </>
    )
}


const Container = styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 3vh;
`

const InputWrap = styled(Flex)`
    margin-top: 1.5vh;
`

const ContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    :nth-child(2){
        margin-top: 6.6vh;
    }
`
export default OccupancyForm;