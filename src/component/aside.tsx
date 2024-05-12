import { AreaChartOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    path?: string,
    type?: 'group',
): MenuItem {
    if (path) {
        return {
            key,
            icon,
            children,
            label: <Link to={path}>{label}</Link>, // 使用 Link 组件包装 label
            type,
        } as MenuItem;
    } else {
        return {
            key,
            icon,
            children,
            label,
            type,
        } as MenuItem;
    }
}

const items: MenuProps['items'] = [
    getItem('用户管理', 'sub1', <AreaChartOutlined style={{ fontSize: 18 }} />, [
        getItem('用户权限管理', '/home/userPage', null, undefined, '/home/userPage'),
    ]),

    getItem('聊天室管理', 'sub2', <UsergroupAddOutlined style={{ fontSize: 18 }} />, [
        getItem('聊天室权限', '/home/ChatRoomPage',null, undefined, '/home/ChatRoomPage'),
    ]),
];

export default function Aside() {
    const location = useLocation();
    console.log(location.pathname);

    const onClick: MenuProps['onClick'] = e => {
        console.log('click ', e);
    };

    return (
        <Menu
            onClick={onClick}
            style={{ width: 255, height: "100%" }}
            selectedKeys={[location.pathname]}
            defaultSelectedKeys={['/home/userPage']}
            defaultOpenKeys={['sub1', 'sub2']}
            mode="inline"
            items={items}
        />
    );
}
