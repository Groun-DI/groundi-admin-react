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
import Typography from "components/style/Typography";
import { theme } from "styles/theme";
import { CreateStduioProvider, useStudioCreateContext } from "hooks/useStudioCreateContext";
import { useState } from "react";

const StudioCreate = () => {
    const [step, setStep] = useState<number>(0);
    const UseStudioCreateContext = useStudioCreateContext();
    const nextStep = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setStep(step + 1);
    }

    const goPrevios = () => {
        setStep(step - 1);
    }

    const Display = [
        {
            title: <>스튜디오를 사용할 수 있는<br /><span>인원 수를</span> 알려주세요.</>,
            component: <OccupancyForm />
        },
        {
            title: <>스튜디오 <span>편의시설</span><br />정보를 추가해 주세요.</>,
            component: <AmenitiyForm />
        },
        {
            title: <>스튜디오에 준비된 <span>수련물품</span>을<br />검색하여 추가해주세요.</>,
            component: <ComplimentaryForm />
        },
        {
            title: <>스튜디오에 이용시 관련<br /><span>주의사항</span>이 있다면 추가해주세요.</>,
            component: <PrecautionForm />
        },
        {
            title: <>스튜디오의 <span>주차정보</span>를<br />추가해주세요.</>,
            component: <ParkingLotForm />
        },
        {
            title: <>스튜디오의 <span>이름</span>을<br />만들어주세요</>,
            component: <NameForm />
        },
        {
            title: <>스튜디오를 <br /><span>설명</span>해주세요</>,
            component: <ContentForm />
        },
        {
            title: <>스튜디오를 돋보여줄<br /><span>사진</span>을 올려주세요.</>,
            component: <ImageForm />
        },
        {
            title: <>스튜디오의 <span>대여가격</span>을<br />설정해주세요</>,
            component: <PriceForm />
        },
        {
            title: "스튜디오의 환불정보를 설정해주세요",
            component: <RefundForm />
        }
    ]

    return (
        <CreateStduioProvider>
            <Wrapper>
                <Header>
                    <img src="/logo.svg" alt="logo" width="130px" />
                    <h5>저장 및 나가기</h5>
                </Header>
                <Body>
                    <Section>
                        <StyledTypographyTitle2 weight={theme.fontWeight.SemiBold}>{Display[step].title}</StyledTypographyTitle2>
                        <Line />
                        <Container>
                            {Display[step].component}
                        </Container>
                    </Section>
                </Body>
                <Footer>
                    <button onClick={goPrevios}>이전</button>
                    <button onClick={nextStep}>다음</button>
                </Footer>
            </Wrapper>
        </CreateStduioProvider>
    )
}

const Wrapper = styled.div`
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; 
    ::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
    overflow-y: none;
`
const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding: 10px 30px;
    top: 0px;
    position: fixed;
    background-color: white;
    width: 100%;
    border-bottom: 1px solid #c4c4c4;
    box-shadow: white;
`;

const Section = styled(Wrapper)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100%;
    padding-top: 80px;
    padding-bottom: 130px;
`
const StyledTypographyTitle2 = styled(Typography.Title2)`
    margin-top: 7vh;
    text-align: center;
    span{
        color: ${({ theme }) => theme.color.main};
    }
`
const Line = styled.hr`
    width: 50px;
    height: 1px;
    margin-top: 3vh;
    border: 0px;
    border-radius: 3px;
    border-top: 1px solid ${({ theme }) => theme.color.TitleActive}; 
`
const Body = styled.div`
    margin: 0 auto;
    max-width: 600px;
    width: 100%;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
`


const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding: 10px 30px;
    position: fixed;
    bottom: 0;
    background-color: white;
    width: 100%;
    border-top: 1px solid #c4c4c4;
    box-shadow: white;
`;

export default StudioCreate;