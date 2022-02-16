import SearchInput from "components/input/search";
import EmojiInput from "components/input/emoij";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const StudioNew = () => {
    const { register, handleSubmit } = useForm();
    const OnSubmit = (data: any) => {
    }

    return (
        <>
            <Header>
                <img src="/logo.svg" alt="logo" width="150px" />
                <h5>저장 및 나가기</h5>
            </Header>
            <Body>
                <form onSubmit={handleSubmit(OnSubmit)}>
                    <Section>
                        <Title>스튜디오에 들어갈 인원수를 알려주세요</Title>
                        <Content>
                            <InputWrap>
                                <label>기본</label>
                                <input type="number" defaultValue={0} />
                                <label>명</label>
                            </InputWrap>
                            <InputWrap>
                                <label>최대</label>
                                <input type="number" defaultValue={0} />
                                <label>명</label>
                            </InputWrap>
                        </Content>
                    </Section>
                    <Section>
                        <Title>수련자들에게 제공되는 물품이 있다면 선택해주세요</Title>
                        <Content>
                            <SearchInput />
                            <ItemWrap>
                                <Item>볼스터</Item>
                                <Item>블럭</Item>
                            </ItemWrap>
                        </Content>
                    </Section>
                    <Section>
                        <Title>스튜디오 편의시설 정보를 추가해 주세요.</Title>
                        <Content>
                            <ItemWrap>
                                <ItemBox>
                                    <img src="/showerBooth.svg" alt="showerBooth" width="70px" />
                                    <h5>샤워부스</h5>
                                </ItemBox>
                                <ItemBox>
                                    <img src="/wifi.svg" alt="wifi" width="70px" />
                                    <h5>WIFI/인터넷</h5>
                                </ItemBox>
                                <ItemBox>
                                    <img src="/washRoom.svg" alt="washRoom" width="70px" />
                                    <h5>실내 화장실</h5>
                                </ItemBox>
                                <ItemBox>
                                    <img src="/airConditioner.svg" alt="airConditioner" width="70px" />
                                    <h5>에어컨</h5>
                                </ItemBox>
                            </ItemWrap>
                        </Content>
                    </Section>
                    <Section>
                        <Title>스튜디오의 주의사항 정보를 추가해 주세요.</Title>
                        <Content>
                            <List>
                                <li>
                                    <p>애완동물이 있어요</p>
                                    <CheckBox>
                                        <input type="checkbox" name="drone" />
                                    </CheckBox>
                                </li>
                                <li><p>출입이 제한되지 않는 수영장/온수 욕조</p>
                                    <CheckBox>
                                        <input type="checkbox" name="drone" />
                                    </CheckBox>
                                </li>
                                <li><p>근처의 호수, 강, 바다 등</p>
                                    <CheckBox>
                                        <input type="checkbox" name="drone" />
                                    </CheckBox>
                                </li>
                                <li><p>등반 또는 놀이용 구조물</p>
                                    <CheckBox>
                                        <input type="checkbox" name="drone" />
                                    </CheckBox>
                                </li>
                                <li><p>난간이나 보호 장치가 없는 높은 곳</p>
                                    <CheckBox>
                                        <input type="checkbox" name="drone" />
                                    </CheckBox>
                                </li>
                                <li><p>위험 소지가 있는 동물</p>
                                    <CheckBox>
                                        <input type="checkbox" name="drone" />
                                    </CheckBox>
                                </li>
                            </List>
                        </Content>
                    </Section>
                    <Section>
                        <Title>스튜디오의 주차정보를 추가해 주세요.</Title>
                        <Content>
                        <List>
                                <li>
                                    <p>주차가 가능한가요?</p>
                                    <CheckBox>
                                        <input type="checkbox" name="drone" />
                                    </CheckBox>
                                </li>
                                <li><p>주차비는 무료인가요?</p>
                                    <CheckBox>
                                        <input type="checkbox" name="drone" />
                                    </CheckBox>
                                </li>
                            </List>
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
                            <TextArea />
                        </Content>
                    </Section>
                    <Section>
                        <Title>스튜디오를 사진을 넣어주세요.</Title>
                        <Content>다음 단계(1/10)</Content>
                    </Section>
                    <Section>
                        <Title>스튜디오를 가격을 입력해주세요.</Title>
                        <Content>다음 단계(1/10)</Content>
                    </Section>
                    <Section>
                        <Title>스튜디오의 환불정보를 입력해주세요.</Title>
                        <Content>다음 단계(1/10)</Content>
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
    height: 40%;
    font-size: ${(props) => props.theme.fontSize.Title1};
`
const Section = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100%;
    padding: 100px 20px;
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
    justify-content: center;
    align-items: center;
    height: 60%;
`

const InputWrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: ${(props) => props.theme.fontSize.Title3};
    margin: 30px 0px;
    input{
        width: 130px;
        text-align: center;
        font-size: ${(props) => props.theme.fontSize.Title2};
        border: 0px;
        border-bottom: 1px solid #c4c4c4;
        margin: 0px 30px;
    }
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
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 30px;
`
const Item = styled.p`
    background-color: black;
    border-radius: 50px;
    padding: 15px 30px;
    color: white;
    margin: 10px;
    font-size: ${(props) => props.theme.fontSize.Regular};
`

const ItemBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    justify-items: center;
    align-self: center;
    align-content: center;
    padding: 20px;
    border: 1px solid black;
    border-radius: 20px;
    width: 150px;
    height: 150px;
    margin: 10px;
    font-size: ${(props) => props.theme.fontSize.Small};
    :hover{
        border: 1px solid #c4c4c4;
    }
`

const TextArea = styled.textarea`
    width: 700px;
    height: 800px;
    border: 2px solid black;
    border-radius: 30px;
    padding: 20px 20px;
    font-size: ${(props) => props.theme.fontSize.Large};
    :hover{
        border: 2px solid #c4c4c4c4;
    }
`

const List = styled.ul`
    width: 700px;
    li{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 40px 0px;
        font-size: ${(props) => props.theme.fontSize.Large};
    }
`

const CheckBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  input[type="checkbox"] {
    margin-right: 8px !important;
    border: 2px solid black;
    border-radius: 100%;
    background-color: white;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 30px;
    height: 30px;
    margin: 0px;
    padding: 10px;
  }
  input[type="checkbox"]:checked {
    appearance: none;
    background-size: contain;
    background-image: url("/check.svg");
  }
`;
export default StudioNew;