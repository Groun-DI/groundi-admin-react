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
                        <h1>스튜디오에 들어갈 인원수를 알려주세요</h1>
                        <InputWrap>
                            <label>기본 수용 인원</label>
                            <Input type="number" defaultValue={0} {...register("basicOccupancy")} />
                        </InputWrap>
                        <InputWrap>
                            <label>기본 수용 인원</label>
                            <Input type="number" defaultValue={0} {...register("maximumOccupancy")} />
                        </InputWrap>
                    </Section>
                    <Section>
                        <h1>수련자들에게 제공되는 물품이 있다면 선택해주세요</h1>
                        <InputWrap>
                            <label>볼스터</label>
                            <input type="checkbox" />
                        </InputWrap>
                        <InputWrap>
                            <label>담요</label>
                            <input type="checkbox" />
                        </InputWrap>
                        <InputWrap>
                            <label>블럭</label>
                            <input type="checkbox" />
                        </InputWrap>
                        <InputWrap>
                            <label>의자</label>
                            <input type="checkbox" />
                        </InputWrap>
                    </Section>
                    <Section>
                        <h1>스튜디오 편의시설 정보를 추가해 주세요.</h1>
                        <button>다음 단계(1/10)</button>
                    </Section>
                    <Section>
                        <h1>스튜디오의 주의사항 정보를 추가해 주세요.</h1>
                        <button>다음 단계(1/10)</button>
                    </Section>
                    <Section>
                        <h1>스튜디오의 주차정보를 추가해 주세요.</h1>
                        <button>다음 단계(1/10)</button>
                    </Section>
                    <Section>
                        <h1>스튜디오의 이름을 적어주세요.</h1>
                        <button>다음 단계(1/10)</button>
                    </Section>
                    <Section>
                        <h1>스튜디오를 설명해주세요.</h1>
                        <button>다음 단계(1/10)</button>
                    </Section>
                    <Section>
                        <h1>스튜디오를 사진을 넣어주세요.</h1>
                        <button>다음 단계(1/10)</button>
                    </Section>
                    <Section>
                        <h1>스튜디오를 가격을 입력해주세요.</h1>
                        <button>다음 단계(1/10)</button>
                    </Section>
                    <Section>
                        <h1>스튜디오의 환불정보를 입력해주세요.</h1>
                        <button>다음 단계(1/10)</button>
                    </Section>
                </form>
            </Body >
            <Footer>
                <Button>다음 단계(1/10)</Button>
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

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100%;
    height: 100vh;
    h1{
        margin: 150px 0px 100px 0px;
        font-size: 50px
    }
`

const Body = styled.div`
    padding-top: 75px;
`

const Input = styled.input`
    border: 0px;
    border-bottom: 1px solid #c4c4c4;
`
const InputWrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    font-size: 30px;
    width:30%;
    margin: 20px 0px;
    input{
        width: 80px;
        text-align: center;
        font-size: 40px;
        font-weight: 600;
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
export default StudioNew;