import React from 'react'
import { PageHeader, Card, Col, Row, Typography } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import Meta from 'antd/lib/card/Meta';
import { useState, useEffect } from 'react';
import add_user from "../../img/add_user.png";
export const Post = () => {

    return (
        // gutter={{ xs: 8, sm: 16, md: 8, lg: 8 }}
        <>
            <PageHeader
                className="site-page-header-responsive"
                onBack={() => window.history.back()}
                title="News"
                subTitle="Informacion "
            >

                <div className="site-card-wrapper">
                    <Row gutter={24}>

                        <Col span={16}>
                            <img alt="example" src={add_user} width={'50%'} />
                            <Typography.Title >    Primer control              </Typography.Title>
                            <Typography.Paragraph>
                                <b>En el primer control de salud de tu bebé a los 7-10 días de vida, el equipo de salud</b>:
                                Le hará una revisación completa —incluyendo un control de la vista—, lo pesará, lo medirá y controlará si su cadera está bien. Verificará su carnet de de vacunación y le aplicará las vacunas que necesite.
                                Conversará con vos acerca de:
                                cómo lo ves, cómo pasa el día y cómo son sus noches;
                                si lo amamantás, si tenés problemas con la lactancia y cómo resolverlos;
                                la posición para dormir (sueño seguro);
                                la crianza, tus dudas e inquietudes.
                            </Typography.Paragraph>
                            <b>  Segundo control de salud  </b>
                            <Typography.Paragraph>
                                En el segundo control de salud de tu bebé al primer mes de vida, el equipo de salud:
                                Le hará una revisación completa —incluyendo un control de la vista—, lo pesará, lo medirá y controlará si su cadera está bien. Verificará su carnet de vacunación y le aplicará las que necesite.
                                Conversará con vos acerca de:
                                los resultados de los estudios de “la prueba del talón”;
                                la posición para dormir (sueño seguro);
                                cómo lo ves, cómo pasa el día y cómo son sus noches;
                                cómo reacciona ante los demás;
                                prevención de accidentes;
                                la crianza, tus dudas e inquietudes;
                                si queda al cuidado de alguien;
                                si lo amamantás, si se alimenta bien, si tenés problemas con la lactancia y cómo resolverlos;
                                algunas condiciones de tu casa (la calidad del aire y del agua, etc.).
                            </Typography.Paragraph>
                            <Typography.Paragraph>
                                Es un derecho de todos los bebés, niños y niñas —y también un apoyo para la familia— que el equipo de salud los controle periódicamente para ver si están sanos y si están creciendo bien.

                                En el control de salud podés evacuar tus dudas y dificultades sobre la crianza, la alimentación y las vacunas.

                                En el sector público, podés hacer los controles en el centro de salud más cercano a tu domicilio.

                                Llevá a tu hijo desde que nace aunque esté sano. Es necesario que un profesional de salud lo revise para saber cómo está creciendo y desarrollándose. También para aclarar las dudas que tengas sobre la crianza.

                                Durante los primeros meses del bebé, los controles serán más frecuentes, ya que es una etapa de muchos cambios.

                                ¿Cuándo hay que llevar al control a un niño, aunque no esté enfermo?

                                Entre los 7 y 10 días de vida: el primer control.
                                De 1 a 6 meses: todos los meses.
                                De 6 meses a 1 año: cada 2 meses.
                                De 1 a 2 años: cada 3 meses.
                                De 2 a 3 años: cada 6 meses.
                                Desde los 3 años: una vez por año.
                            </Typography.Paragraph>
                        </Col>


                    </Row>
                </div>
            </PageHeader>
        </>

    )


}
