import { Amenity } from "entities/amenity.entity";
import { useEffect, useState } from "react";
import client from "services/axios";
import styled from "styled-components";

const AmenityForm = () => {
    const [items, setItems] = useState<Amenity[]>([]);

    useEffect(() => {
        client.get<Amenity[]>('amenity').then(res => {
            setItems(res.data);
        });
    }, []);


    return (
        <>
            {
                items.map((item, k) => (
                    <ItemBox key={k}>
                        <img src={item.image} alt="showerBooth" />
                        <h5>{item.name}</h5>
                    </ItemBox>
                ))
            }
        </>
    )
}

const ItemBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    border: 2px solid black;
    border-radius: 20px;
    width: 150px;
    height: 150px;
    margin-bottom: 20px;
    margin-right: 20px;
    font-size: ${(props) => props.theme.fontSize.Small};
    :hover{
        border: 1px solid #c4c4c4;
    }
`

export default AmenityForm;