import { Modal, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import ChatRoomMessage from './modal/ChatRoomMessage';
import React, { useState } from 'react';

interface DataType {
    key: string;
    userID: string;
    username: string;
    email: string;
    tags: string[];
}


const data: DataType[] = [
    {
        key: '1',
        userID: '1',
        username: "群聊1",
        email: '12345678@163.com',
        tags: ['系统管理员'],
    },
    {
        key: '2',
        userID: '2',
        username: "天天向上群",
        email: '1111111@163.com',
        tags: ['正常'],
    },
    {
        key: '3',
        userID: '3',
        username: "good good study",
        email: '2222222222@163.com',
        tags: ['正常'],
    },
    {
        key: '4',
        userID: '4',
        username: "发财计划",
        email: '34562132@163.com',
        tags: ['正常'],
    },
    {
        key: '5',
        userID: '5',
        username: "群聊2",
        email: '888888962@163.com',
        tags: ['禁用'],
    },
    {
        key: '6',
        userID: '6',
        username: "相亲相爱家庭群",
        email: '88888891234@163.com',
        tags: ['正常'],
    },
    {
        key: '7',
        userID: '7',
        username: "群聊3",
        email: '88888891234@163.com',
        tags: ['正常'],
    },
];
export default function UserPage() {
    const [modalOpen, setModalOpen] = useState(false);
    const columns: ColumnsType<DataType> = [
        {
            title: '群组ID',
            dataIndex: 'userID',
            key: 'userID',
            align: 'center',
            render: text => <a>{text}</a>,
        },
        {
            title: '群组名称',
            dataIndex: 'username',
            key: 'age',
            align: 'center',
        },
        {
            title: '群组状态',
            key: 'tags',
            dataIndex: 'tags',
            align: 'center',
            render: (_, { tags }) => (
                <>
                    {tags.map(tag => {
    
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        if (tag == '禁用') {
                            color = 'volcano';
                        }
                        if (tag == '系统管理员') {
                            color = 'geekblue';
                        }
                        if (tag == '正常') {
                            color = 'green';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: '操作',
            key: 'action',
            align: 'center',
            render: (_, record) => (
                <Space size="middle">
                    <a onClick={() => setModalOpen(true)}>修改群组状态</a>
                    <a>查看聊天信息</a>
                </Space>
            ),
        },
    ];

    return (
        <div>
            <Table columns={columns} dataSource={data} />
            <Modal title="群组1 聊天记录" open={modalOpen} footer={false}>
                <ChatRoomMessage></ChatRoomMessage>
            </Modal>
        </div>


    )
}
