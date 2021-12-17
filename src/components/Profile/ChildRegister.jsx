import { useState } from 'react';
import {
    Form,
    Input,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    Divider,
    Avatar,
    DatePicker,
    Modal
} from 'antd';

import { createChildren } from '../../controllers/miApp.controller';


export const ChildRegister = ({ visible }) => {
    const { Option } = Select;
    const [modal2Visible, setModal2Visible] = useState(visible)

    const initialForm = {
        name: '',
        sex: '',
        bornDate: '',
        bloodType: '',
        allergies: 'al',
        diseases: '',
        pediatricControl: [],
        parent_id: localStorage.getItem('pId')
    };

    const [children, setchildren] = useState([])
    const [fetch, setFetch] = useState(false)

    // if (!fetch) {
    //     crearHijo()
    //     setFetch(true)
    // }

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };

    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 24,
                offset: 0,
            },
            md: {
                span: 24,
                offset: 0,
            },
            lg: {
                span: 24,
                offset: 0,
            },
            xl: {
                span: 24,
                offset: 0,
            },
            xxl: {
                span: 24,
                offset: 0,
            },
        },
    };
    const [state, setState] = useState(false)


    const onFinish = async (fieldsValues) => {

        const values = {
            ...fieldsValues,
            'bornDate': fieldsValues['bornDate'].format('DD-MM-YYYY'),
            'pId': localStorage.getItem('pId')
        }

        const create = await createChildren(values);

        if (create) {
            Modal.info({ title: 'Niño creado correctamente', content: create.msg, footer: null });
            setTimeout(() => { window.location.reload(); }, 1000);
        }

    };


    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    let handleOk = () => {
        setState(true);
        setModal2Visible(false)
        setTimeout(() => { setState(false); }, 3000);
    };

    let handleCancel = () => {
        setState(false);
        setModal2Visible(false);
    };


    return (

        <Modal
            title="Incorpora un nuevo infante a tus controles"
            centered
            visible={modal2Visible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
        >
            <Row align="middle" wrap={true} style={{ alignItems: 'left' }}  >
                <Col style={{ textAlign: 'left' }}>
                    <Form
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >

                        <Form.Item
                            name="name" label="Nombre"
                            rules={[{ required: true, message: 'Porfavor ingresa tu nombre!', whitespace: true }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name="bornDate" label="Fecha nacimiento"
                            rules={[{ type: 'object', required: true, message: 'selecciona una fecha!' }]}  >
                            <DatePicker />
                        </Form.Item>


                        <Form.Item
                            name="sex" label="sexo"
                            rules={[{ required: true, message: 'selecciona sexo biologico!' }]}  >
                            <Select placeholder="Elegir sexo biologico">
                                <Option value="Femenino">Femenino</Option>
                                <Option value="Masculino">Masculino</Option>

                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="bloodType"
                            label="Grupo sanguineo"
                            hasFeedback
                            rules={[{ required: true, message: 'Porfavor ingresa grupo sanguineo!' }]}
                        >
                            <Select placeholder="Elegi un grupo sanguineo">
                                <Option value="A+">A+</Option>
                                <Option value="A-">A-</Option>
                                <Option value="B+">B+</Option>
                                <Option value="B-">B-</Option>
                                <Option value="AB+">AB+</Option>
                                <Option value="AB-">AB-</Option>
                                <Option value="O+">O+</Option>
                                <Option value="O-">O-</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item name="diseases" label="Enfermedades Cronicas"
                            rules={[{ required: true, message: 'Porfavor ingresa enfermedades' }]}
                        >
                            <Checkbox.Group >
                                <Row>
                                    <Col span={8}>
                                        <Checkbox value="Asma" style={{ lineHeight: '32px' }}>
                                            Asma
                                        </Checkbox>
                                    </Col>
                                    <Col span={8}>
                                        <Checkbox value="TDAH" style={{ lineHeight: '32px' }}>
                                            TDAH
                                        </Checkbox>
                                    </Col>
                                    <Col span={8}>
                                        <Checkbox value="Obesidad" style={{ lineHeight: '32px' }}>
                                            Obesidad
                                        </Checkbox>
                                    </Col>
                                    <Col span={8}>
                                        <Checkbox value="Celiaquia" style={{ lineHeight: '32px' }}>
                                            Celiaquia
                                        </Checkbox>
                                    </Col>
                                    <Col span={16}>
                                        <Checkbox value="Intolerancia lactica" style={{ lineHeight: '32px' }}>
                                            Intoleracia lactica
                                        </Checkbox>
                                    </Col>
                                    <Col span={8}>
                                        <Checkbox value="Ninguna" style={{ lineHeight: '32px' }}>
                                            Ninguna
                                        </Checkbox>
                                    </Col>

                                </Row>
                            </Checkbox.Group>


                        </Form.Item>
                        <Col span={24} style={{ textAlign: 'right' }}>
                            <Button key="back" onClick={handleCancel} size={"large"}>
                                Cancelar
                            </Button>
                            <Button style={{ margin: '0 8px' }} type="primary" htmlType="submit" size={"large"} >
                                Agregar
                            </Button>
                        </Col>
                    </Form>

                </Col>

            </Row>
        </Modal>
    );
};