import { Amenity } from "dto/amenity.entity";
import { useEffect, useState } from "react";
import client from "services/axios";
import styled from "styled-components";
import InputElementsUtils from "utils/inputs.utils";

type Values = {
    centerId: string;
    name: string;
    content: string;
    basicOccupancy: string;
    maximumOccupancy: string;
    overCharge: string;
    lowestPrice: string;
    highestPrice: string;
    precaution: string;
    amenities: [];
    precautions: [];
    complimentaries: [];
}

type Props = {
    inputs: typeof InputElementsUtils.studioCreate;
    formValue: Values;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AmenityForm:React.FC<Props> = ({ inputs, formValue, onChange }) => {
    const [items, setItems] = useState<Amenity[]>([]);
    const [selectItems, setSelectItems] = useState<string[]>([]);

    useEffect(() => {
        client.get<Amenity[]>('amenity').then(res => {
            setItems(res.data);
        });
    }, []);

    const handlerOnClick = (item: Amenity) => {
        const isInCludes = selectItems.includes(item.id);
        if (isInCludes) {
            const deletedItems = selectItems.filter((element) => element !== item.id);
            setSelectItems(deletedItems);
        } else {
            setSelectItems(oldArray => [...oldArray, item.id]);
        }
    }

    return (
        <>
            <Content>
                {
                    items.map((item, k) => (
                        <div key={k}>
                            <Input type="checkbox" id={item.id} />
                            <Item htmlFor={item.id} onClick={() => handlerOnClick(item)}>
                                <img src={item.image} alt={item.id} />
                                <h5>{item.id}</h5>
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