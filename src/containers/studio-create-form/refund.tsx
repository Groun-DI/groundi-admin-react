import Typography from "components/style/Typography";
import { RefundCode } from "dto/returnCode.entity";
import { useStudioCreateContext } from "hooks/useStudioCreateContext";
import { StudioCreate } from "../../utils/formValue.utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client from "services/axios";
import styled from "styled-components";
import { theme } from "styles/theme";
import ValidationUtils from "utils/validation.utils";

type Props = {
    stateValid: (state: boolean) => void;
}

const RefundForm: React.FC<Props> = ({ stateValid }) => {
    const { centerId } = useParams();
    const { SetFormValue, inputElements, Submit, formValues } = useStudioCreateContext(Number(centerId));
    const [items, setItems] = useState<RefundCode[]>([]);
    const studioData = new StudioCreate();

    // useEffect(() => {
    //     client.get<RefundCode[]>('refundCode').then(res => {
    //         setItems(res.data);
    //     });
    // }, []);

    const handlerOnClick = async () => {
        let formData = new FormData();

        studioData.name = '스튜디오'
        studioData.basicOccupancy = 0;
        studioData.maximumOccupancy = 0;
        studioData.extraPrice = 0;
        studioData.description = '공기가 좋아요';
        studioData.checkInNotice = '출입제한 없어요';
        studioData.rentalTimeUnitCode = '002';
        studioData.refundCode = '001';
        studioData.amenities = ['출입제한 없어요'];
        studioData.precautions = ['출입제한 없어요'];
        studioData.complimentaries = ['출입제한 없어요'];

        formData.append("data", JSON.stringify({
            name: studioData.name,
            basicOccupancy: studioData.basicOccupancy,
            maximumOccupancy: studioData.maximumOccupancy
        }));

        const res = await client.post(process.env.REACT_APP_API_URL + `centers/${centerId}/studios`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data;',
                'Accept': '*/*'
            }
        });
        console.log(res);
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
                            <label htmlFor={item.id}>
                                dfdf
                            </label>
                        </BoxWrap>
                    ))
                }
                <label onClick={() => handlerOnClick()}>
                    dfdf
             </label>
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