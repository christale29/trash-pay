import React ,{useState}from 'react' ;
import './dashstyle.css';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

//import './index.css';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const DashboardLayout=({children})=>{
    
        const [collapsed,setCollapsed]=useState(false);
        const toggle=()=>{
            setCollapsed(!collapsed);
        }
        return(
            <Layout  >
            <Sider trigger={null} collapsible collapsed={collapsed}  >
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                 <Link to='/dash/register' >Register House </Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                <Link to='/dash/house' >Manage all Payment </Link>
                </Menu.Item>

                <Menu.Item key="3" icon={<UploadOutlined />}
                onClick={() => localStorage.removeItem("userLogedIn")}>
                <Link to='/dash/login' >Login</Link>

                <Menu.Item key="3" icon={<UploadOutlined />}>
                <Link to='/' >Logout</Link>

                </Menu.Item>
              </Menu>
            </Sider>
            <Layout className="site-layout" >
              <Header className="site-layout-background" style={{ padding: 0 }}>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  onClick: toggle,
                })}
              </Header>
              <Content
                className="site-layout-background"
                style={{
                  margin: '24px 16px',
                  padding: 24,
                  minHeight: 280,
                  
                }}
              >
                {children}
              </Content>
            </Layout>
          </Layout>

    )
}
export default DashboardLayout;