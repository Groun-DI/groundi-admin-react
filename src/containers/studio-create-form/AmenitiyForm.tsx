import Typography from "components/style/Typography";
import { Amenity } from "dto/amenity.entity";
import { useEffect, useState } from "react";
import client from "services/axios";
import styled from "styled-components";
import { theme } from "styles/theme";

type Props = {
    setValue: (name: string, values: string[]) => void;
}

const AmenitiyForm: React.FC<Props> = ({ setValue }) => {
    const [items, setItems] = useState<Amenity[]>([]);
    const [selectItems, setSelectItems] = useState<string[]>([]);

    useEffect(() => {
        client.get<Amenity[]>('amenity').then(res => {
            setItems(res.data);
        });
    }, []);

    useEffect(()=>{
        setValue('amenities', selectItems);
    },[selectItems, setValue]);

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
                                <Typography.Small weight={theme.fontWeight.Medium}>{item.id}</Typography.Small>
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
    margin-top:7vh;
`

const Item = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding:20px;
    border: 1px solid rgb(221, 221, 221);
    background-color: white;
    border-radius: 20px;
    width: 130px;
    height: 130px;
    cursor: pointer;
    h6{
        color: ${({ theme }) => theme.color.placeholder};
    }
    :hover{
        box-shadow: rgb(0 0 0) 0px 0px 0px 2px;
        h6{
            color: ${({ theme }) => theme.color.TitleActive};
        }
    }
    img{
        width: 40px;
    }
`

const Input = styled.input`
    visibility: hidden;
    :checked+label{
        box-shadow: rgb(0 0 0) 0px 0px 0px 2px;
        background-color: rgb(247, 247, 247);
        h6{
            color: ${({ theme }) => theme.color.TitleActive};
        }
    }
`;

export default AmenitiyForm;