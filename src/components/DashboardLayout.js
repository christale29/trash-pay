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
            <Sider trigger={null} collapsible collapsed={collapsed}  style={{backgroundColor:'rgb(24, 75, 24)'}}>
              <div className="logo" />
              <Menu style={{backgroundColor:'rgb(24, 75, 24)'}} theme="green"  mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                 <Link to='/dash/register' >Register House </Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                <Link to='/dash/house' >Manage all Payment </Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                <Link to='/dash/login' >Login</Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout className="site-layout" style={{backgroundColor:'rgb(24, 75, 24)'}}>
              <Header className="site-layout-background" style={{ padding: 0 ,backgroundColor:'green'}}>
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