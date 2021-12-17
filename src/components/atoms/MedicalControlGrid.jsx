import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Table, Space, Tag, Divider, Modal } from 'antd';
import { useEffect } from 'react';
import { deleteControl } from '../../controllers/miApp.controller';
import { render } from '@testing-library/react';
import { UpdateControlModal } from '../ChildDashboard/UpdateControlModal';



export const MedicalControlGrid = ({control}) => {
    const deleteControlId = async (id) => {
        const deleted = await deleteControl(id);
        if (deleted.ok) {
            Modal.success({ title: 'Eliminado', content: deleted.msg, footer: null });
            setTimeout(() => { window.location.reload(); }, 1000);
        }

    }
    let updateMedicControl = async (control) => (
        render(<UpdateControlModal control={control} visible={true} />)
    );


    const columns = [

        {
            title: 'Realizado el',
            dataIndex: 'date',
            key: 'date',
        },

        {
            title: 'Diametro cabeza',
            dataIndex: 'headDiameter',
            key: 'headDiameter',
        },
        {
            title: 'Peso(kg)',
            dataIndex: 'weight',
            key: 'weight',
        },
        {
            title: 'Altura',
            dataIndex: 'height',
            key: 'height',
        },
        {
            title: 'control de ',
            key: 'tags',
            dataIndex: 'tags',
            render: tags => (
                <>
                    {
                        <Tag color={tags.length <= 6 ? 'volcano' : tags.length >= 9 ? 'blue' : 'lime'} key={tags}>
                            {tags}
                        </Tag>
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

                    <EditOutlined key="edit" onClick={() => updateMedicControl(record)} />
                    <DeleteOutlined key="delete" onClick={() => { deleteControlId(record.id) }} />

                </Space>
            ),
        },

    ];

    var mapped =  control.map(v => ({
        date: v.date,
        name: v.name,

        headDiameter: v.headDiameter,
        height: v.height,
        weight: v.weight,

        medicalStudy: v.medicalStudy,
        result: v.result,

        medicine: v.medicine,
        medicine_comment: v.medicine_comment,

        id: v._id,
        tags: v.controlType,
        child_id: v.child_id,
        percentil: `Diametro cabeza ${v.headDiameter}, Altura en CM : ${v.height}, Peso en KG : ${v.weight}`,

        medicacion: `${v.medicine ? "fue recetada la medicacion: " + v.medicine : "No se receto medicacion"},
        Observaciones: ${v.medicine_comment}`

    }));

    useEffect(() => {

    }, [control])

    return (
        <>
            <Table columns={columns}
            //  Scroll={'enable'}
                rowKey={record => record.id}
                expandable={{

                    expandedRowRender: record => (
                     
                        < div style={{ textAlign: 'center', backgroundColor: '#1890ff0d' }} >

                            <Divider>
                                Descripcion general
                            </Divider>
                            <p style={{ margin: 0 }} > Estudio realizado el {record.date} por {record.name}</p>
                            <p style={{ margin: 0 }}> de {record.tags}</p>

                            <p style={{ margin: 0 }}> Resultado de la visita {record.result}</p>

                            <Divider>
                                Percentiles
                            </Divider>
                            <p style={{ margin: 0 }}> Diametro cabeza {record.headDiameter}</p>
                            <p style={{ margin: 0 }}> Altura en cm {record.height}</p>
                            <p style={{ margin: 0 }}> Peso en Kg {record.weight}</p>
                            <Divider>
                                Medicamentos
                            </Divider>
                            <p style={{ margin: 0 }}>{record.medicacion}</p>
                            <Divider>
                                Estudios a Realizar
                            </Divider>
                            <p style={{ margin: 0 }}> Estudioa a realizar {record.medicalStudy}</p>


                        </div>)

                }}
                pagination={{ position: ['none', 'bottomCenter'] }}
                scroll={{ x: 'max-content' }}
                dataSource={mapped} />
        </>
    )
}

