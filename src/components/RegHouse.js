import React from "react";
import Homelayout from "../components/homelayout";
import { Input,Form, InputNumber, Button, Checkbox } from 'antd';
import { DownOutlined ,LockOutlined,UserOutlined} from '@ant-design/icons';
import "../components/homelayout.css"
// import Nav from "../components/nav"

const RegHouse=()=>{



    const onFinish=(values)=>{
        console.log(values)
        localStorage.setItem("userLogedIn",true)
      
    }
    return(
        <Homelayout>
    <div className="reg-a">
        
        <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
    <div className="House-inf">
    <h1>REGISTRATION OF THE HOUSE</h1>
      <Form.Item
        name="House Owner"
        label="House Owner"
        rules={[
          {
            required: true,
            message: 'Please input your House Owner!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>


      <Form.Item
        name="House Number"
        label="House Number"
        rules={[
          {
            required: true,
            message: 'Please input your house number!',
            whitespace:true,
          },
        ]}
      >
        <Input/>
      </Form.Item>




      <Form.Item
        name="House Address"
        label="House Address"
        rules={[
          {
            required: true,
            message: 'Please input your house Address!',
            whitespace:true,
          },
        ]}
      >
        
      </Form.Item>





<div className="house-ad">


      <Form.Item
        name="District"
        label="District"
        rules={[
          {
            required: true,
            message: 'Please input your district!',
            whitespace:true,
          },
        ]}
      >
        <Input/>
      </Form.Item>





      <Form.Item
        name="Sector"
        label="Sector"
        rules={[
          {
            required: true,
            message: 'Please input your Sector!',
            whitespace:true,
          },
        ]}
      >
        <Input/>
      </Form.Item>

      <div  className="buto">
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
      </div>
      </div>
      
      
      





        </div> 

         </Form>
    </div>
    </Homelayout>
        
       
    
       
       
    )
}
export default RegHouse;
