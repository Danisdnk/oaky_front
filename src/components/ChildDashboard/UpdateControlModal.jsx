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
import moment from 'moment';
import { updateControl } from '../../controllers/miApp.controller';


export const UpdateControlModal = ({ visible, control }) => {
    
    const { Option } = Select;
    const [modal2Visible, setModal2Visible] = useState(visible)

    const [state, setState] = useState(false)

    const onFinish = async (fieldsValues) => {

        const values = {
            ...fieldsValues,
            'date': fieldsValues['date'].format('DD-MM-YYYY'),
            'cId': control.child_id,
            'id':control.id
        }
        const updated = await updateControl(values);

        if (updated.ok) {
            Modal.success({ title: 'Actualizado', content: updated.msg, footer: null });
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
                                initialValue={moment(control.date, 'DD-MM-YYYY')}
                                rules={[{ type: 'object', required: true, message: 'Ingresa dia del control!' }]}  >
                                <DatePicker />
                            </Form.Item>
                            <Form.Item
                                name="name" label="Nombre Profesional" initialValue={control.name}
                                rules={[{ required: true, message: 'Porfavor ingresa tu nombre!', whitespace: true }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>

                        <Form.Item
                            name="controlType" label="tipo de control :"
                            rules={[{ required: true, message: 'Seleccion el tipo!' }]}
                            initialValue={control.tags}
                        >
                            <Select placeholder="Elegir el tipo de control" >
                                <Option value="Control periodico">Control periodico</Option>
                                <Option value="Consulta">Consulta</Option>
                                <Option value="Urgencia">Urgencia</Option>
                                <Option value="Otro">Otro</Option>
                            </Select>
                        </Form.Item>


                        <Form.Item
                            name="result" label="Observaciones" initialValue={control.result}
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
                                    rules={[{ required: true, message: 'ingresa el valor en cm !' }]}
                                    name="diameterHead"
                                    initialValue={control.headDiameter}
                                >
                                    <InputNumber min={3} step="0.25" />

                                </Form.Item>
                            </Col>

                            <Col xs={{ span: 24 }} md={{ span: 8 }} xl={{ span: 8 }} xxl={{ span: 8 }}>

                                <Form.Item
                                    label="Altura [CM]"
                                    rules={[{ required: true, message: 'ingresala en centimetros !' }]}
                                    name="height"
                                    initialValue={control.height}
                                >
                                    <InputNumber min={3}  step="1" />

                                </Form.Item>
                            </Col >
                            <Col xs={{ span: 24 }} md={{ span: 8 }} xl={{ span: 8 }} xxl={{ span: 8 }}>

                                <Form.Item
                                    label="Peso [KG]"
                                    rules={[{ required: true, message: 'ingresa el peso en kg !' }]}
                                    name="weight"
                                    initialValue={control.weight}
                                >
                                    <InputNumber min={3} max={250} d step="0.25"  />

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
                                    name="medicine" label="medicamento" initialValue={control.medicine}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>


                            <Col span={24} >
                                <Form.Item
                                    name="medicineComment" label="Observaciones Medicaciones"
                                    initialValue={control.medicine_comment}
                                >
                                    <Input />
                                </Form.Item>
                            </Col >

                            <Col span={24} >

                                <Form.Item
                                    name="medicalStudy" label="Estudios a realizar"
                                   initialValue={control.medicalStudy}
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
                                Actualizar
                            </Button>
                        </Col>
                    </Form>

                </Col>

            </Row >
        </Modal >
    );
};