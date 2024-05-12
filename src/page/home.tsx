import { Layout } from 'antd';
import React from 'react';
import './css/index.css'
import HeaderContain from '../component/header';
import AsideContain from '../component/aside';
import { Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import UserPage from '../component/userPage';

const { Header, Footer, Sider, Content } = Layout;

function home() {
    return (
        <Layout className='contain'>
            <Header className='home_header'>
                <HeaderContain />
            </Header>
            <Layout>
                <Sider className='home_aside' width="255">
                    <AsideContain />
                </Sider>
                <Content className='home_content'>
                    <Outlet></Outlet>
                </Content>
            </Layout>
        </Layout>
    )
}
export default home;