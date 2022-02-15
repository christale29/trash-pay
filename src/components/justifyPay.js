import React, { useState } from "react";
import Homelayout from "../components/homelayout";
import { Input, Form, InputNumber, Button, Checkbox, Space, Radio } from "antd";
import { DownOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import "../components/homelayout.css";
// import Nav from "../components/nav"

const PaymentDetail = () => {
  const [paymentMode, setPaymentMode] = useState("momo");

  const onFinish = (values) => {
    console.log(values);
    localStorage.setItem("userLogedIn", true);
  };
  return (
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
            <h1 style={{ textAlign: "center", color: "green" }}>
              Payment Detail
            </h1>
            <Form.Item
              name="Payer Name"
              label="Payer Name"
              rules={[
                {
                  required: true,
                  message: "Please input your Name!",
                  whitespace: true,
                },
              ]}
            >
              <Input style={{ borderRadius: "10px", marginLeft: "30px" }} />
            </Form.Item>

            <Form.Item
              name="House Number"
              label="House Number"
              rules={[
                {
                  required: true,
                  message: "Please input your house number!",
                  whitespace: true,
                },
              ]}
            >
              <Input style={{ borderRadius: "10px", marginLeft: "30px" }} />
            </Form.Item>
            <div className="Pay-ad">
              <Form.Item
                name="Amount"
                label="Amount"
                rules={[
                  {
                    required: true,
                    message: "Please input your amount!",
                    whitespace: true,
                  },
                ]}
              >
                <Input style={{ borderRadius: "10px", marginLeft: "30px" }} />
              </Form.Item>

              <Form.Item
                name="Month"
                label="Month"
                rules={[
                  {
                    required: true,
                    message: "Please input your Month!",
                    whitespace: true,
                  },
                ]}
              >
                <Input style={{ borderRadius: "10px", marginLeft: "30px" }} />
              </Form.Item>

              <Form.Item name="payment" label="Payment Mode">
                <Radio.Group defaultValue="momo">
                  <Radio value="momo" onClick={() => setPaymentMode("momo")}>
                    Momo
                  </Radio>
                  <Radio value="credit-card" onClick={() => setPaymentMode("credit-card")}>Credit Card</Radio>
                  {/* <Radio value="paypal">Paypal</Radio> */}
                </Radio.Group>
              </Form.Item>

              {paymentMode === "momo" ? (
                <Form.Item
                  name="momoPhone"
                  label="Mobile Number"
                  rules={[
                    {
                      required: true,
                      message: "Please input your amount!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input style={{ borderRadius: "10px", marginLeft: "30px" }} />
                </Form.Item>
              ) : (
                <Form.Item
                  name="credit-card"
                  label="Credit Card"
                  rules={[
                    {
                      required: true,
                      message: "Please input your amount!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input style={{ borderRadius: "10px", marginLeft: "30px" }} />
                </Form.Item>
              )}

              <div className="buto1">
                <Form.Item style={{ marginLeft: "25px" }}>
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
  );
};
export default PaymentDetail;
