/* eslint-disable no-label-var */
import { Form, Input, Button, Col, Row, Divider, Modal, Space } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useForm } from './../../hooks/useForm';
import { login } from './../../controllers/miApp.controller';
// eslint-disable-line no-use-before-define
export const LoginScreen = ({ history = {} }) => {   // eslint-disable-line no-use-before-define

 
    localStorage.clear();

    const initialForm = {
        email: '',
        password: '',
    };

    const [formLoginValues, handleLoginInputChange] = useForm(initialForm);

    const { email, password } = formLoginValues;


    function error(arr) {

        Modal.error({
            title: 'Ups!',
            content: arr,
        });
    }
  
    const onFinish = async (fieldsValues) => {

        const values = {
            ...fieldsValues
        }
        const resetEmail = await login(values);

        if (resetEmail.ok) {
            history.push({ pathname: '/home' });
        } else {

            if (Object.keys(resetEmail.msg).length > 0) {

                const { email, password } = resetEmail.msg;
                let errores = [];

                if (email && email.msg != null) {
                    errores += email.msg;
                }
                if (password && password.msg != null) {
                    errores += password.msg;
                }
                if (!email && !password) {
                    errores += resetEmail.msg;
                }
                <Space wrap>
                    <Button onClick={error(errores)}>Error</Button>
                </Space>

            }

        }

    };

    return (
        <>
            <div style={{ maxHeight: '100%' }} >

                <Row align="middle" wrap={true} style={{ alignItems: 'center' }}  >

                    <Col xs={4} sm={4} md={10} lg={12} xl={13}>
                        <div style={{ height: "100vh", overflow: "hidden" }} >

                            <svg viewBox="0 0 300 150" preserveAspectRatio="none" style={{ height: "100%", width: "100%" }}>
                                <path d="M208.08,0.00 C211.34,80.42 262.02,75.98 193.85,262.98 L0.00,150.00 L0.00,0.00 Z" style={{ stroke: "none", fill: "#ff4029" }}>
                                </path>

                            </svg>
                        </div>
                    </Col>

                    <Col xs={20} sm={20} md={14} lg={12} xl={8} style={{ textAlign: 'center' }}>
                        <Divider>
                            <Avatar size={128} icon={<UserOutlined />} />
                        </Divider>
                        <Divider>
                            Bienvenido!
                        </Divider>
                        <Form

                            name="registro"

                            labelCol={{
                                span: 4,
                            }}
                            wrapperCol={{
                                span: 18,
                            }}


                            onFinish={onFinish}
                            autoComplete="off"

                        >
                            <Form.Item
                                name="email"
                                label="Email"
                                rules={[{ required: true, message: 'Porfavor ingresa tu Email!', },]}
                            >
                                <Input
                                    value={email}
                                    onChange={handleLoginInputChange} />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Porfavor ingresa tu contraseña!',
                                    },
                                ]}
                            >
                                <Input.Password
                                    name="password"
                                    value={password}
                                    onChange={handleLoginInputChange} />
                            </Form.Item>

                            <Form.Item
                                wrapperCol={{

                                    xs: 20,
                                    sm: 24,
                                    md: 24,
                                    lg: 24,
                                    xl: 24,
                                    xxl: 24,
                                }}
                            >
                                <Button type="primary" htmlType="submit" >
                                    Iniciar sesion
                                </Button>
                            </Form.Item>

                            <Divider>
                                <Link to="/register">¿No tenes usuario? Registrate acá</Link>
                            </Divider>


                            <Divider>
                                <Link to="/password-reset">¿Olvidaste tu contraseña? Recuperala acá</Link>
                            </Divider>


                        </Form>
                    </Col>
                </Row>
            </div>
        </   >
    );
};