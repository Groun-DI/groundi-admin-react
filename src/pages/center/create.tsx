import { useForm } from "react-hook-form";
import client from "services/axios";
import styled from "styled-components";


const CenterNew = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data: any) => {
        const res = await client.post(process.env.REACT_APP_API_URL + 'center/create', data);
        console.log(res);
    }

    return (
        <>
            <div>
                <h1>또 만나게 되어 반가워요. 오늘 멋지네요!</h1>
                <h5>아래에서 워크스페이스를 선택하여 팀과 계속 협업하세요.</h5>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Wrap>
                    <label>센터이름을 입력해주세요</label>
                    <input {...register('name')} />
                    <label>전화번호를 입력해주세요</label>
                    <input {...register('phoneNumber')} />
                    <label>주소를 입력해주세요</label>
                    <input {...register('address')} />
                    <button type="submit">제출</button>
                </Wrap>
            </form >

        </>
    )
}

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
`
export default CenterNew;