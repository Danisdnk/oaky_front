import { useState } from 'react';
import {
    Form,
    Input,
    Select,
    Row,
    Col,
    Button,
    Divider,
    DatePicker,
    Modal,
    InputNumber,
} from 'antd';

import { createChildren } from '../../controllers/miApp.controller';
import { createControl } from './../../controllers/miApp.controller';

export const RegisterControlModal = ({ visible, child }) => {
    const { Option } = Select;
    const [modal2Visible, setModal2Visible] = useState(visible)
    const [children, setChildren] = useState()
    const initialForm = {
        date: '',
        name: '',
        controlType: '',
        diameterHead: '',
        height: '',
        weight: '',
        result: '',
        medicine: '',
        medicalStudy: '',
        medicineComment: '',
        child_id: 'children._id'
    };


    
    console.log(child, "logear")
    //* calcula cantidad meses vividos para mostrar las vacunas aplicables 

    const [state, setState] = useState(false)

    
    const onFinish = async (fieldsValues) => {

        const values = {
            ...fieldsValues,
            'date': fieldsValues['date'].format('DD-MM-YYYY'),
            'cId': child._id,
        }

        const create = await createControl(values);

        if (create.ok) {
            Modal.info({ title: 'control creado correctamente', content: create.msg, footer: null });
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
            title="Nuevo control Medico"
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
                        <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 16 }} xl={{ span: 24 }} xxl={{ span: 24 }}>

                            <Form.Item
                                name="date" label="Dia del control"
                                rules={[{ type: 'object', required: true, message: 'Ingresa dia del control!' }]}  >
                                <DatePicker />
                            </Form.Item>
                            <Form.Item
                                name="name" label="Nombre Profesional"
                                rules={[{ required: true, message: 'Porfavor ingresa tu nombre!', whitespace: true }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>

                        <Form.Item
                            name="controlType" label="tipo de control :"
                            rules={[{ required: true, message: 'Seleccion el tipo!' }]}
                        >
                            <Select placeholder="Elegir el tipo de control">
                                <Option value="Control periodico">Control periodico</Option>
                                <Option value="Consulta">Consulta</Option>
                                <Option value="Urgencia">Urgencia</Option>
                                <Option value="Otro">Otro</Option>
                            </Select>
                        </Form.Item>


                        <Form.Item
                            name="result" label="Observaciones"
                            rules={[{ message: 'observaciones del control !', whitespace: true }]}
                        >
                            <Input />

                        </Form.Item>


                        <Col style={{ textAlign: 'right' }}>
                            <Divider orientation='left' >
                                Metricas
                            </Divider>
                        </Col>
                        <Row gutter={[0, 12]}>

                            <Col xs={{ span: 24 }} md={{ span: 8 }} xl={{ span: 8 }} xxl={{ span: 8 }}>

                                <Form.Item
                                    label="Diametro cabeza"
                                    rules={[{ required: true,message: 'ingresa el valor en cm !'}]}
                                    name="diameterHead"
                                >
                                    <InputNumber min={3} defaultValue={3} step="0.25" />

                                </Form.Item>
                            </Col>

                            <Col xs={{ span: 24 }} md={{ span: 8 }} xl={{ span: 8 }} xxl={{ span: 8 }}>

                                <Form.Item
                                    label="Altura [CM]"
                                    rules={[{required: true,message: 'ingresala en centimetros !' }]}
                                    name="height"
                                >
                                    <InputNumber min={3} defaultValue={3} step="1" />

                                </Form.Item>
                            </Col >
                            <Col xs={{ span: 24 }} md={{ span: 8 }} xl={{ span: 8 }} xxl={{ span: 8 }}>

                                <Form.Item
                                    label="Peso [KG]"
                                    rules={[{required: true, message: 'ingresa el peso en kg !' }]}
                                    name="weight"
                                >
                                    <InputNumber min={3} max={250} defaultValue={3} step="0.25" />

                                </Form.Item>
                            </Col>
                        </Row>

                        <Col style={{ textAlign: 'right' }}>
                            <Divider orientation='left' >
                                Medicamentos
                            </Divider>
                        </Col>
                        <Row gutter={[0, 12]}>

                            <Col span={24} >
                                <Form.Item
                                    name="medicine" label="medicamento"
                                >
                                    <Input />
                                </Form.Item>
                            </Col>


                            <Col span={24} >
                                <Form.Item
                                    name="medicineComment" label="Observaciones Medicaciones"
                                >
                                    <Input />
                                </Form.Item>
                            </Col >

                            <Col span={24} >

                                <Form.Item
                                    name="medicalStudy" label="Estudios a realizar"
                                >
                                    <Input />
                                </Form.Item>
                            </Col >
                        </Row>

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

            </Row >
        </Modal >
    );
};