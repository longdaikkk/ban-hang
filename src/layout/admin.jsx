import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

export default function Admin() {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();

    const items = [
        getItem('Banner', '1', <PieChartOutlined />),
        getItem('Đơn hàng mới', '2', <DesktopOutlined />),
        getItem('Đơn hàng đã xử lý', '6', <DesktopOutlined />),
        getItem('Sản phẩm', 'sub1', <FileOutlined />, [
            getItem('Áo', '3'),
            getItem('Quần', '4'),
            getItem('Phụ kiện', '5'),
        ]),
    ];
    
    const onClick = (e) => {
        if (e.key === '3') {
            navigate('/admin/shirt');
        }else if(e.key === '2'){
            navigate('/admin/donHang');
        }else if(e.key === '6'){
            navigate('/admin/donHangDaXuLy');
        }else if(e.key === '4'){
            navigate('/admin/trousers');
        }else if(e.key === '5'){
            navigate('/admin/accessory');
        }
    }
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <span id='header'></span>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="logo" />
                <Menu onClick={onClick} theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                    }}
                />
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};