import EmojiInput from "components/input/emoij";
import styled from "styled-components";
import ComplimentaryForm from "containers/studio-create-form/complimentary";
import OccupancyForm from "containers/studio-create-form/occupancy";
import AmenityForm from "containers/studio-create-form/amenity";
import PrecautionForm from "containers/studio-create-form/precaution";
import ParkingLotForm from "containers/studio-create-form/parkingLot";
import ContentForm from "containers/studio-create-form/content";
import ImageForm from "containers/studio-create-form/image";
import PriceForm from "containers/studio-create-form/price";
import RefundForm from "containers/studio-create-form/refund";

const StudioNew = () => {
    return (
        <>
            <Header>
                <img src="/logo.svg" alt="logo" width="150px" />
                <h5>저장 및 나가기</h5>
            </Header>
            <Body>
                <form>
                    <Section>
                        <Title>스튜디오에 들어갈 인원수를 알려주세요</Title>
                        <Content>
                            <OccupancyForm />
                        </Content>
                    </Section>
                    <Section>
                        <Title>수련자들에게 제공되는 물품이 있다면 선택해주세요</Title>
                        <Content>
                            <ComplimentaryForm />
                        </Content>
                    </Section>
                    <Section>
                        <Title>스튜디오 편의시설 정보를 추가해 주세요.</Title>
                        <Content>
                            <ItemWrap>
                                <AmenityForm />
                            </ItemWrap>
                        </Content>
                    </Section>
                    <Section>
                        <Title>스튜디오의 주의사항 정보를 추가해 주세요.</Title>
                        <Content>
                            <PrecautionForm />
                        </Content>
                    </Section>
                    <Section>
                        <Title>스튜디오의 주차정보를 추가해 주세요.</Title>
                        <Content>
                            <ParkingLotForm />
                        </Content>
                    </Section>
                    <Section>
                        <Title>스튜디오의 이름을 적어주세요.</Title>
                        <Content>
                            <EmojiInput />
                        </Content>
                    </Section>
                    <Section>
                        <Title>스튜디오를 설명해주세요.</Title>
                        <Content>
                            <ContentForm />
                        </Content>
                    </Section>
                    <Section>
                        <Title>스튜디오를 사진을 넣어주세요.</Title>
                        <ImageForm />
                    </Section>
                    <Section>
                        <Title>스튜디오를 가격을 입력해주세요.</Title>
                        <Content>
                            <PriceForm />
                        </Content>
                    </Section>
                    <Section>
                        <Title>스튜디오의 환불정보를 입력해주세요.</Title>
                        <Content>
                            <RefundForm/>
                        </Content>
                    </Section>
                </form>
            </Body>
            <Footer>
                <Button onClick={() => window.scrollTo(0, 800)}>다음 단계(1/10)</Button>
            </Footer>
        </>
    )
}


const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    height: 80px;
    padding: 10px 30px;
    position: fixed;
    background-color: white;
    width: 100%;
    border-top: 1px solid #c4c4c4;
    box-shadow: white;
    background-attachment: scroll;
    background-position: 0% 0%;
    bottom: 0pt;
    left: 0pt;
`
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


const Title = styled.h1`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 150px 0px 50px 0px;
    font-size: ${(props) => props.theme.fontSize.Title1};
`
const Section = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100%;
    padding: 80px 20px;
    scroll-snap-align: start;
`

const Body = styled.div`
    padding-top: 75px;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    height: 100vh;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0px;
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
const ItemWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin: 30px;
    img{
        width: 60px;
        height: 60px;
    }
`
export default StudioNew;