import React from 'react'
import { PageHeader, Card, Col, Row, Typography } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import Meta from 'antd/lib/card/Meta';
import { useState, useEffect } from 'react';
import add_user from "../../img/add_user.png";
import percent from "../../img/percent.png"
import { Posts } from '../../types/newsPost';
import { Link, useParams, useLocation, useHistory } from 'react-router-dom';
import { Content } from 'antd/lib/layout/layout';

export const Post = ({ history }) => {
    const { handle } = useParams();
    const location = useLocation();
    const { post } = history.location;
    return (
        // gutter={{ xs: 8, sm: 16, md: 8, lg: 8 }}
        <>
            <PageHeader
                className="site-page-header-responsive"
                onBack={() => window.history.back()}
                title="News"
                subTitle="Informacion "
            >

                <Row justify="center" style={{ backgroundColor: '#ff4029' }}>
                    <Col >
                        <Typography.Title level={2}  justify="center" style={{ marginTop: '20% ' }} type="warning">
                            {post.titulo}
                        </Typography.Title>

                    </Col>
                </Row>

                <Content>

                    <Row gutter={24} justify="center" >

                        <Col span={23} justify="center" >
                            <img alt="example" src={percent} width={'50%'} />
                            <Typography.Title >
                                {post.subTitle}
                            </Typography.Title>
                            <Typography.Paragraph>
                                {post.contenido}
                            </Typography.Paragraph>
                        </Col>


                    </Row>

                </Content>



            </PageHeader>
        </>

    )


}
