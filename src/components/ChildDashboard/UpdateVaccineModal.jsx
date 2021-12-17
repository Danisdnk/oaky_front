import { useState, useEffect } from 'react';
import {
    Form,
    Input,
    Select,
    Row,
    Col,
    Button,
    Checkbox,
    DatePicker,
    Modal,
} from 'antd';
import moment from 'moment';
import { updateVaccine } from '../../controllers/miApp.controller';
import { useHistory } from 'react-router';
import { cantDosisPorVacuna, calendarioVacunacion } from '../../types/vaccinesInCalendar';
import { useLocation, useParams } from 'react-router';
import { format } from 'date-fns';
export const UpdateVaccineModal = ({ visible, control, child }) => {


    const { Option } = Select;
    const [log, setLog] = useState(false)
    const [dosis, setDosis] = useState([]);
    const [fetch, setFetch] = useState(false)

    const [vaccineChild, setvaccineChild] = useState([])
    const [modal2Visible, setModal2Visible] = useState(visible)
    const [state, setState] = useState(false)


    const onFinish = async (fieldsValues) => {
   
        const values = {
            ...fieldsValues,
            'applicationDate': fieldsValues['applicationDate'].format('DD-MM-YYYY'),
            'cId': child._id,
            'id': control.id
        }
        const updated = await updateVaccine(values);

        if (updated.ok) {
            Modal.success({ title: 'Actualizado', content: updated.msg, footer: null });
            setTimeout(() => { window.location.reload(); }, 1000);
        }

    };

    //* calcula cantidad meses vividos para mostrar las vacunas aplicables 
    let childDate = format(new Date(child.bornDate), "dd-MM-yyyy")
    const childDateInMonths = Math.round((Date.now() - new Date(childDate)) / 2.628e+9)
    let aplicables = [];

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

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleChangeVacSelected = value => {
        setDosis(cantDosisPorVacuna[value.split(' ').join('')]);
    };


    useEffect(() => {
        if (modal2Visible && control) {
            handleChangeVacSelected(control.name)
        }

    }, [])


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

                            <Form.Item name="applicationPlace" label="Lugar aplicacion"
                                initialValue={control.applicationPlace}
                                rules={[{ required: true, message: 'Porfavor ingresa lugar', whitespace: true }]} >
                                <Input />
                            </Form.Item>

                            <Form.Item name="applicationDate"
                                initialValue={moment(control.applicationDate, 'DD-MM-YYYY')} label="Fecha aplicacion"
                                rules={[{ type: 'object', required: true, message: 'selecciona una fecha!' }]}  >
                                <DatePicker />
                            </Form.Item>

                        </Col>

                        <Form.Item
                            name="name"
                            label="Vacuna aplicada"
                            hasFeedback
                            initialValue={control.name}
                            rules={[{ required: true, message: 'Elegi la vacuna!' }]}
                        >
                            <Select placeholder="Elegi la vacuna que se aplico" onSelect={handleChangeVacSelected}>
                                {aplicables.map((v) => <Option value={v.nombre}>{v.nombre}</Option>)}
                            </Select>

                        </Form.Item>

                        <Row gutter={[0, 12]}>

                            <Col span={24} >
                                <Form.Item name="tags" label="Dosis Aplicadas"
                                    initialValue={control.tags[0].split(',')}
                                    rules={[{ required: true, message: 'Porfavor ingresa que dosis se aplico' }]}
                                >
                                    <Checkbox.Group >
                                        {
                                            dosis.length != null ?
                                                dosis.map((d) => {
                                                    return (

                                                        <Col span={10}>
                                                            <Checkbox key={d} value={d} style={{ lineHeight: '32px' }}>
                                                                {d}
                                                            </Checkbox>
                                                        </Col>

                                                    )
                                                })
                                                : {}
                                        }
                                    </Checkbox.Group>


                                </Form.Item>
                            </Col>

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