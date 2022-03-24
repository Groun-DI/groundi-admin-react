import { Precaution } from "dto/precaution.entity";
import { useEffect, useState } from "react";
import client from "services/axios";
import styled from "styled-components";
import { useStudioCreateContext } from "hooks/useStudioCreateContext";
import Typography from "components/style/Typography";
import { theme } from "styles/theme";
import ValidationUtils from "utils/validation.utils";

type Props = {
    stateValid: (state: boolean) => void;
}

const PrecautionForm: React.FC<Props> = ({ stateValid }) => {
    const { inputElements, SetFormValue, formValues } = useStudioCreateContext();
    const [items, setItems] = useState<Precaution[]>([]);
    const [selectItems, setSelectItems] = useState<string[]>([]);

    useEffect(() => {
        client.get<Precaution[]>('precaution').then(res => {
            res.data.push({ id: "2", content: "너구리" })
            res.data.push({ id: "3", content: "너구리" })
            res.data.push({ id: "4", content: "너구리" })
            setItems(res.data);
        });
    }, []);

    useEffect(() => {
        SetFormValue(inputElements.precautions.name, selectItems);
        console.log(selectItems);
        inputElements.precautions = { ...inputElements.precautions, ...ValidationUtils.isNumberOfDigits(selectItems.length, 1, 4) }
        console.log(inputElements.precautions);
        stateValid(!(inputElements.precautions.invalid));
    }, [SetFormValue, inputElements, selectItems, stateValid])

    const handlerOnClick = (item: Precaution) => {
        const isInCludes = selectItems.includes(item.id);
        if (isInCludes) {
            const deletedItems = selectItems.filter((element) => element !== item.id);
            setSelectItems(deletedItems);
        } else {
            setSelectItems(oldArray => [...oldArray, item.id]);
        }
    }

    const handelerOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        SetFormValue(name, value);
    }

    return (
        <Wrapper>
            <Typography.Large>(중복선택 가능)</Typography.Large>
            <ContentHeader>
                <Typography.Large weight={theme.fontWeight.SemiBold}>안전 장치</Typography.Large>
                <>
                    {
                        items.map((item, key) => (
                            <div key={key}>
                                <Input type="checkbox" id={"precaution_" + item.id} />
                                <CheckBox htmlFor={"precaution_" + item.id} onClick={() => handlerOnClick(item)}>
                                    <Typography.Regular weight={theme.fontWeight.Bold}>{item.content}</Typography.Regular>
                                </CheckBox>
                            </div>
                        ))
                    }
                </>
            </ContentHeader>
            <ContentMain>
                <Typography.Large weight={theme.fontWeight.SemiBold}>다른 주의사항이 있다면 적어주세요.</Typography.Large>
                <Typography.Small style={{ textAlign: "right" }}>{formValues.precautionContent ? formValues.precautionContent.length : 0}/400</Typography.Small>
                <TextArea onChange={handelerOnChange} {...inputElements.precautionContent} value={formValues.precautionContent}/>
            </ContentMain>
        </Wrapper>
    )
}

const ContentHeader = styled.div`
    margin-top: 3vh;
    text-align: left;
`

const ContentMain = styled.div`
    margin-top: 6vh;
    text-align: left;
`

const Wrapper = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 3vh;
`

const CheckBox = styled.label`
    display: flex;
    position: relative;
    align-items: center;
    width: 100%;
    color: ${(props) => props.theme.color.placeholder};
    border: 1px solid ${(props) => props.theme.color.border};
    padding: 15px 16px;
    border-radius: 8px;
    cursor: pointer;
    h5{
        color: ${(props) => props.theme.color.placeholder};
        line-height: 23px;
    }

    :hover{
        border: 1px solid ${({ theme }) => theme.color.main_light};
        h5{
            color: ${(props) => theme.color.main_light};
            line-height: 23px;
        }
        ::before{
            background: url('/svg/check.svg') no-repeat center;
            background-color:${({ theme }) => theme.color.main};
            border: 1px solid ${({ theme }) => theme.color.main};
        }
    }

    ::before{
        content: '';
        position: inline-block;
        vertical-align:center;
        background: url('/svg/check-placeholder.svg') no-repeat center;
        fill: red;
        margin-right: 10px;
        width: 25px;
        height: 25px;
        border: 1px solid ${({ theme }) => theme.color.placeholder};
        border-radius: 20px;
    }
`;


const Input = styled.input`
    visibility: hidden;
    :checked+label{
        border: 1px solid ${({ theme }) => theme.color.main_light};
        background-color: ${({ theme }) => theme.color.hover};
        h5{
            color: ${({ theme }) => theme.color.main};
        }

        p{
            color: ${({ theme }) => theme.color.main};
        }
        ::before{
            background: url('/svg/check.svg') no-repeat center;
            background-color:${({ theme }) => theme.color.main};
            border: 1px solid ${({ theme }) => theme.color.main};
        }
    }
`;


const TextArea = styled.textarea`
    width: 100%;
    height: 250px;
    border: 1px solid ${(props) => props.theme.color.border};
    margin-top: 10px;
    border-radius: 8px;
    padding: 30px 40px;
    font-size: ${(props) => props.theme.fontSize.Large};
    resize: none;
    -webkit-transition: border 0.5s;
    transition: border 0.5s;
    :focus{
        border: 1px solid ${({ theme }) => theme.color.main};
        -webkit-transition: border 0.5s;
        transition: border 0.5s;
    }
`
export default PrecautionForm;