/* eslint-disable no-label-var */
import { Form, Input, Button, Col, Row, Divider, Modal, Space } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import { startLogin } from '../../controllers/auth';
import { useDispatch } from 'react-redux';

import { changePassword, login } from '../../controllers/miApp.controller';
import { useLocation } from 'react-router';
import { useParams } from 'react-router';
// eslint-disable-line no-use-before-define
export const ChangePassword = ({ history }) => {   // eslint-disable-line no-use-before-define

    const dispatch = useDispatch();
    const { handle } = useParams();
    const location = useLocation();

    const onFinish = async (fieldsValues) => {

        console.log(fieldsValues, "valores")

        const values = {
            ...fieldsValues,
            email: location.email,

        }
        const create = await changePassword(values);

        if (create.ok) {

            Modal.success({
                title: 'Exito',
                content: create.msg,
            });

            let path = `/login`;

            history.push(path);
        }

        if (!create.ok) {

            Modal.success({
                title: 'no se pudo actualizar',
                content: create.msg,
            });

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
                            Ingresa tu nueva contraseña!
                        </Divider>
                        <Form name="registro" labelCol={{ span: 4, }} wrapperCol={{ span: 18, }}
                            onFinish={onFinish}
                            autoComplete="off" >

                            <Form.Item
                                name="password"
                                label="Contraseña"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Porfavor ingresa tu contraseña',
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input.Password minLength={10} />
                            </Form.Item>

                            <Form.Item
                                name="confirm"
                                label="Reingresa tu contraseña"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'Porfavor confirma tu contraseña!',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('Las contraseñas no coinciden'));
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password minLength={10} />
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
                                    Cambiar contraseña
                                </Button>
                            </Form.Item>

                        </Form>
                    </Col>
                </Row>
            </div>
        </   >
    );
};