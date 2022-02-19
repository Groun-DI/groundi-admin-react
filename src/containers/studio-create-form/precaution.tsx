import { Precaution } from "entities/precaution.entity";
import { useEffect, useState } from "react";
import { UseFormRegister, UseFormSetValue, UseFormGetValues } from "react-hook-form";
import client from "services/axios";
import styled from "styled-components";

type Props = {
    register: UseFormRegister<Record<string, any>>
    setValue: UseFormSetValue<Record<string, any>>
    getValues: UseFormGetValues<Record<string, any>>
}

const PrecautionForm = ({ register, setValue, getValues }: Props) => {
    const [items, setItems] = useState<Precaution[]>([]);
    const [selectItems, setSelectItems] = useState<string[]>([]);

    useEffect(() => {
        register('precautionList');
        register('precaution');
        client.get<Precaution[]>('precaution').then(res => {
            setItems(res.data);
        });
    }, [register]);

    useEffect(() => {
        setValue('precautionList', selectItems);
    }, [setValue, selectItems]);

    const handlerOnClick = (item: Precaution) => {
        const isInCludes = selectItems.includes(item.name);
        if (isInCludes) {
            const deletedItems = selectItems.filter((element) => element !== item.name);
            setSelectItems(deletedItems);
        } else {
            setSelectItems(oldArray => [...oldArray, item.name]);
        }
    }

    const handlerOnChange = (value: string) => {
        if (value.length < 500) {
            setValue('precaution', value);
        }
    }

    return (
        <Wrapper>
            <ContentHeader>
                <ul>
                    {
                        items.map((item, k) => (
                            <li key={k}>
                                <p>{k + 1}. {item.content}</p>
                                <CheckBox onClick={() => handlerOnClick(item)}>
                                    <input type="checkbox" name="drone" />
                                </CheckBox>
                            </li>
                        ))
                    }
                </ul>
            </ContentHeader>
            <ContentMain>
                <p>상세설명이 필요하다면 아래 적어주세요.</p>
                <TextArea onChange={(e) => handlerOnChange(e.target.value)} />
            </ContentMain>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
`
const ContentHeader = styled.div`
    width: 100%;
    li{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin: 20px 0px;
        font-size: ${(props) => props.theme.fontSize.Large};
        line-height: 1.5;
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

const ContentMain = styled.div`
    font-weight: 700;
    font-size: ${(props) => props.theme.fontSize.Large};
    line-height: 1.5;
    margin-top: 40px;

`

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