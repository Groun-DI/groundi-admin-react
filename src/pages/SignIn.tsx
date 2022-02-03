import { Form, Input, Button } from 'antd';
import axios from 'axios';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';

const SignIn = () => {

    const onFinish = async (values: any) => {
        try {
            const res = await axios.post(process.env.REACT_APP_API_URL + 'auth/signin', values);
            console.log(res);
        } catch {

        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <h1><strong>GrounDI</strong></h1>
            <h1>내 소중한 공간을, 공유하다</h1>
            <h3>웰니스 공간대여 그라운디</h3>
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
                    name="email"
                    rules={[{ required: true, message: '이메일을 입력해 주세요' }]}
                >
                    <Input size="large" placeholder="이메일" prefix={<UserOutlined />} />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: '비밀번호' }]}
                >
                    <Input.Password size="large" placeholder="비밀번호" prefix={<UnlockOutlined />} />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        로그인
          </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default SignIn;