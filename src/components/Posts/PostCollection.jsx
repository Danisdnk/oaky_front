import { Card, Col, Row } from 'antd';
import calendar from "../../img/calendar.png"
import percent from "../../img/percent.png"

export const PostCollection = () => {

    const { Meta } = Card;






    
    return (
        <Row justify="center">
            <Col span={12} xs={16} sm={15} md={6} lg={8} xl={5}    className='card__margin' >
                <Card
                    className='card__border'
                    hoverable
                    cover={<img alt="example" src={calendar}/>}
                >
                    <Meta title="Calendario de vacunacion" description="revisa el calendario de vacunacion" />
                </Card>
            </Col>
            <Col span={12} xs={16} sm={15} md={6} lg={8} xl={5}     className='card__margin' >
                <Card
                    className='card__border'
                    hoverable
                    cover={<img alt="example" src={percent}/>}
                >
                    <Meta title="Percentiles" description="Percentiles y parámetros generales" />
                </Card>
            </Col>
            <Col span={12} xs={16} sm={15} md={6} lg={8} xl={5}    className='card__margin'>
                <Card
                    className='card__border'
                    hoverable
                    cover={<img alt="example" src={calendar} />}
                    >
                    <Meta title="Información sobre controles médicos" description="gestiona los controles medicos desde aca" />
                </Card>
            </Col>
        </Row >


    )
}
