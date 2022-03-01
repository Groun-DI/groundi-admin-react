import client from "services/axios";
import styled from "styled-components";
import Button from 'components/style/Button';
import Typography from 'components/style/Typography';
import BoxInput from 'components/input/BoxInput';
import { useState } from "react";
import Wrapper from "components/style/Wrapper";
import { theme } from "styles/theme";
import Flex from "components/style/Flex";

type Values = {
    name: string,
    address: string,
    phoneNumber: string,
    latitude: string,
    longitude: string
}

const CenterNew = () => {
    const initialValues: Values = { name: "", address: "", phoneNumber: "", latitude: "", longitude: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState(initialValues);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        // try {
        //     const res = await client.post(process.env.REACT_APP_API_URL + 'auth/signup', formValues);
        //     console.log(res.data);
        // } catch (err: unknown) {
        //     if (err instanceof Error) {
        //         return {
        //             error: err.message,
        //         }
        //     } else {
        //         return {
        //             error: "error"
        //         }
        //     }
        // }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const validate = (values: Values) => {
        const error = initialValues;
        if (!values.name) {
            error.name = '필수 항목입니다';
        } else if (!values.address.includes('@')) {
            error.address = '이메일 형식이 잘못되었습니다.';
        }
        if (!values.phoneNumber) {
            error.phoneNumber = '필수 항목입니다';
        }
        return error;
    }
    return (
        <Wrapper>
            <Container>
                <ContentHeader>
                    <Typography.Title3 weight={theme.fontWeight.ExtraBold}>개설할 센터의 정보를 입력해주세요</Typography.Title3>
                </ContentHeader>
                <ContentMain>
                    <form onSubmit={onSubmit}>
                        <Flex layout="column">
                        <BoxInput
                            type="text"
                            placeholder="센터이름"
                            label="센터이름"
                            name="name"
                            value={formValues.name}
                            onChange={handleChange}
                        />
                        <p>{formErrors.name}</p>
                        <BoxInput
                            type="text"
                            placeholder="전화번호"
                            label="전화번호"
                            name="phoneNumber"
                            value={formValues.phoneNumber}
                            onChange={handleChange}
                        />
                        <p>{formErrors.phoneNumber}</p>
                        <BoxInput
                            type="text"
                            placeholder="주소"
                            label="주소"
                            name="address"
                            value={formValues.address}
                            onChange={handleChange}
                        />
                        <p>{formErrors.address}</p>
                        <StyleButton>개설하기</StyleButton>
                        </Flex>
                    </form >
                </ContentMain>
            </Container>
        </Wrapper>
    )
}

const Container = styled.div`
    max-width: 550px;
    width: 100%;
    margin: 0 auto;
`

const ContentMain = styled.div`
    margin-top: 30px;
`

const ContentHeader = styled.div`
    margin-top: 30px;
`

const StyleButton = styled(Button)`
    margin-top: 45px;
`

export default CenterNew;