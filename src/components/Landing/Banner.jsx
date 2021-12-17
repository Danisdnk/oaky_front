import { Row, Col, Typography, Image } from 'antd';
import background from "../../img/doctor.svg";
import { Wave } from "../atoms/Wave"
export const Banner = () => {
    return (
        <>
            <Row justify="center" style={{ backgroundColor: '#ff4029' }}>
                <Col offset={1} xs={20} sm={24} md={6} lg={12} xl={8} >
                    <Typography.Title level={1} style={{ marginTop: '20% ' }} type="warning">
                        Bienvenido a Oaky 
                    </Typography.Title>

                    <Typography.Paragraph type="warning">
                        Oaky es un sistema de gestion para consultar y llevar un registro de
                        vacunación de tus hijos. Cuenta con un servicio de registro de control pediátrico  para tener un seguimiento de los datos médicos de tus niños a través del tiempo, y un registro del calendario de vacunas aplicadas
                        Registrate o inicia sesión para acceder a todos los beneficios que Oaky tiene para vos.
                    </Typography.Paragraph>

                </Col>
                <Col xs={24} sm={24} md={12} lg={9} xl={9}>

                    <Image width={'100%'} src={background} preview={false} />
                </Col>

                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Wave />
                    {/* <Image width={'100%'} src={wave} preview={false} /> */}
                </Col>
            </Row >

        </>
    );
}
