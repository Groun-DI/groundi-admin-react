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
import NameForm from "containers/studio-create-form/name";
import client from "services/axios";
import { useParams } from "react-router-dom";

const StudioCreate = () => {
    let params = useParams();
    const OnSubmit = async (data: any) => {
        console.log(data);
        const res = await client.post('studio/create', {
            centerId: Number(params.centerId),
            name: data.name,
            content: data.content,
            basicOccupancy: Number(data.basicOccupancy),
            maximumOccupancy: Number(data.maximumOccupancy),
            overCharge: Number(data.overCharge),
            lowestPrice: Number(data.lowestPrice),
            highestPrice: Number(data.highestPrice),
            amenities: data.amenities,
            precautions: data.precautions,
            complimentaries: data.complimentaries,
            precaution: data.precaution
        });

        console.log(res.data);
    }
    return (
        <>
            {/* <Header>
                <img src="/logo.svg" alt="logo" width="150px" />
                <h5>저장 및 나가기</h5>
            </Header>
            <Body>
                <form onSubmit={handleSubmit(OnSubmit)}>
                    <Section>
                        <Title>스튜디오를 사용할 인원수을 알려주세요</Title>
                        <Container>
                            <OccupancyForm
                                register={register}
                                setValue={setValue}
                                getValues={getValues}
                            />
                        </Container>
                    </Section>
                    <Section>
                        <Title>스튜디오의 편의시설 정보를 선택해주세요</Title>
                        <Container>
                            <ItemWrap>
                                <AmenityForm
                                    register={register}
                                    setValue={setValue}
                                    getValues={getValues}
                                />
                            </ItemWrap>
                        </Container>
                    </Section>
                    <Section>
                        <Title>스튜디오에 준비된 수련도구들을 검색하여 선택해주세요</Title>
                        <Container>
                            <ComplimentaryForm
                                register={register}
                                setValue={setValue}
                                getValues={getValues}
                            />
                        </Container>
                    </Section>
                    <Section>
                        <Title>이용시 주의사항이 있다면 선택해주세요</Title>
                        <Container>
                            <PrecautionForm
                                register={register}
                                setValue={setValue}
                                getValues={getValues}
                            />
                        </Container>
                    </Section>
                    <Section>
                        <Title>스튜디오의 주차정보를 알려주세요</Title>
                        <Container>
                            <ParkingLotForm
                                register={register}
                                setValue={setValue}
                                getValues={getValues}
                            />
                        </Container>
                    </Section>
                    <Section>
                        <Title>스튜디오 이름을 지어주세요</Title>
                        <Container>
                            <NameForm
                                register={register}
                            />
                        </Container>
                    </Section>
                    <Section>
                        <Title>스튜디오의 장점이 돋보일 수 있도록 설명해주세요!</Title>
                        <Container>
                            <ContentForm register={register} />
                        </Container>
                    </Section>
                    <Section>
                        <Title>스튜디오를 돋보일 수 있는 사진을 올려주세요</Title>
                        <ImageForm />
                    </Section>
                    <Section>
                        <Title>스튜디오의 대여가격을 설정해주세요</Title>
                        <Container>
                            <PriceForm
                                register={register}
                                setValue={setValue}
                                getValues={getValues} />
                        </Container>
                    </Section>
                    <Section>
                        <Title>스튜디오의 환불정보를 설정해주세요</Title>
                        <Container>
                            <RefundForm />
                        </Container>
                        <button type="submit">다음</button>
                    </Section>

                </form>
            </Body>
            <Footer>
                <Button onClick={() => window.scrollTo(0, 800)}>다음 단계(1/10)</Button>
            </Footer> */}
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
    display: block;
    text-align: center;
    margin: 80px 0px 50px 0px;
    font-weight: 700;
    line-height: 1.5;
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
const ItemWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin: 30px;
    img{
        width: 60px;
        height: 60px;
    }
`
export default StudioCreate;