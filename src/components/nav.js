import React, { useState } from "react";
import "./header.css";
import "antd/dist/antd.css";

// import { useNavigate } from "react-router";

import {useNavigate} from 'react-router-dom'

import { Input, notification, Space } from "antd";
import { Menu, Dropdown } from "antd";
import { Modal, Form, InputNumber, Button, Checkbox } from "antd";
import { DownOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import TrashApis from "../services/trashApi";



const { Search } = Input;

const onSearch = (value) => console.log(value);

const Nav = () => {
  const [visible, setVisible] = useState(false);
  const [signInvisible, setsignInVisible] = useState(false);
  // const navigate =useNavigate();
  const onFinish = (values) => {
    console.log("Received values of form", values);
    TrashApis.createAccount(values).then((res) => {
      if (!res) {
        return notification.error({ message: "server is down" });
      }
      if (!res) {
        return notification.success({
          message: "your account has been created",
        });
      } else {
        return notification.error({
          message: !res.data.error ? res.data.message : res.data.error,
        });
      }
    });
    TrashApis.signin(values).then((res) => {
      if (!res) {
        return notification.error({ message: "server is down" });
      }
      if (res.status === 200) {
        console.log(res.data.data);


import {Link} from "react-router-dom"

// import signin from "./sign"
import { useNavigate } from "react-router";

// import { useNavigate } from "react-router";
import {useNavigate} from 'react-router-dom'

import { Input, notification, Space } from "antd";
import { Menu, Dropdown } from "antd";
import { Modal, Form, InputNumber, Button, Checkbox } from "antd";
import { DownOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import TrashApis from "../services/trashApi";
// import './index.css';
// import { Form, Input, Button, Checkbox } from 'antd';
// import { UserOutlined, LockOutlined } from '@ant-design/icons';

const { Search } = Input;

const onSearch = (value) => console.log(value);

const Nav = () => {
  const [visible, setVisible] = useState(false);
  const [signInvisible, setsignInVisible] = useState(false);
  const navigate =useNavigate();
  const onFinish = (values) => {
    console.log("Received values of form", values);
    TrashApis.createAccount(values).then((res) => {
      if (!res) {
        return notification.error({ message: "server is down" });
      }
      if (!res) {
        return notification.success({
          message: "your account has been created",
        });
      } else {
        return notification.error({
          message: !res.data.error ? res.data.message : res.data.error,
        });
      }
    });
    TrashApis.signin(values).then((res) => {
      if (!res) {
        return notification.error({ message: "server is down" });
      }
      if (res.status === 200) {
        console.log(res.data.data);

    localStorage.setItem("userLogedIn", true);
    navigate("/dash/register");
        if (res.data.data.role === "admin") {
          localStorage.setItem("userLogedIn", true);
          navigate("/dash/register");
        } else if (res.data.data.role === "user") {
          localStorage.setItem("userLogedIn", true);
          navigate("/user/board");
        }
      } else {
        return notification.error({
          message: !res.data.error ? res.data.message : res.data.error,
        });
      }
    });

  };
  const onFinishSignIn = (values) => {
    console.log("Received values of form", values);
    TrashApis.signInUser(values).then((res) => {
      if (!res) {
        return notification.error({ message: "server is down" });
      }
      if (res.status===200) {
        console.log(res.data.data);
        if(res.data.data.status="admin"){
          localStorage.setItem("userLogedIn", true);
          navigate("/dash")
        }
        return notification.success({
          message: "your account has been created",
        });
      } else {
        return notification.error({
          message: !res.data.error ? res.data.message : res.data.error,
        });
      }
    });
    
  };
  

  const navigate = useNavigate();

  return (
    <>
      <Modal
      style={{textAlign:"center"}}
        visible={signInvisible}
        width="40%"
        onOk={() => setsignInVisible(false)}
        onCancel={() => setsignInVisible(false)}
      >
        <h1>TRASH PAY</h1>
        <h2>signin form</h2>
        <Form
        style={{paddingLeft:"50px"}}
          onFinish={onFinishSignIn}
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          // onFinish={onFinish}
        >
          <Form.Item
            name="phone number"
            rules={[
              {
                required: true,
                message: "Please input your Phone number!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Phone number"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
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
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
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
              <div
                style={{
                  display: "block",
                }}
              >
                <>
                  <Dropdown
                    overlay={
                      <Menu>
                        <Menu.Item key="0">
                        <a href="/JustifyPay">Register the house</a>
                        </Menu.Item>
                        <Menu.Item key="1">
                          <a href="/JustifyPay">Justify your payment</a>
                          </Menu.Item>
                        <Menu.Item key="1">
                          <a href="/QRcode">See your records</a>
                        </Menu.Item>
                      </Menu>
                    }
                    trigger={["hover"]}
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Payment Information
                      <DownOutlined />
                    </a>
                  </Dropdown>
                </>
              </div>
            </li>

            <li>
              <div
                style={{
                  display: "block",
                }}
              >
                {/* end of PaymentInformation */}

                <>
                  {/* signup */}
                  <Modal
                    visible={visible}
                    width="40%"
                    onCancel={() => setVisible(false)}
                  >
                    <h1>Sign_Up form</h1>
                    <Form onFinish={onFinish}>
                      <Form.Item
                        label="First name"
                        name="firstName"
                        rules={[{ required: true }]}
                      >
                        <Input type="firstname" />
                      </Form.Item>
                      <Form.Item
                        label="last name"
                        name="lastName"
                        rules={[{ required: true }]}
                      >
                        <Input type="lastname" />
                      </Form.Item>
                      <Form.Item
                        label="Phone number"
                        name="phone"
                        rules={[{ required: true }]}
                      >
                        <Input type="Phone number" />
                      </Form.Item>
                      <Form.Item
                        label="password"
                        name="password"
                        rules={[{ required: false }]}
                      >
                        <Input type="password" />
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
                    overlay={
                      <Menu>
                        <Menu.Item key="0">
                          <a onClick={() => setsignInVisible(true)}>signin</a>
                        </Menu.Item>
                        <Menu.Item key="1">
                          <a onClick={() => setVisible(true)}>Sign_Up</a>
                        </Menu.Item>
                      </Menu>
                    }
                    trigger={["hover"]}
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Account
                      <DownOutlined />
                    </a>
                  </Dropdown>
                </>
              </div>
            </li>
            <li>
              <Space>
                {" "}
                <Search
                  placeholder="input search text"
                  onSearch={onSearch}
                  style={{ width: 500 }}
                />
              </Space>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Nav;
