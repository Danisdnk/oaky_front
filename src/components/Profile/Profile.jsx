import { Button, PageHeader, Descriptions, Statistic, Divider, Typography, Card, Col, Row } from 'antd';
import { useState, useEffect } from 'react';
import { findChildByParentId, findParentId } from './../../controllers/miApp.controller';
import { EditOutlined } from '@ant-design/icons';
import Meta from 'antd/lib/card/Meta';
import add_user from "../../img/add_user.png";
import child from "../../img/child.png";
import girl from "../../img/girl.png";
import { FaCog } from 'react-icons/fa';
import { ChildCard } from './ChildCard';
import { ChildRegister } from './ChildRegister';

import { render } from '@testing-library/react';

export const Profile = ({ history }) => {

    const [user, setuser] = useState({})
    const [children, setchildren] = useState([])
    const [fetch, setFetch] = useState(false)

    const validarLogin = async () => {
        const getUser = await findParentId()
        setuser(getUser)
    }

    const obtenerHijos = async () => {
        const getChildren = await findChildByParentId();
        setchildren(getChildren);

    }

    if (!fetch) {
        validarLogin()
        obtenerHijos()
        setFetch(true)
    }


    useEffect(() => { }, [children])


    if (user) {
        console.log(children, "les pibis de pirfil")
    }


    const renderContent = () => (

        <Descriptions size="small" >
            <Descriptions.Item label="Telefono">{user.cellphone}</Descriptions.Item>
            <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
            <Descriptions.Item label="DNI">{user.documentIdentity}</Descriptions.Item>

        </Descriptions>

    );

    const extraContent = (
        <div
            style={{
                display: 'flex',
                width: 'max-content',
                justifyContent: 'flex-start',
            }}
        >

            <Statistic title="Titular responsable" value={(user.name)} />

            {/* <Image width={'20%'} src={background} preview={false} /> */}

        </div>

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

    let handle = () => (
        render(<ChildRegister visible={true} />)
    );
    return (

        <>
            <PageHeader
                className="site-page-header-responsive"
                onBack={() => window.history.back()}
                title="Perfil"
                subTitle="Gestion de usuarios"
                extra={[
                    <Button key="2" icon={<FaCog />}>__Modificar perfil</Button>
                ]}
            >
                <Content extra={extraContent}>
                    {

                        renderContent()

                    }</Content>
                <Divider>
                    <Typography.Title type="secondary" level={2}>
                        Mis infantes
                    </Typography.Title>
                </Divider>

                <div className="site-card-wrapper">

                    <Row gutter={[24, 24]}>

                        {
                            (fetch && (children && children.length)) ?

                                children.map(ch =>

                                    <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 4 }}>
                                        {
                                            children.sex === "Masculino" ?
                                                <ChildCard img={child} nombre={ch.name} edad={ch.bornDate} id={ch} />
                                                : <ChildCard img={girl} nombre={ch.name} edad={ch.bornDate} id={ch} />
                                        }

                                    </Col>
                                ) : ('')

                        }
                        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 4 }}>
                            <Card bordered={true}
                                cover={<img alt="example" src={add_user} />}
                                actions={[
                                    <EditOutlined key="edit" onClick={handle} />]} >

                                <Meta title={'Agregar nuevo niño'} />
                            </Card>

                        </Col>


                    </Row>
                </div>
            </PageHeader>
        </>

    )
}
