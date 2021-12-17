import { Card, Col, Row, Typography } from 'antd';
import calendar from "../../img/calendar.png"
import percent from "../../img/percent.png"
import { Posts } from '../../types/newsPost';
import { Link, useParams, useLocation, useHistory } from 'react-router-dom';
export const PostCollection = () => {

    const { Meta } = Card;
    const { handle } = useParams();
    const location = useLocation();
    const history = useHistory();
    return (
        <>
            <Row justify="center" style={{ backgroundColor: '#ff4029' }}>
                <Col     >
                    <Typography.Title level={1} style={{ marginTop: '20% ' }} type="warning">
                        Articulos
                    </Typography.Title>

                </Col>
            </Row>
            <Row justify="flex-start" >

                {
                    Posts.map(post => {

                        return (
                            <Col span={22} xs={22} sm={12} md={12} lg={8} xl={8} xxl={8} className='card__margin' >

                                <Card
                                  borderer
                                    description={post.titulo}
                                    className='card__border'
                                    hoverable
                                    cover={<img alt="example" src={percent} />}

                                    onClick={() => { history.push({ pathname: '/post:post', post: post }); }}
                                >
                                    <Meta title={post.titulo} description={post.subtitulo} />

                                </Card>
                            </Col>
                        )
                    })
                }

            </Row >

        </>

    )
}
