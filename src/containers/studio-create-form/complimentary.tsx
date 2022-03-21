import { Complimentary } from "dto/complimentary.entity";
import { useEffect, useRef, useState } from "react";
import client from "services/axios";
import styled from "styled-components";
import { useStudioContext } from "hooks/useStudioCreateContext";
import Typography from "components/style/Typography";
import { theme } from "styles/theme";


const ComplimentaryForm: React.FC = () => {
    const { SetFormValue } = useStudioContext();
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

    useEffect(() => {
        SetFormValue('complimentaries', selectItems);
    }, [selectItems, SetFormValue]);


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

    const handlerDeleteItem = (e: React.MouseEvent<HTMLButtonElement>, item: string) => {
        e.preventDefault();
        const deletedItems = selectItems.filter((element) => element !== item);
        setSelectItems(deletedItems);
    }

    return (
        <>
            <Conatiner>
                <Typography.Large>(중복선택 가능 최대 20개)</Typography.Large>
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
                    <Typography.Large weight={theme.fontWeight.SemiBold}>선택된 수련물품</Typography.Large>
                    <ItemList>
                        {
                            selectItems.map((item, k) => (
                                <div key={k} style={{ position: "relative" }}>
                                    <Item >{item}
                                        <DeleteButtonIcon onClick={(e) => handlerDeleteItem(e, item)} />
                                    </Item>
                                </div>
                            ))
                        }
                    </ItemList>
                </ContentMain>
            </Conatiner>
        </>
    )
}

const Conatiner = styled.div`
    text-align: center;
    margin-top: 3vh;
`

const DeleteButtonIcon = styled.button`
    position: absolute;
    z-index: 1;
    border-radius: 100%;
    border: 0px;
    width: 20px;
    height: 20px;
    background-image: url('/Close.svg');
    background-repeat: no-repeat;
    background-color: ${(props) => props.theme.color.hover};
    background-position: center;
    cursor: pointer;
    top: 50%;
    right: 20px;
    transform: translate(0 , -50%);
`
const ContentMain = styled.div`
    margin-top: 5vh;
    text-align: left;
`
const ItemList = styled.div`
    display: grid;
    grid-template-columns: repeat(5, auto);
`

const Item = styled.div`
    position: relative;
    border: 1px solid ${(props) => props.theme.color.main};
    background-color: ${(props) => props.theme.color.hover};
    border-radius: 100px;
    padding: 20px 40px 20px 30px;
    color:  ${(props) => props.theme.color.main};
    margin: 10px;
    font-size: ${(props) => props.theme.fontSize.Large};
    text-align: center;
`

const ContentHeader = styled.div<{ show: boolean }>`
    position: relative;
    /* box-shadow:${(props) => props.show ? 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' : 'none'}; */
    border-radius: 8px;
    width: 600px;
    margin-top:3vh;
    border: ${(props) => props.show ? '1px solid #DBDBDB' : 'none'};
    input{
        background-color: white;
        width: 100%;
        padding: 20px 70px;
        font-size: ${(props) => props.theme.fontSize.Large};
        border:0px;
        border-radius: 8px;
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
    border-radius: 8px;
    padding-top: 67px;
    padding-bottom: ${(props) => props.inputValue === '' ? '0px' : '10px'};;
    max-height: 290px;
    overflow: hidden;
    border:  1px solid ${({ theme }) => theme.color.border};
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
        background-color: ${({ theme }) => theme.color.hover};
    }
    :nth-child(4){
        margin-bottom: 20px;
    }
    z-index: 20;
`

export default ComplimentaryForm;