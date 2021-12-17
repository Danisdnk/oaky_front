
import { Button, Image, PageHeader, Tabs, Descriptions, Modal, Row, Col } from 'antd';
import { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { useLocation, useParams } from 'react-router';
import { findControlsForChild, findVaccineByChild } from './../../controllers/miApp.controller';
import { RegisterControlModal } from './RegisterControlModal';
import { AplicacionesDadas } from '../atoms/AplicacionesDadas';
import { MedicalControlGrid } from '../atoms/MedicalControlGrid';
import { ModalVaccine } from '../atoms/ModalVaccine';
import background from "../../img/child.png";
import girl from "../../img/girl.png";
import vacunacion from "../../img/vacunacion.jpg";
import f_altura from "../../img/f_altura.jpg";
import f_peso from "../../img/f_peso.jpg";
import m_altura from "../../img/m_altura.jpg";
import m_peso from "../../img/m_peso.jpg";
import m_imc0 from "../../img/m_imc0.jpg";
import m_imc from "../../img/m_imc.jpg";
import f_imc2 from "../../img/f_imc2.jpg";
import m_pc from "../../img/m_pc.jpg";
import f_pc from "../../img/f_pc.jpg";
import { render } from '@testing-library/react';

export const ChildDashboard = ({ history }) => {
    const { TabPane } = Tabs;

    const { handle } = useParams();
    const location = useLocation();
    const { id } = location.state;
    const [modal2Visible, setModal2Visible] = useState(false)
    const [vaccineChild, setvaccineChild] = useState({})
    const [controlChild, seControlChild] = useState({})
    const [fetch, setFetch] = useState(false)
    const obtenerVacunas = async () => {
        const getUser = await findVaccineByChild(id._id)
        setvaccineChild(getUser)
    }

    const obtenerControles = async () => {
        debugger;
        const getUser = await findControlsForChild(id._id)
        seControlChild(getUser)
    }

    if (!fetch) {
        obtenerVacunas()
        obtenerControles()
        setFetch(true)
    }

    if (vaccineChild) {
        console.log(vaccineChild)
        console.log(controlChild, "controlees")

    } if (controlChild) {
        console.log(controlChild)
    }

    const renderContent = () => (


        <Descriptions size="middle">
            {/* <Descriptions.Item label="Association">
                <a href="#">421421</a>
            </Descriptions.Item> */}
            <Descriptions.Item label="Nombre del Paciente">{id.name}</Descriptions.Item>
            {/* <Descriptions.Item label="Ultimo control pediatrico">
                20 de agosto del 2021
            </Descriptions.Item> */}
            <Descriptions.Item label="Fecha de nacimiento"> {id.bornDate}</Descriptions.Item>
            <Descriptions.Item label="Grupo Sanguineo:">{id.bloodType}</Descriptions.Item>
            <Descriptions.Item label="Enfermedades:"> {id.diseases}</Descriptions.Item>

        </Descriptions>

    );
    const extraContent = (


        id.sex === "Femenino" ? (
            <Image width={'80%'} src={girl} preview={false} />
        ) :
            (
                <Image width={'80%'} src={background} preview={false} />
            )

    );
    const Content = ({ children, extra }) => (

        <Row gutter={[24, 24]}>
            <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 4 }}>
                {extra}
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 16 }} xl={{ span: 16 }} xxl={{ span: 16 }}>
                {children}
            </Col>
        </Row>

    );

    let createMedicControl = () => (
        render(<RegisterControlModal child={id} visible={true} />)
    );


    return (
        <>
            <PageHeader
                className="site-page-header-responsive"
                onBack={() => window.history.back()}
                title="Volver a perfil"
                subTitle="Ficha del paciente"
                extra={[
                    <Button key="2" onClick={() => setModal2Visible(true)} >Añadir vacuna</Button>,
                    <Button key="1" type="primary" icon={FaPlusCircle} onClick={createMedicControl}  >
                        Añadir control
                    </Button>
                ]}

                footer={
                    <Tabs defaultActiveKey="1">
                        {/* <TabPane tab="Percentiles" key="1" >

                            <Tabs tabPosition={'top'}>
                                <TabPane tab="Peso" key="11">
                                    <Percentile />
                                </TabPane>
                                <TabPane tab="Estatura" key="12">
                                    <Percentile />
                                </TabPane>
                                <TabPane tab="Perim Craneal" key="13">
                                    <Percentile />
                                </TabPane>
                                <TabPane tab="IMC" key="14">
                                    <Percentile />
                                </TabPane>
                            </Tabs>

                        </TabPane > */}

                        <TabPane tab="Tablas" key="21" >



                            <Tabs tabPosition={'left'} style={{ marginTop: '3%' }}>
                                <TabPane tab="calendario vac" key="31">
                                    <Image width={'100%'} src={vacunacion} preview={false} />
                                </TabPane>
                                {id.sex === 'Femenino' ? (

                                    <>
                                        <TabPane tab="Altura" key="211">
                                            <Image width={'80%'} src={f_altura} preview={true} />
                                        </TabPane>

                                        <TabPane tab="Peso" key="212">
                                            <Image width={'80%'} src={f_peso} preview={true} />
                                        </TabPane>

                                        <TabPane tab="Perim C" key="213">
                                            <Image width={'80%'} src={f_pc} preview={true} />
                                        </TabPane>
                                        <TabPane tab="IMC" key="214" >
                                            <Image width={'80%'} src={m_imc} preview={true} />
                                            <Image width={'80%'} src={f_imc2} preview={true} />
                                        </TabPane>
                                    </>

                                )
                                    :
                                    (
                                        <>
                                            <TabPane tab="Altura" key="211">
                                                <Image width={'80%'} src={m_altura} preview={true} />
                                            </TabPane>

                                            <TabPane tab="Peso" key="212">
                                                <Image width={'80%'} src={m_peso} preview={true} />
                                            </TabPane>

                                            <TabPane tab="Perim C" key="213">
                                                <Image width={'80%'} src={m_pc} preview={true} />
                                            </TabPane>
                                            <TabPane tab="IMC" key="214" >
                                                <Image width={'80%'} src={m_imc} preview={true} />
                                                <Image width={'80%'} src={m_imc0} preview={true} />
                                            </TabPane>
                                        </>
                                    )
                                }
                            </Tabs>
                        </TabPane>

                        <TabPane tab="Vacunas aplicadas " key="3" >
                            <AplicacionesDadas vaccines={vaccineChild} child={id} />
                        </TabPane>
                        
                        <TabPane tab="Controles medicos" key="2" >
                            <MedicalControlGrid control={controlChild} />
                        </TabPane>

                    </Tabs>
                }
            >
                <Content extra={extraContent}>
                    {

                        renderContent()
                    }</Content>

            </PageHeader>

            <Modal
                title="Añadir nueva vacuna"
                centered
                visible={modal2Visible}
                onOk={() => setModal2Visible(false)}
                onCancel={() => setModal2Visible(false)}
            >
                <ModalVaccine child={id} />
            </Modal>
        </>

    )

}
