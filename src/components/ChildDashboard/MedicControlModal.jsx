import React, { useState, useEffect } from 'react';
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
import { useHistory } from 'react-router';

export const MedicControlModal = () => {
    const { Option } = Select;

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


    const [log, setLog] = useState(false)


    // const onFinish = async (fieldsValues) => {

    //     const values = {
    //         ...fieldsValues,
    //         'bornDate': fieldsValues['bornDate'].format('DD-MM-YYYY'),
    //         'pId': localStorage.getItem('pId')
    //     }
    //     const create = await createChildren(values);

    //     console.log('Success:', values);

    //     if (create) {

    //         Modal.error({
    //             title: 'Niño creado correctamente',
    //             content: create.msg,
    //         });
    //         console.log('Success:', create);
    //     }

    // };

    // const onFinishFailed = (errorInfo) => {
    //     console.log('Failed:', errorInfo);
    // };


    return (
        <Row align="middle" wrap={true} style={{ alignItems: 'left' }}  >
            <Col style={{ textAlign: 'left' }}>
                <Form
                        // onFinish={onFinish}
                        // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >

                    <Form.Item
                        name="name" label="consulta de :"
                        rules={[{ required: true, message: 'Porfavor ingresa tipo consulta!', whitespace: true }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="date" label="Ingresa el dia del control"
                        rules={[{ type: 'object', required: true, message: 'Ingresa el dia del contro!' }]}  >
                        <DatePicker />
                    </Form.Item>

                    <Form.Item
                        name="descripcion" label="descripcion del control"
                        rules={[{ required: true, message: 'Porfavor ingresa una descripcion !', whitespace: true }]}
                    >
                        <Input />
                    </Form.Item>


                    <Form.Item
                        name="result" label="observaciones"
                        rules={[{ message: 'observaciones del control !', whitespace: true }]}
                    >
                        <Input />
                    </Form.Item>

                    <Button type="primary" htmlType="submit" size={"large"} >
                        Submit
                    </Button>
                </Form>

            </Col>

        </Row>

    );
};