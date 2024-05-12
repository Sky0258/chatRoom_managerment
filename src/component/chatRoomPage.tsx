import { Modal, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import ChatRoomMessage from './modal/ChatRoomMessage';
import React, { useEffect, useState } from 'react';
import { reqAllChatRoomList, reqChangeChatRoomStatus } from '../api/modules/chatRoom';
import ChangeStatus from './modal/ChangeStatus';

interface DataType {
    key: string;
    id: string;
    groupName: string;
    status: string;
}

export default function UserPage() {
    const [statusModalOpen, setStatusModalOpen] = useState(false);
    const [recordsModalOpen, setRecordsModalOpen] = useState(false);
    const [data, setData] = useState<DataType[]>([]);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("0");
    const [chatRoomID, setChatRoomID] = useState("0");
    const [groupName, setGroupName] = useState("");

    const columns: ColumnsType<DataType> = [
        {
            title: '群组ID',
            dataIndex: 'id',
            key: 'id',
            align: 'center',
            render: text => <a>{text}</a>,
        },
        {
            title: '群组名称',
            dataIndex: 'groupName',
            key: 'groupName',
            align: 'center',
        },
        {
            title: '群组状态',
            key: 'status',
            dataIndex: 'status',
            align: 'center',
            render: (status) => {
                let color = 'green';
                let text = '正常'
                if (status == '1') {
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
            align: 'center',
            render: (_, record) => (
                <Space size="middle">
                    <a onClick={() => {
                        setStatusModalOpen(true);
                        setStatus(record.status);
                        setChatRoomID(record.id);
                    }}>修改群组状态</a>
                    <a onClick={() => {
                        setRecordsModalOpen(true);
                        setGroupName(record.groupName);
                        setChatRoomID(record.id);
                    }}>查看聊天信息</a>
                </Space>
            ),
        },
    ];

    useEffect(() => {
        reqAllChatRoomList().then(res => {
            setData(res.data.results);
        })
    }, []);

    function handleChangeStatus(value: string) {
        setStatus(value);
    }
    function handleOk() {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setStatusModalOpen(false);
            // 修改群组权限
            reqChangeChatRoomStatus({
                chatRoomID,
                status
            }).then((res) => {
                // 重新加载数据
                reqAllChatRoomList().then((res) => {
                    setData(res.data.results);
                })
            })
        }, 1000);
    }
    function handleCancel() {
        setStatusModalOpen(false);
        setRecordsModalOpen(false);
    }
    return (
        <div>
            <Table columns={columns} dataSource={data} />
            <Modal 
                title="修改群组权限" 
                open={statusModalOpen} 
                confirmLoading={loading}
                width="450px"
                okText="保存修改"
                cancelText="取消"
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <ChangeStatus handleChangeStatus={handleChangeStatus} status={status} title="群组"></ChangeStatus>
            </Modal>
            <Modal 
                title={groupName + " 聊天记录"}
                open={recordsModalOpen} 
                footer={false}
                onCancel={handleCancel}
            >
                <ChatRoomMessage chatRoomID={chatRoomID}></ChatRoomMessage>
            </Modal>
        </div>


    )
}
