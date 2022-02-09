import React ,{useState} from "react";
import "./header.css";
import 'antd/dist/antd.css';
// import signin from "./sign"
// import { useNavigate } from "react-router";
import { Input,Space } from 'antd';
import { Menu, Dropdown } from 'antd';
import { Modal,Form, InputNumber, Button, Checkbox } from 'antd';
import { DownOutlined ,LockOutlined,UserOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
// import './index.css';
// import { Form, Input, Button, Checkbox } from 'antd';
// import { UserOutlined, LockOutlined } from '@ant-design/icons';





  

const { Search } = Input;

const onSearch = value => console.log(value);



const Nav=()=>{

  const [visible,setVisible]=useState(false);
  const [signInvisible,setsignInVisible]=useState(false);

  const onFinish=(values)=>{
      console.log(values)
      localStorage.setItem("userLogedIn",true)
    
  }
    
    return(
      
<>
      <Modal

      visible={signInvisible}
        width="40%"
        onCancel={()=>setsignInVisible(false)}>
            <h1>TRASH PAY</h1>
            <h2>signin form</h2>
            <Form onFinish={onFinish}
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="phone number"
        rules={[
          {
            required: true,
            message: 'Please input your Phone number!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Phone number" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">Create Account!</a>
      </Form.Item>
    </Form>
    </Modal>

   

      {/* //PaymentInformation */}
        <div className="main-nav">
            <div className="navbar-link">
                <ul>
                  
                    <li>
                    <div style={{
      display: 'block'
    }}>
     
      <>
        <Dropdown
          overlay={(
            <Menu>
              <Menu.Item key="0">
               <a href="/RegHouse">Register the house</a> 
              </Menu.Item>
              <Menu.Item key="1">
              Justify your payment
              </Menu.Item>
              <Menu.Item key="1">
              <a href="/QRcode">See your records</a>
              </Menu.Item>
            </Menu>
          )}
          trigger={['hover']}>
          <a className="ant-dropdown-link" 
             onClick={e => e.preventDefault()}>
            Payment Information<DownOutlined />
          </a>

         
        </Dropdown>
      </>
    </div>
                    </li>
                  
                    <li>

                    <div style={{
      display: 'block'
    }}>

      {/* end of PaymentInformation */}
     
      <>
      {/* signup */}
      <Modal 
        visible={visible}
        width="40%"
        onCancel={()=>setVisible(false)}>
            <h1>Sign_Up form</h1>
            <Form onFinish={onFinish}>
                <Form.Item 
                label="First name"
                name="first name"
                rules={[{required:true}]}>
                    <Input type="firstname"/>
                
                </Form.Item>
                <Form.Item 
                label="last name"
                name="last name"
                rules={[{required:true}]}>
                    <Input type="lastname"/>
                
                </Form.Item>
                <Form.Item 
                label="Phone number"
                name="Phone number"
                rules={[{required:true}]}>
                    <Input type="Phone number"/>
                
                </Form.Item>
                <Form.Item 
                label="password"
                name="password"
                rules={[{required:false}]}>
                    <Input type="password"/>
                </Form.Item>
                <Form.Item>
                <Button type="primary" htmlType="submit">
               Sign_Up
                </Button>
                </Form.Item>
                
                
            </Form>

        </Modal>
        {/* end sign up */}
        <Dropdown
          overlay={(
            <Menu>
              <Menu.Item key="0">
              <a onClick={()=>setsignInVisible(true)}>signin</a>

              </Menu.Item>
              <Menu.Item key="1">
              <a onClick={()=>setVisible(true)}>Sign_Up</a>
              </Menu.Item>
              
            </Menu>
          )}
          trigger={['hover']}>
          <a className="ant-dropdown-link" 
             onClick={e => e.preventDefault()}>
            Account<DownOutlined />
          </a>

         
        </Dropdown>
      </>
    </div>   
                    </li>
                    <li> 
                        <Space> <Search placeholder="input search text" onSearch={onSearch} style={{ width: 500 }} /></Space>
                       
                    </li>

                </ul>
                </div>
            

        </div>
        </>
    )
}
export default Nav;