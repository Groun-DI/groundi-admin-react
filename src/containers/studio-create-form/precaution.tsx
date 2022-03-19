import { Precaution } from "dto/precaution.entity";
import { useEffect, useState } from "react";
import client from "services/axios";
import styled from "styled-components";
import { useStudioContext } from "hooks/useStudioCreateContext";
import Typography from "components/style/Typography";
import { theme } from "styles/theme";

const PrecautionForm: React.FC = () => {
    const { SetOnChageFormValue } = useStudioContext();
    const [items, setItems] = useState<Precaution[]>([]);
    const [selectItems, setSelectItems] = useState<string[]>([]);

    useEffect(() => {
        client.get<Precaution[]>('precaution').then(res => {
            console.log(res.data);
            setItems(res.data);
        });
    }, []);

    useEffect(() => {
        SetOnChageFormValue('precautions', selectItems);
    }, [SetOnChageFormValue, selectItems])

    const handlerOnClick = (item: Precaution) => {
        const isInCludes = selectItems.includes(item.id);
        if (isInCludes) {
            const deletedItems = selectItems.filter((element) => element !== item.id);
            setSelectItems(deletedItems);
        } else {
            setSelectItems(oldArray => [...oldArray, item.id]);
        }
    }

    return (
        <Wrapper>
            <Typography.Large>(중복선택 가능 최대 20개)</Typography.Large>
            <ContentWrap>
                <Typography.Large weight={theme.fontWeight.SemiBold}>안전 장치</Typography.Large>
                <Content>
                    <ul>
                        {
                            items.map((item, k) => (
                                <li key={k}>
                                    <Input type="checkbox" name="drone" />
                                    <CheckBox onClick={() => handlerOnClick(item)}>
                                        <p>{item.content}</p>
                                    </CheckBox>
                                </li>
                            ))
                        }
                    </ul>
                </Content>
            </ContentWrap>
            <Typography.Large weight={theme.fontWeight.SemiBold}>다른 주의사항이 있다면 적어주세요.</Typography.Large>
            <ContentWrap>
                <TextArea />
            </ContentWrap>
        </Wrapper>
    )
}

const ContentWrap = styled.div`
    margin-top: 3vh;
    text-align: left;
`

const Wrapper = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 3vh;
`
const Content = styled.div`
    width: 100%;
`

const CheckBox = styled.label`
    position: relative;
    width: 100%;
    color: ${(props) => props.theme.color.placeholder};
    border: 1px solid ${(props) => props.theme.color.border};
    padding: 20px 16px;
    border-radius: 8px;

    ::before{
        content: '';
        position: absolute;
        background: url('/check.svg') no-repeat center;
        width: 30px;
        height: 30px;
    }
`;


const Input = styled.input`
    visibility: hidden;
    :checked+label{
        border: 1px solid ${({ theme }) => theme.color.main_light};
        background-color: ${({ theme }) => theme.color.hover};
        h6{
            color: ${({ theme }) => theme.color.main};
        }
    }
`;


const TextArea = styled.textarea`
    width: 100%;
    height: 150px;
    border: 2px solid black;
    margin-top: 10px;
    border-radius: 30px;
    padding: 30px 40px;
    font-size: ${(props) => props.theme.fontSize.Large};
    :hover{
        border: 2px solid #c4c4c4c4;
    }
`
export default PrecautionForm;