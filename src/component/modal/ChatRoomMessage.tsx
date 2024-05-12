import { Avatar, Button, List, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';

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

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

const ChatRoomMessage: React.FC = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DataType[]>([]);
  const [list, setList] = useState<DataType[]>([
    {
        "id": 169,
        "content": "你好",
        "createdAt": "2024-04-18T12:19:17.000Z",
        "user": {
            "id": 1,
            "name": "sky",
            "imageUrl": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fc0271e06-53c3-47f5-922d-1d06a6126172%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1715676490&t=f43a6e2a2f5655823b1be7ad1df1a23b"
        }
    },
    {
        "id": 171,
        "content": "dddd",
        "createdAt": "2024-04-19T12:36:39.000Z",
        "user": {
            "id": 1,
            "name": "sky",
            "imageUrl": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fc0271e06-53c3-47f5-922d-1d06a6126172%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1715676490&t=f43a6e2a2f5655823b1be7ad1df1a23b"
        }
    },
    {
        "id": 174,
        "content": "3434",
        "createdAt": "2024-04-19T13:03:36.000Z",
        "user": {
            "id": 3,
            "name": "Alice",
            "imageUrl": "https://img0.baidu.com/it/u=868510210,2647591546&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
        }
    },
    {
        "id": 175,
        "content": "123",
        "createdAt": "2024-04-20T13:03:51.000Z",
        "user": {
            "id": 3,
            "name": "Alice",
            "imageUrl": "https://img0.baidu.com/it/u=868510210,2647591546&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
        }
    },
    {
        "id": 176,
        "content": "123",
        "createdAt": "2024-04-20T13:05:36.000Z",
        "user": {
            "id": 1,
            "name": "sky",
            "imageUrl": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fc0271e06-53c3-47f5-922d-1d06a6126172%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1715676490&t=f43a6e2a2f5655823b1be7ad1df1a23b"
        }
    },
    {
        "id": 178,
        "content": "aaaaaaa",
        "createdAt": "2024-04-20T13:18:46.000Z",
        "user": {
            "id": 2,
            "name": "Mike",
            "imageUrl": "https://img0.baidu.com/it/u=4050015060,2212620442&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
        }
    }
]);

  useEffect(() => {
  }, []);

  const onLoadMore = () => {
    setLoading(true);
    // setList(
    //   data.concat([...new Array(count)].map(() => ({ loading: true, name: {}, picture: {} }))),
    // );
    fetch(fakeDataUrl)
      .then(res => res.json())
      .then(res => {
        const newData = data.concat(res.results);
        setData(newData);
        setList(newData);
        setLoading(false);
        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
        window.dispatchEvent(new Event('resize'));
      });
  };

  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;

  return (
    <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
      loadMore={loadMore}
      dataSource={list}
      renderItem={item => (
        <List.Item>
          <Skeleton avatar title={false} loading={false}>
            <List.Item.Meta
              avatar={<Avatar src={item.user.imageUrl} />}
              title={<a href="https://ant.design">{item.user.name}</a>}
              description={item.content}
            />
            <div>{item.createdAt.substring(0,10)}</div>
          </Skeleton>
        </List.Item>
      )}
    />
  );
};

export default ChatRoomMessage;