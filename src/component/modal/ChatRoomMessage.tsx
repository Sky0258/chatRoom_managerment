import { Avatar, Button, List, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import { reqGetChatRoomRecords } from '../../api/modules/chatRoom';

interface DataType {
    id: number,
    content: string,
    createdAt: string,
    user: {
        id: number,
        name: string,
        imageUrl: string
    }
}

export default function ChatRoomMessage({ chatRoomID }: any) {
    const [list, setList] = useState<DataType[]>([]);

    useEffect(() => {
        reqGetChatRoomRecords({
            chatRoomID
        }).then((res) => {
            setList(res.data.results);
        })
    }, [chatRoomID]);

    return (
        <List
            className="demo-loadmore-list records_modal_contain"
            size="small"
            itemLayout="horizontal"
            dataSource={list}
            renderItem={item => (
                <List.Item>
                    <Skeleton avatar title={false} loading={false}>
                        <List.Item.Meta
                            avatar={<Avatar src={item.user.imageUrl} />}
                            title={<a href="https://ant.design">{item.user.name}</a>}
                            description={item.content}
                        />
                        <div>{item.createdAt.substring(0, 10)}</div>
                    </Skeleton>
                </List.Item>
            )}
        />
    );
};
