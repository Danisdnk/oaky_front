import { useState } from 'react';
import { Form, Input, Select, Row, Col, Checkbox, Button, DatePicker, Modal } from 'antd';
import { useHistory } from 'react-router';
import { createVaccine } from './../../controllers/miApp.controller';
import { cantDosisPorVacuna, calendarioVacunacion } from '../../types/vaccinesInCalendar';
import { findVaccineByChild } from './../../controllers/miApp.controller';
import { useLocation, useParams } from 'react-router';
const { format } = require("date-fns");

export const ModalVaccine = ({ child }) => {
    const { Option } = Select;
    const [log, setLog] = useState(false)
    const history = useHistory();

    let iniciarSesion = () => {
        if (log === true) {
            let path = `/child-dashboard`;
            history.push(path);
        }
    };
    const [dosis, setDosis] = useState([]);
    const [fetch, setFetch] = useState(false)
    const [vaccineChild, setvaccineChild] = useState([])
    const [listVaccine, setListVaccine] = useState(calendarioVacunacion)
    const { handle } = useParams();
    const location = useLocation();
    const { id } = location.state;

    const obtenerVacunas = async () => {
        const getUser = await findVaccineByChild(id._id)
        setvaccineChild(getUser)
    }


    //* calcula cantidad meses vividos para mostrar las vacunas aplicables 
    let childDate = format(new Date(child.bornDate), "dd-MM-yyyy")
    const childDateInMonths = Math.round((Date.now() - new Date(childDate)) / 2.628e+9)
    let aplicables = [];

    if (!fetch) {
        obtenerVacunas()
        setFetch(true)
    }

    //* revisa si estan recuperadas del back las vacunas del chico 
    if (vaccineChild) {

        //*filtra por la cantidad de meses del chico para determinar las aplicables     
        calendarioVacunacion.sort().forEach(function (vac, i) {
            if (vac.edadMinima <= childDateInMonths) {
                aplicables.push(vac);
            }
        });

        //* revisa las vacunas aplicadas y las elimina de la lista posible si cumple con el total de las dosis para dicha vacuna
        calendarioVacunacion.sort().forEach(function (vac, i) {
            vaccineChild.sort().map(v => {
                if (v.name === vac.nombre && v.tags.map(m => m.split(",").sort()).map(tag => tag.length)[0] === vac.dosis.length) {
                    aplicables.splice(vac.nombre, 1)
                }
            });
        });

    }

    //* onFinish toma el valor del formulario como parametro para la creacion de la nueva vacuna

    const onFinish = async (fieldsValues) => {

        const values = {
            ...fieldsValues,
            'applicationDate': fieldsValues['applicationDate'].format('DD-MM-YYYY'),
            'id': child._id
        }
        const create = await createVaccine(values);

        console.log('Success:', values);

        if (create) {

            Modal.info({
                title: 'vacuna agregada!',
                content: create.msg,
            });
            console.log('Success:', create);
        }

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleChangeVacSelected = value => {
        setDosis(cantDosisPorVacuna[value.split(' ').join('')]);
    };

    return (
        <Row align="middle" wrap={true} style={{ alignItems: 'left' }}  >
            <Col style={{ textAlign: 'left' }}>
                <Form
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >

                    <Form.Item name="applicationPlace" label="Lugar aplicacion"
                        rules={[{ required: true, message: 'Porfavor ingresa lugar', whitespace: true }]} >
                        <Input />
                    </Form.Item>

                    <Form.Item name="applicationDate" label="Fecha aplicacion" rules={[{ type: 'object', required: true, message: 'selecciona una fecha!' }]}  >
                        <DatePicker />
                    </Form.Item>

                    <Form.Item
                        name="name"
                        label="Vacuna aplicada"
                        hasFeedback
                        rules={[{ required: true, message: 'Elegi la vacuna!' }]}
                    >
                        <Select placeholder="Elegi la vacuna que se aplico" onSelect={handleChangeVacSelected}>
                            {aplicables.map((v) => <Option value={v.nombre}>{v.nombre}</Option>)}
                        </Select>


                    </Form.Item>

                    <Form.Item name="tags" label="Dosis Aplicadas" rules={[{ required: true, message: 'Porfavor ingresa que dosis se aplico' }]}
                    >
                        <Checkbox.Group>
                            <Row>
                                {
                                    dosis.length != null ?
                                        dosis.map((d) => {
                                            return (

                                                <Col span={10}>
                                                    <Checkbox value={d} style={{ lineHeight: '32px' }}>
                                                        {d}
                                                    </Checkbox>
                                                </Col>

                                            )
                                        })
                                        : {}
                                }
                            </Row>
                        </Checkbox.Group>


                    </Form.Item>
                    <Button type="primary" htmlType="submit" size={"large"} >
                        Agregar
                    </Button>
                </Form>

            </Col>

        </Row>

    );
};