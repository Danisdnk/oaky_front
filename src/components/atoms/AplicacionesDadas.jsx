import { EditOutlined, DeleteOutlined } from '@ant-design/icons/';
import { Table, Tag, Space, Modal, Button } from 'antd';
import { useState, useEffect } from 'react';
import { render } from '@testing-library/react';
import { deleteVaccine } from './../../controllers/miApp.controller';
import { UpdateVaccineModal } from './../ChildDashboard/UpdateVaccineModal';
export const AplicacionesDadas = ({ vaccines, child }) => {

    const [fetch, setfetch] = useState(false)


    const columns = [
        {
            title: 'Vacuna',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Aplicada el',
            dataIndex: 'applicationDate',
            key: 'applicationDate',
        },
        {
            title: 'Aplicada en',
            dataIndex: 'applicationPlace',
            key: 'applicationPlace',
        },
        {
            title: 'Dosis',
            key: 'tags',
            dataIndex: 'tags',
            render: tags =>
            (
                <>
                    {
                        tags.map(m => m.split(",").sort()).map(tag => {
                            let color = [];
                            return (
                                tag.map((m, j) => {

                                    if (m === 'Unica')
                                        color.push(...['blue'])


                                    if (m === 'Primera')
                                        color.push(...['green'])

                                    if (m === 'Segunda')
                                        color.push(...['pink'])

                                    if (m === 'Tercera')
                                        color.push(...['volcano'])

                                    if (m === 'Refuerzo')
                                        color.push(...['purple'])


                                    return (<Tag color={color[j]} key={m} > {m} </Tag>);
                                })
                            )
                        })



                    }
                </>
            ),
        },
        {
            title: 'Acciones',
            key: 'id',
            dataIndex: 'id',

            render: (text, record) => (
                <Space size="middle">

                    <EditOutlined key="edit" onClick={() => updateVaccine(record)} />
                    <DeleteOutlined key="delete" onClick={() => { deleteVaccineId(record.id) }} />

                </Space>
            ),
        },

    ];

    const deleteVaccineId = async (id) => {
        const deleted = await deleteVaccine(id);
        if (deleted.ok) {
            Modal.success({ title: 'Eliminado', content: deleted.msg, footer: null });
            setTimeout(() => { window.location.reload(); }, 1000);
        }

    }
    let updateVaccine = (vaccine) => render(<UpdateVaccineModal child={child} control={vaccine} visible={true} />)

    var mapped = vaccines.map(v => ({
        applicationDate: v.applicationDate,
        applicationPlace: v.applicationPlace,
        id: v._id,
        name: v.name,
        tags: v.tags,

    }));

    useEffect(() => {

    }, [vaccines])


    return (
        <>
            <Table columns={columns} dataSource={mapped}
                pagination={{ position: ['none', 'bottomCenter'] }}
                scroll={{ x: 'max-content' }} />
        </>
    )
}

