import { Form, Input, Button } from 'antd';
import axios from 'axios';
const SignIn = () => {

    const onFinish = async (values: any) => {
        try {
            const res = await axios.post(process.env.REACT_APP_API_URL+'auth/signin',values);
            console.log(res);
        } catch {

        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="ID/EMAIL"
                name="email"
                rules={[{ required: true, message: '이메일을 입력해 주세요' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="비밀번호"
                name="password"
                rules={[{ required: true, message: '비밀번호를 입력해 주세요' }]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    로그인
          </Button>
            </Form.Item>
        </Form>
    )
}

export default SignIn;