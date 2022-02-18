import { Complimentary } from "entities/complimentary.entity";
import { useEffect, useRef, useState } from "react";
import client from "services/axios";
import styled from "styled-components";

const ComplimentaryForm = () => {
    const [items, setItems] = useState<Complimentary[]>([]);
    const [inputValue, setInputValue] = useState<string>('');
    const [selectItem, setSelectItem] = useState<any[]>([]);
    const [isOutSideClick, setIsOutSideClick] = useState<boolean>(true);
    const outSideClickRef = useRef<any>();

    useEffect(() => {
        client.get<Complimentary[]>('complimentary').then(res => {
            setItems(res.data);
        });

        window.addEventListener('mousedown', handleOurSideClickEvent);
        return () => {
            window.removeEventListener('mousedown', handleOurSideClickEvent);
        }
    }, []);

    const handleOurSideClickEvent = (e: MouseEvent) => {
        if (!outSideClickRef.current.contains(e.target)) {
            setIsOutSideClick(true);
        }
    }

    const handleAddItem = (item: Complimentary) => {
        setSelectItem(oldArray => [...oldArray, item.name]);
    }

    return (
        <>
            <ContentHeader show={isOutSideClick} ref={outSideClickRef} onClick={() => setIsOutSideClick(!isOutSideClick)}>
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <img src="/input-search.svg" alt="input-search" width={30} />
                <DownDrop show={isOutSideClick}>
                    {
                        items.filter((val) => {
                            if (val.name.toLowerCase().includes(inputValue.toLowerCase())) return val;
                        }).map((item, k) => (
                            <DownDropItem key={k} onClick={() => handleAddItem(item)}>{item.name}</DownDropItem>
                        ))
                    }
                </DownDrop>
            </ContentHeader>
            <ContentMain>
                <ItemList>
                    {
                        selectItem.map((item, k) => (
                            <Item key={k}>{item}</Item>
                        ))
                    }
                </ItemList>
            </ContentMain>
        </>
    )
}

const ContentMain = styled.div`
    margin-top: 40px;
`
const ItemList = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
`

const Item = styled.div`
    background-color: black;
    border-radius: 20px;
    padding: 20px 30px;
    color: white;
    margin: 10px;
    font-size: ${(props) => props.theme.fontSize.Regular};
    text-align: center;
`

const ContentHeader = styled.div<{ show: boolean }>`
    position: relative;
    box-shadow:${(props) => props.show ? '0 1px 6px 0 rgb(32 33 36 / 28%)' : 'none'};
    border-radius: 20px;
    width: 600px;
    input{
        background-color: white;
        width: 100%;
        padding: 20px 70px;
        font-size: ${(props) => props.theme.fontSize.Large};
        border:0px;
        border-radius: 20px;
    }

    img{
        position: absolute;
        transform: translate(-50%, -50%);
        left: 40px;
        top: 50%;
    }
`

const DownDrop = styled.ul<{ show: boolean }>`
    display: ${(props) => props.show ? 'none' : 'block'};
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    border-radius: 20px;
    padding-top: 70px;
    padding-bottom: 10px;
    max-height: 290px;
    overflow: hidden;
    box-shadow : 0 1px 6px 0 rgb(32 33 36 / 28%);
`

const DownDropItem = styled.li`
    display: flex;
    align-items: center;
    padding: 25px 70px;
    height: 20px;
    font-size: ${(props) => props.theme.fontSize.Regular};
    background-color: white;
    cursor: pointer;
    :hover{
        background-color: #c4c4c4;
    }
    :nth-child(4){
        margin-bottom: 20px;
    }
`

export default ComplimentaryForm;