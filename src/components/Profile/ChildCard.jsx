import { Card } from 'antd';
import { EditOutlined, UserDeleteOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Link, NavLink } from 'react-router-dom';
import { deleteChild,  } from '../../controllers/miApp.controller';

export const ChildCard = ({ img, nombre, edad, id }) => {
    const { Meta } = Card;
    const onFinish = async () => {
        const deleteCh = await deleteChild(id._id)
        if (deleteCh) {
            window.location.reload();
        }

    };
    const childParams = () => {
        <Link to=
            {{
                pathname: '/child-dashboard/:state',
                state: { id }
            }}

        />
    };


    return (
        // <Card style={{ height: "500px" }} bordered={true}
        <Card bordered={true}
            // style={{ width: '20%', marginTop: '5%' }}
            cover={<img alt="example" src={img} />
            }
            actions={[
                <Link to={{ pathname: '/child-dashboard/:state', state: { id } }}>
                    <EditOutlined key="edit" />
                </ Link >,
                <UserDeleteOutlined key="setting" onClick={onFinish} />,

                <NavLink
                    activeClassName="active"
                    className="nav-item nav-link"
                    exact
                    to="/child-dashboard"
                >
                    <EllipsisOutlined key="ellipsis" />
                </NavLink>,

            ]}
        >
            <Meta
                // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={nombre}
                description={`Nacio el ${edad}`}

            />
        </Card>

    );
}