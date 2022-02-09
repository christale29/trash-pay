// import React, { useState } from "react";
// import { useNavigate } from "react-router";
// import 'antd/dist/antd.css';
// import { Space } from 'antd';
// import { Menu, Dropdown } from 'antd';
// import { Form, Input, Button, Checkbox } from 'antd';
// import { DownOutlined , UserOutlined, LockOutlined  } from '@ant-design/icons';
// // import { values } from "core-js/core/array";


// const signin=()=>{
//     const navigate=useNavigate();
//     const [buttonPopup, setButtonPopup]=useState(true);

//     console.log('received values of form:',values)

// return (
//     <Form
//       name="normal_login"
//       className="login-form"
//       initialValues={{
//         remember: true,
//       }}
//       onFinish={onFinish}
//     >
//       <Form.Item
//         name="username"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your Username!',
//           },
//         ]}
//       >
//         <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
//       </Form.Item>
//       <Form.Item
//         name="password"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your Password!',
//           },
//         ]}
//       >
//         <Input
//           prefix={<LockOutlined className="site-form-item-icon" />}
//           type="password"
//           placeholder="Password"
//         />
//       </Form.Item>
//       <Form.Item>
//         <Form.Item name="remember" valuePropName="checked" noStyle>
//           <Checkbox>Remember me</Checkbox>
//         </Form.Item>

//         <a className="login-form-forgot" href="">
//           Forgot password
//         </a>
//       </Form.Item>

//       <Form.Item>
//         <Button type="primary" htmlType="submit" className="login-form-button"onClick={()=> setButtonPopup(true)}>
//           Log in
//         </Button>
//         Or <a href="">register now!</a>
//       </Form.Item>
//     </Form>
//   );
// }

//   export default signin;