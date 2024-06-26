import { Modal, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useEffect, useState } from 'react';
import { reqAllUserList, reqChangeUserStatus } from '../api/modules/user';
import ChangeStatus from './modal/ChangeStatus';

interface DataType {
    id: string;
    username: string;
    email: string;
    status: string;
}

export default function UserPage() {
    const [data, setData] = useState<DataType[]>([]);
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("0");
    const [userID, setUserID] = useState("0");
    const columns: ColumnsType<DataType> = [
        {
            title: '用户ID',
            dataIndex: 'id',
            key: 'id',
            align: 'center',
            render: text => <a>{text}</a>,
        },
        {
            title: '用户名',
            dataIndex: 'username',
            key: 'age',
            align: 'center',
        },
        {
            title: '邮箱',
            dataIndex: 'email',
            key: 'address',
            align: 'center',
        },
        {
            title: '用户权限',
            key: 'status',
            dataIndex: 'status',
            render: (status) => {
                let color = 'green';
                let text = '系统管理员'
                if (status == '0') {
                    text = '正常';
                } else if (status == '1') {
                    text = '禁用';
                    color = 'volcano';
                }
                return <Tag color={color} key={status}>
                    {text}
                </Tag>
            }
        },
        {
            title: '操作',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a onClick={() => {
                        setModalOpen(true);
                        setStatus(record.status);
                        setUserID(record.id);
                    }}>修改用户权限</a>
                </Space>
            ),
        },
    ];
    useEffect(() => {
        reqAllUserList().then((res) => {
            setData(res.data.results);
        })
    }, []);
    function handleCancel() {
        setModalOpen(false);
    }
    function handleOk() {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setModalOpen(false);
            // 修改用户权限
            reqChangeUserStatus({
                userID,
                status
            }).then((res) => {
                // 重新加载数据
                reqAllUserList().then((res) => {
                    setData(res.data.results);
                })
            })
        }, 1000);
    }
    function handleChangeStatus(value: string) {
        setStatus(value);
    }
    return (
        <div>
            <Table columns={columns} dataSource={data} />
            <Modal title="修改用户权限"
                confirmLoading={loading}
                open={modalOpen}
                width="450px"
                okText="保存修改"
                cancelText="取消"
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <ChangeStatus handleChangeStatus={handleChangeStatus} status={status} title="用 户"></ChangeStatus>
            </Modal>
        </div>
    )
}
