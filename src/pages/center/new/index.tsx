import { useForm } from "react-hook-form";


const CenterNew = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    }

    return (
        <>
            <div>
                <h1>또 만나게 되어 반가워요. 오늘 멋지네요!</h1>
                <h5>아래에서 워크스페이스를 선택하여 팀과 계속 협업하세요.</h5>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register('owner')} />
                    <input {...register('name')} />
                    <input {...register('type')} />
                    <input {...register('type')} />
                    <input type="file" {...register('file')} />

                    <label>전화번호를 입력해주세요</label>
                    <input {...register('phoneNumber')} />
                    <label>주소를 입력해주세요</label>
                    <input {...register('location')} />
                    <label>우리 업체 위치를 확인해주세요</label>
                    <input {...register('lat, long')} />
                    <label>찾아오는 길을 설명해주세요</label>
                    <input {...register('description')} />
                    <label>관리자 전화번호</label>
                    <input {...register('adminnumber')} />
                    <label>관리자 이메일</label>
                    <input {...register('email')} />

                    <button type="submit">제출</button>
                </form >
            </div>
        </>
    )
}

export default CenterNew;