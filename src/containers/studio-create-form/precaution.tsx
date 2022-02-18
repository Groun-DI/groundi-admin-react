import { Precaution } from "entities/precaution.entity";
import { useEffect, useState } from "react";
import client from "services/axios";
import styled from "styled-components";

const PrecautionForm = () => {
    const [items, setItems] = useState<Precaution[]>([]);

    useEffect(() => {
        client.get<Precaution[]>('precaution').then(res => {
            console.log(res.data);
            setItems(res.data);
        });
    }, []);

    return (
        <List>
            {
                items.map((item, k) => (
                    <li key={k}>
                        <p>{item.name}</p>
                        <CheckBox>
                            <input type="checkbox" name="drone" />
                        </CheckBox>
                    </li>
                ))
            }
        </List>
    )
}

const List = styled.ul`
    width: 700px;
    li{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 30px 0px;
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

export default PrecautionForm;