import styled from "styled-components";
import ComplimentaryForm from "containers/studio-create-form/complimentary";
import OccupancyForm from "containers/studio-create-form/occupancy";
import AmenitiyForm from "containers/studio-create-form/AmenitiyForm";
import PrecautionForm from "containers/studio-create-form/precaution";
import ParkingLotForm from "containers/studio-create-form/parkingLot";
import ContentForm from "containers/studio-create-form/content";
import ImageForm from "containers/studio-create-form/image";
import PriceForm from "containers/studio-create-form/price";
import RefundForm from "containers/studio-create-form/refund";
import NameForm from "containers/studio-create-form/name";
import client from "services/axios";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import InputElementsUtils from "utils/inputs.utils";
import FormValuesUtils from "utils/formValue.utils";
import Typography from "components/style/Typography";
import { theme } from "styles/theme";
import Wrapper from "components/style/Wrapper";

const StudioCreate = () => {
    let params = useParams();
    const inputs = InputElementsUtils.studioCreate;
    const [formValues, setFormValues] = useState(FormValuesUtils.studioCreate);
    const [parkingFormValues, setparkingFormValues] = useState(FormValuesUtils.centerParkingLotCreate);
    const [nowStep, setNowStep] = useState<number>(1);


    const OnSubmit = async (data: any) => {
        console.log(formValues);
        console.log(parkingFormValues);
        const studioRes = await client.post('studio/create', {
            ...formValues,
            centerId: Number(params),
            basicOccupancy: Number(formValues.basicOccupancy),
            maximumOccupancy: Number(formValues.maximumOccupancy),
            overCharge: Number(formValues.overCharge),
            lowestPrice: Number(formValues.lowestPrice),
            highestPrice: Number(formValues.highestPrice)
        });

        console.log(studioRes);

        const parkingLotRes = await client.post('parkingLot/create', {
            isAvailable: parkingFormValues.isAvailable,
            paymentType: parkingFormValues.paymentType,
            firstTime: parkingFormValues.firstHour + ':' + parkingFormValues.firstMinute,
            firstPayment: Number(parkingFormValues.firstPayment),
            additionTime: parkingFormValues.additionHour + ':' + parkingFormValues.additionMinute,
            additionPayment: Number(parkingFormValues.additionPayment),
            allDayPayment: Number(parkingFormValues.allDayPayment),
            oneTimePayment: Number(parkingFormValues.oneTimePayment),
            content: Number(formValues.highestPrice)
        });

        console.log(parkingLotRes);
    }


    const handleOnInputParkingFormChange = (e: React.MouseEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target as HTMLInputElement;
        setparkingFormValues({ ...parkingFormValues, [name]: value });
    };

    const handleOnInputFormChange = (e: React.MouseEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target as HTMLInputElement;
        setFormValues(oldValues => ({ ...oldValues, [name]: value }));
    };

    const handleOnArrayInputChange = useCallback((name: string, values: string[]) => {
        setFormValues(oldValues => ({ ...oldValues, [name]: values }));
    }, []);

    const Props = {
        inputs: inputs,
        formValue: formValues,
        onChange: handleOnInputFormChange,
    }

    const parkingProps = {
        formValue: parkingFormValues,
        onChange: handleOnInputParkingFormChange,
    }

    useEffect(() => {
        if (formValues.basicOccupancy.length > 0 && formValues.maximumOccupancy.length > 0) setNowStep(1);
        if (formValues.amenities.length > 0) setNowStep(2);
        if (formValues.complimentaries.length > 0) setNowStep(3);
        if (formValues.precautions.length > 0) setNowStep(6);
        if (parkingFormValues.isAvailable.length > 0) setNowStep(5);
        if (formValues.name.length > 0) setNowStep(6);
        if (formValues.content.length > 0) setNowStep(9);
    }, [formValues, parkingFormValues]);

    const Display = [
        {
            title: "스튜디오를 사용할 인원수을 알려주세요",
            component: <OccupancyForm {...Props} />
        },
        {
            title: "스튜디오의 편의시설 정보를 선택해주세요",
            component: <AmenitiyForm setValue={handleOnArrayInputChange} />
        },
        {
            title: "스튜디오에 준비된 수련도구들을 검색하여 선택해주세요",
            component: <ComplimentaryForm setValue={handleOnArrayInputChange} />
        },
        {
            title: "이용시 주의사항이 있다면 선택해주세요",
            component: <PrecautionForm setValue={handleOnArrayInputChange} />
        },
        {
            title: "스튜디오의 주차정보를 알려주세요",
            component: <ParkingLotForm {...parkingProps} />
        },
        {
            title: "스튜디오 이름을 지어주세요",
            component: <NameForm {...Props} />
        },
        {
            title: "스튜디오의 장점이 돋보일 수 있도록 설명해주세요!",
            component: <ContentForm {...Props} />
        },
        {
            title: "스튜디오를 돋보일 수 있는 사진을 올려주세요",
            component: <ImageForm />
        },
        {
            title: "스튜디오의 대여가격을 설정해주세요",
            component: <PriceForm {...Props} />
        },
        {
            title: "스튜디오의 환불정보를 설정해주세요",
            component: <RefundForm />
        }
    ]

    return (
        <>
            <Header>
                <img src="/logo.svg" alt="logo" width="130px" />
                <h5>저장 및 나가기</h5>
            </Header>
            <Body>
                {
                    Display.filter((v, k) => {
                        if (k <= nowStep) return v;
                    }).map((item, key) => (
                        <Section key={key}>
                            <StyledTypographyTitle2 weight={theme.fontWeight.SemiBold}>{item.title}</StyledTypographyTitle2>
                            <Container>
                                {item.component}
                            </Container>
                        </Section>
                    ))
                }
                <Section>
                    <Button onClick={OnSubmit}>제출하기</Button>
                </Section>
            </Body>
        </>
    )
}


const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding: 10px 30px;
    position: fixed;
    background-color: white;
    width: 100%;
    border-bottom: 1px solid #c4c4c4;
    box-shadow: white;
`;

const Section = styled(Wrapper)`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100%;
    scroll-snap-align: start;
`
const StyledTypographyTitle2 = styled(Typography.Title2)`
    margin-top: 15vh;
`
const Body = styled.div`
    margin: 0 auto;
    max-width: 1000px;
    height: 100vh;
    padding-top: 75px;
    padding-bottom: 75px;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }

`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
`

const Button = styled.button`
    color:white;
    width: 150px;
    height: 50px;
    background: #F84F39;
    border-radius: 100px;
    border: 0px;
    cursor: pointer;
    margin-top: 30vh;
`
export default StudioCreate;