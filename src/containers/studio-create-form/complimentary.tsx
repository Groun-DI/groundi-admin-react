import { Complimentary } from "dto/complimentary.entity";
import { useEffect, useRef, useState } from "react";
import { UseFormRegister, UseFormSetValue, UseFormGetValues } from "react-hook-form";
import client from "services/axios";
import styled from "styled-components";
import { CreateStudioValue } from "dto/create-studio.dto";
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

const ComplimentaryForm:React.FC<Props> = ({ inputs, formValue, onChange }) => {
    const [items, setItems] = useState<Complimentary[]>([]);
    const [inputValue, setInputValue] = useState<string>('');
    const [selectItems, setSelectItems] = useState<string[]>([]);
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
        const isInCludes = selectItems.includes(item.id);
        if (!isInCludes && selectItems.length < 10) {
            setSelectItems(oldArray => [...oldArray, item.id]);
        }
    }

    const handlerDeleteItem = (item: string) => {
        const deletedItems = selectItems.filter((element) => element !== item);
        setSelectItems(deletedItems);
    }

    return (
        <>
            <ContentHeader show={isOutSideClick} ref={outSideClickRef} onClick={() => setIsOutSideClick(!isOutSideClick)}>
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="사각 볼스터 / 블럭 / 요가매트 등" />
                <img src="/input-search.svg" alt="input-search" width={30} />
                <DownDrop show={isOutSideClick} inputValue={inputValue}>
                    {
                        items.filter((val) => {
                            if (selectItems.includes(val.id)) return null;
                            return val.id.toLowerCase().includes(inputValue.toLowerCase());
                        }).map((item, k) => (
                            <DownDropItem key={k} onClick={() => handleAddItem(item)}>{item.id}</DownDropItem>
                        ))
                    }
                </DownDrop>
            </ContentHeader>
            <ContentMain>
                <ItemList>
                    {
                        selectItems.map((item, k) => (
                            <div key={k} style={{ position: "relative" }}>
                                <Item >{item}</Item>
                                <DeleteButtonIcon onClick={() => handlerDeleteItem(item)} />
                            </div>
                        ))
                    }
                </ItemList>
            </ContentMain>
        </>
    )
}

const DeleteButtonIcon = styled.button`
    position: absolute;
    z-index: 1;
    border-radius: 100%;
    border: 0px;
    width: 20px;
    height: 20px;
    background-color: white;
    background-image: url('/Close.svg');
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    top: 20px;
    right: 20px;
    :hover{
        box-shadow: rgb(0 0 0) 0px 0px 0px 2px;
    }
`


const ContentMain = styled.div`
    margin-top: 40px;
`
const ItemList = styled.div`
    display: grid;
    grid-template-columns: repeat(5, auto);
`

const Item = styled.div`
    background-color: ${(props) => props.theme.color.main};
    border-radius: 20px;
    padding: 20px 40px 20px 30px;
    color: white;
    margin: 10px;
    font-size: ${(props) => props.theme.fontSize.Large};
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

const DownDrop = styled.ul<{ show: boolean, inputValue: string }>`
    display: ${(props) => props.show ? 'none' : 'block'};
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    border-radius: 20px;
    padding-top: 67px;
    padding-bottom: ${(props) => props.inputValue === '' ? '0px' : '10px'};;
    max-height: 290px;
    overflow: hidden;
    box-shadow : 0 1px 6px 0 rgb(32 33 36 / 28%);
    z-index: 20;
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
    z-index: 20;
`

export default ComplimentaryForm;