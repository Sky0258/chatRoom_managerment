import { AppstoreOutlined, AreaChartOutlined, MailOutlined, SettingOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React from 'react';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuProps['items'] = [
    getItem('用户管理', 'sub1', <AreaChartOutlined style={{fontSize: 18}}/>, [
        getItem('用户权限管理', '1', null),
    ]),

    getItem('聊天室管理', 'sub2', <UsergroupAddOutlined style={{fontSize: 18}}/>, [
        getItem('聊天室权限', '2'),
    ]),
];

export default function aside() {
    const onClick: MenuProps['onClick'] = e => {
        console.log('click ', e);
    };

    return (
        <Menu
            onClick={onClick}
            style={{ width: 255, height: "100%" }}
            defaultSelectedKeys={['2']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={items}
        />
    );
}
