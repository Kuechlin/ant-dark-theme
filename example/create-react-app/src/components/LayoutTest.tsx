import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Sider } = Layout;

export default function LayoutTest({ children }: { children: any }) {
    return (
        <Layout>
            <Header>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '48px' }}
                >
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
            <Layout>
                <Sider width={200}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['2']}
                        defaultOpenKeys={['0']}
                        style={{ height: '100%' }}
                    >
                        <Menu.SubMenu title="SubMenu" key="0">
                            <Menu.Item key="1">nav 1</Menu.Item>
                            <Menu.Item key="2">nav 2</Menu.Item>
                        </Menu.SubMenu>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Sider>
                <Content style={{ padding: '0 20px' }}>
                    <Breadcrumb style={{ margin: '20px' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ width: '100%' }}>
                        {children}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}