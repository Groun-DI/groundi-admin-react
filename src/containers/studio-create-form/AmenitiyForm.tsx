import Typography from "components/style/Typography";
import { Amenity } from "dto/amenity.entity";
import { useEffect, useState } from "react";
import client from "services/axios";
import styled from "styled-components";
import { theme } from "styles/theme";
import { useStudioContext } from "hooks/useStudioCreateContext";

const AmenitiyForm: React.FC = () => {
    const { SetFormValue } = useStudioContext();
    const [items, setItems] = useState<Amenity[]>([]);
    const [selectItems, setSelectItems] = useState<string[]>([]);

    useEffect(() => {
        client.get<Amenity[]>('amenity').then(res => {
            setItems(res.data);
        });
    }, []);

    useEffect(() => {
        SetFormValue('amenities', selectItems);
    }, [selectItems, SetFormValue]);

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
            <Conatiner>
                <Typography.Large>(중복선택 가능)</Typography.Large>
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
            </Conatiner>
        </>
    )
}

const Conatiner = styled.div`
    text-align: center;
    margin-top: 3vh;
`

const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    margin-top:3vh;

    @media ${({ theme }) => theme.device.tablet} {
        grid-template-columns: repeat(3, 1fr);
    }

    @media ${({ theme }) => theme.device.mobile} {
        grid-template-columns: repeat(2, 1fr);
    }
`

const Item = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding:40px;
    border: 1px solid ${({ theme }) => theme.color.border};
    background-color: white;
    border-radius: 20px;
    width: 175px;
    height: 150px;
    cursor: pointer;
    h6{
        margin-top: 10px;
        color: ${({ theme }) => theme.color.TitleActive};
    }
    :hover{
        border: 1px solid ${({ theme }) => theme.color.main_light};
        h6{
            color: ${({ theme }) => theme.color.main};
        }
    }
    svg{
        width: 40px;
    }

    @media ${({ theme }) => theme.device.tablet} {
        width: 155px;
        height: 130px;
        padding:30px;
        svg{
            width: 35px;
        }
    }

    @media ${({ theme }) => theme.device.mobile} {
        width: 125px;
        height: 100px;
        padding: 20px;
        svg{
            width: 28px;
        }
    }
`

const Input = styled.input`
    visibility: hidden;
    position: absolute;
    left: -333px;
    :checked+label{
        border: 1px solid ${({ theme }) => theme.color.main_light};
        background-color: ${({ theme }) => theme.color.hover};
        h6{
            color: ${({ theme }) => theme.color.main};
        }
    }
`;

export default AmenitiyForm;