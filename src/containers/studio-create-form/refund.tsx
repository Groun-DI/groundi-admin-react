import Typography from "components/style/Typography";
import { RefundCode } from "dto/returnCode.entity";
import { useStudioCreateContext } from "hooks/useStudioCreateContext";
import { useEffect, useState } from "react";
import client from "services/axios";
import styled from "styled-components";
import { theme } from "styles/theme";
import ValidationUtils from "utils/validation.utils";

type Props = {
    stateValid: (state: boolean) => void;
}

const RefundForm: React.FC<Props> = ({ stateValid }) => {
    const { SetFormValue, inputElements, Submit } = useStudioCreateContext();
    const [items, setItems] = useState<RefundCode[]>([]);

    useEffect(() => {
        client.get<RefundCode[]>('refundCode').then(res => {
            setItems(res.data);
        });
    }, []);

    const handlerOnClick = (value: string) => {
        SetFormValue(inputElements.refundCode.name, value);
        inputElements.refundCode = { ...inputElements.refundCode, ...ValidationUtils.isRequired(value) }
    }

    useEffect(() => {
        stateValid(!inputElements.refundCode.invalid);
    }, [stateValid, inputElements.refundCode]);


    return (
        <>
            <Wrapper>
                {
                    items.map((item, key) => (
                        <BoxWrap key={key}>
                            <Input id={item.id} {...inputElements.refundCode} />
                            <label htmlFor={item.id} onClick={() => handlerOnClick(item.id)}>
                                <ItemWrap>
                                    <StyledTypographyLarge weight={theme.fontWeight.SemiBold}>{item.name}</StyledTypographyLarge>
                                    <StyledTypographyMicro color={theme.color.placeholder}>{item.content}</StyledTypographyMicro>
                                </ItemWrap>
                            </label>
                        </BoxWrap>
                    ))
                }
                <Button onClick={Submit}>
                    <Typography.Large color="#fff" weight={theme.fontWeight.SemiBold}>제출완료</Typography.Large>
                </Button>
            </Wrapper>
        </>

    )
}
const Button = styled.button`
    margin-top: 5.6vh;
    background-color: ${theme.color.main};
    padding: 23px 165px;
    color: white;
    border: 0px;
    border-radius: 4px;
    cursor: pointer;
`
const Wrapper = styled.div`
    padding: 10px;
    max-width: 600px;
    width: 100%;
    margin-top: 1vh;
    text-align: center;
`
const BoxWrap = styled.div`
    margin-top: 2vh;
`
const StyledTypographyMicro = styled(Typography.Micro)`
    margin-top: 1.5vh;
`

const StyledTypographyLarge = styled(Typography.Large)`

`

const Input = styled.input`
    visibility: hidden;
    position: absolute;
    left: -333px;
    :checked+label{
        div{
            border: 1px solid ${({ theme }) => theme.color.main_light};
            background-color: ${({ theme }) => theme.color.hover};
            color: ${({ theme }) => theme.color.main};
            ${StyledTypographyLarge}{
                color:  ${({ theme }) => theme.color.main} !important;
            }
            ${StyledTypographyMicro}{
            color:  ${({ theme }) => theme.color.main_light} !important;
        }
        }
    }
`;

const ItemWrap = styled.div`
    text-align: left;
    padding: 25px;
    border: 1px solid ${({ theme }) => theme.color.border};
    background-color: white;
    border-radius: 8px;
    cursor: pointer;
    :hover{
        border: 1px solid ${({ theme }) => theme.color.main_light};
        color: ${({ theme }) => theme.color.main};
        ${StyledTypographyMicro}{
            color:  ${({ theme }) => theme.color.main_light} !important;
        }
        ${StyledTypographyLarge}{
                color:  ${({ theme }) => theme.color.main} !important;
            }
    }
`

export default RefundForm;