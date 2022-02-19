import { Amenity } from "entities/amenity.entity";
import { useEffect, useState } from "react";
import { UseFormRegister, UseFormSetValue, UseFormGetValues } from "react-hook-form";
import client from "services/axios";
import styled from "styled-components";

type Props = {
    register: UseFormRegister<Record<string, any>>
    setValue: UseFormSetValue<Record<string, any>>
    getValues: UseFormGetValues<Record<string, any>>
}

const AmenityForm = ({ register, setValue, getValues }: Props) => {
    const [items, setItems] = useState<Amenity[]>([]);
    const [selectItems, setSelectItems] = useState<string[]>([]);

    useEffect(() => {
        register('amenity');
        client.get<Amenity[]>('amenity').then(res => {
            setItems(res.data);
        });
    }, [register]);

    useEffect(() => {
        setValue('amenity', selectItems)
    }, [setValue, selectItems]);

    const handlerOnClick = (item: Amenity) => {
        const isInCludes = selectItems.includes(item.name);
        if (isInCludes) {
            const deletedItems = selectItems.filter((element) => element !== item.name);
            setSelectItems(deletedItems);
        } else {
            setSelectItems(oldArray => [...oldArray, item.name]);
        }
    }

    return (
        <>
            <Content>
                {
                    items.map((item, k) => (
                        <div key={k}>
                            <Input type="checkbox" id={item.name} />
                            <Item htmlFor={item.name} onClick={() => handlerOnClick(item)}>
                                <img src={item.image} alt={item.name} />
                                <h5>{item.name}</h5>
                            </Item>
                        </div>
                    ))
                }
            </Content>
        </>
    )
}

const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
`

const Item = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    border: 1px solid rgb(221, 221, 221);
    background-color: white;
    border-radius: 20px;
    width: 150px;
    height: 150px;
    font-size: ${(props) => props.theme.fontSize.Small};
    cursor: pointer;
    :hover{
        box-shadow: rgb(0 0 0) 0px 0px 0px 2px;
    }
`

const Input = styled.input`
    display: none;
    :checked+label{
        box-shadow: rgb(0 0 0) 0px 0px 0px 2px;
        background-color: rgb(247, 247, 247);
    }
`;

export default AmenityForm;