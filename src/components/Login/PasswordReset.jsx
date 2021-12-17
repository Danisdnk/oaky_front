/* eslint-disable no-label-var */
import { Form, Input, Button, Col, Row, Typography, Modal } from 'antd';
import { useHistory } from 'react-router';
import { useState } from 'react';
import { resetPassword } from './../../controllers/miApp.controller';
import { render } from '@testing-library/react';
import { useParams } from 'react-router';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

export const PasswordReset = ({ history }) => {

    const [log, setLog] = useState(false)


    const onFinish = async (fieldsValues) => {

        const values = {
            ...fieldsValues
        }

        const resetEmail = await resetPassword(values);
        if (resetEmail.ok) {
    
            Modal.success({ title: 'Actualizado', content: resetEmail.msg, footer: null });
            // <Link to={{ pathname: '/child-dashboard/:state', state: { id } }} />
            history.push({ pathname: '/reset-code:email', email: fieldsValues['email'] });
        }

    };

    let cambiarPassword = () => {
        if (log === true) {
            let path = `/home`;
            history.push(path);
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

                        <Typography.Title level={3} type="secondary">
                            Parece que olvidaste tu contraseña
                        </Typography.Title>

                        <Typography.Text >
                            Ingresa el email registrado y te enviaremos un codigo para cambiar tu contraseña!
                        </Typography.Text>

                        <Form name="registro" labelCol={{ span: 4 }} wrapperCol={{ span: 18 }}
                            autoComplete="off"
                            onFinish={onFinish}

                        >
                            <Form.Item
                                style={{ marginTop: '9%' }}
                                name="email"
                                label="E-mail"
                                rules={[
                                    {
                                        type: 'email',
                                        message: 'Porfavor ingresa tu E-mail',
                                    },
                                    {
                                        required: true,
                                        message: 'Porfavor ingresa tu E-mail',
                                    },
                                ]}
                            >
                                <Input />
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
                                <Button type="primary" htmlType="submit" style={{ marginTop: '9%' }}    >
                                    Enviar recuperacion !
                                </Button>
                            </Form.Item>


                        </Form>
                    </Col>
                </Row>
            </div>
        </   >
    );
};