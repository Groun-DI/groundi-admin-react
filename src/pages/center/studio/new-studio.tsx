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
import { useState } from "react";
import ValidationUtils from "utils/validation.utils";
import InputElementsUtils from "utils/inputs.utils";
import FormValuesUtils from "utils/formValue.utils";
import Typography from "components/style/Typography";
import { theme } from "styles/theme";
import Wrapper from "components/style/Wrapper";

const StudioCreate = () => {
    let params = useParams();
    const [formValues, setFormValues] = useState(FormValuesUtils.studioCreate);
    const inputs = InputElementsUtils.studioCreate;

    const OnSubmit = async (data: any) => {
        console.log(formValues);
        // const res = await client.post('studio/create', formValues);

        // console.log(res.data);
    }


    const handleSetValue = (name: string, value: string | string[]) => {
        setFormValues({ ...formValues, [name]: value });
        // switch (name) {
        //     case 'name':
        //         inputs.studioName = { ...inputs.studioName, ...ValidationUtils.isRequired(value) };
        //         break;
        //     case 'content':
        //         inputs.content = { ...inputs.content, ...ValidationUtils.isRequired(value) };
        //         break;
        //     case 'basicOccupancy':
        //         inputs.basicOccupancy = { ...inputs.basicOccupancy, ...ValidationUtils.isNumberOfDigits(value, 3) };
        //         setFormValues({ ...formValues, [name]: ValidationUtils.isNumberOfDigits(value, 3).value });
        //         break;
        //     case 'maximumOccupancy':
        //         inputs.maximumOccupancy = { ...inputs.maximumOccupancy, ...ValidationUtils.isRequired(value) };
        //         break;
        //     case 'overCharge':
        //         inputs.overCharge = { ...inputs.overCharge, ...ValidationUtils.isRequired(value) };
        //         break;
        //     case 'lowestPrice':
        //         inputs.lowestPrice = { ...inputs.lowestPrice, ...ValidationUtils.isRequired(value) };
        //         break;
        //     case 'highestPrice':
        //         inputs.highestPrice = { ...inputs.highestPrice, ...ValidationUtils.isRequired(value) };
        //         break;
        //     case 'precaution':
        //         inputs.precaution = { ...inputs.precaution, ...ValidationUtils.isRequired(value) };
        //         break;
        //     case 'precautions':
        //         inputs.precautions = { ...inputs.precautions, ...ValidationUtils.isRequired(value) };
        //         break;
        //     case 'complimentaries':
        //         inputs.complimentaries = { ...inputs.complimentaries, ...ValidationUtils.isRequired(value) };
        //         break;
        //     default:
        //         break;
        // }
    }

    const Props = {
        inputs: inputs,
        formValue: formValues,
        setValue: handleSetValue,
    }

    const Display = [
        {
            title: "스튜디오를 사용할 인원수을 알려주세요",
            component: <OccupancyForm {...Props} />
        },
        {
            title: "스튜디오의 편의시설 정보를 선택해주세요",
            component: <AmenitiyForm setValue={handleSetValue} />
        },
        // {
        //     title: "스튜디오에 준비된 수련도구들을 검색하여 선택해주세요",
        //     component: <ComplimentaryForm getValue={handleComplimentariesChange} />
        // },
        // {
        //     title: "이용시 주의사항이 있다면 선택해주세요",
        //     component: <PrecautionForm getValue={handlePrecautionChange} />
        // },
        // {
        //     title: "스튜디오의 주차정보를 알려주세요",
        //     component: <ParkingLotForm {...Props} />
        // },
        // {
        //     title: "스튜디오 이름을 지어주세요",
        //     component: <NameForm {...Props} />
        // },
        // {
        //     title: "스튜디오의 장점이 돋보일 수 있도록 설명해주세요!",
        //     component: <ContentForm {...Props} />
        // },
        // {
        //     title: "스튜디오를 돋보일 수 있는 사진을 올려주세요",
        //     component: <ImageForm />
        // },
        // {
        //     title: "스튜디오의 대여가격을 설정해주세요",
        //     component: <PriceForm {...Props} />
        // },
        // {
        //     title: "스튜디오의 환불정보를 설정해주세요",
        //     component: <RefundForm />
        // }
    ]

    return (
        <>
            <Header>
                <img src="/logo.svg" alt="logo" width="130px" />
                <h5>저장 및 나가기</h5>
            </Header>
            <Body>
                <form onSubmit={OnSubmit}>
                    {
                        Display.map((item, key) => (
                            <Section key={key}>
                                <Typography.Title2 weight={theme.fontWeight.SemiBold}>{item.title}</Typography.Title2>
                                <Container>
                                    {item.component}
                                </Container>
                            </Section>
                        ))
                    }
                    <Button>제출하기</Button>
                </form>
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
    h2{
        margin-top: 15vh;
    }
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
`
export default StudioCreate;