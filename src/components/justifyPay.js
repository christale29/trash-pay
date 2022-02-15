import React from "react";
import Homelayout from "../components/homelayout";
import { Input,Form, InputNumber, Button, Checkbox } from 'antd';
import { DownOutlined ,LockOutlined,UserOutlined} from '@ant-design/icons';
import "../components/homelayout.css"
// import Nav from "../components/nav"

const PaymentDetail=()=>{



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
    <div className="Pay-inf">
    <h1 style={{textAlign:'center',color:'green'}}>Payment Detail</h1>
      <Form.Item 
        name="Payer Name"
        label="Payer Name"
        rules={[
          {
            required: true,
            message: 'Please input your Name!',
            whitespace: true,
          },
        ]}
      >
        <Input style={{borderRadius:'10px',marginLeft:'30px'}}/>
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
        <Input style={{borderRadius:'10px',marginLeft:'30px'}}/>
      </Form.Item>
<div className="Pay-ad">


      <Form.Item 
        name="Amount"
        label="Amount"
        rules={[
          {
            required: true,
            message: 'Please input your amount!',
            whitespace:true,
          },
        ]}
      >
        <Input style={{borderRadius:'10px',marginLeft:'30px'}}/>
      </Form.Item>





      <Form.Item 
        name="Month"
        label="Month"
        rules={[
          {
            required: true,
            message: 'Please input your Month!',
            whitespace:true,
          },
        ]}
      >
        <Input style={{borderRadius:'10px',marginLeft:'30px'}}/>
      </Form.Item>

      <div  className="buto1" >
      <Form.Item>
        <Button type="primary" htmlType="submit">
         Credit
        </Button>
        <Button type="primary" htmlType="submit">
         Momo
        </Button>
      </Form.Item>

      <Form.Item style={{marginLeft:'25px'}}>
      <Button type="primary" htmlType="submit">
        Pay Now
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
export default PaymentDetail;
