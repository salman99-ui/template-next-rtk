'use client';

import React from 'react';
import {
  Button,
  Card,
  Checkbox,
  Col,
  Divider,
  Form,
  Input,
  Row,
  Space,
  Typography
} from 'antd';
import { FacebookFilled, GoogleOutlined, LinkedinFilled } from '@ant-design/icons';
import Link from 'next/link';

const { Title, Text } = Typography;

const Login = () => (
  <Row align="middle" className="min-h-screen p-5">
    <Col
      xs={{ span: 24, offset: 0 }}
      md={{ span: 16, offset: 4 }}
      xl={{ span: 10, offset: 7 }}
      xxl={{ span: 6, offset: 9 }}
    >
      <Card>
        <Title level={2}>Login</Title>
        <Form
          name="login"
          initialValues={{
            remember: true
          }}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="E-mail"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!'
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!'
              }
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="mb-2" block>
              Login
            </Button>
            <Row justify="end">
              <Link href="/forgotPassword">
                <Text type="secondary"> Forgot Password?</Text>
              </Link>
            </Row>
          </Form.Item>

          <Divider> OR </Divider>

          <Row justify="center" className="mb-4">
            <Space wrap>
              <Button icon={<GoogleOutlined />} shape="circle" />
              <Button icon={<FacebookFilled />} shape="circle" />
              <Button icon={<LinkedinFilled />} shape="circle" />
            </Space>
          </Row>

          <Row justify="center">
            <Text type="secondary">
              Need an account? <Link href="/register"> REGISTER </Link>
            </Text>
          </Row>
        </Form>
      </Card>
    </Col>
  </Row>
);

export default Login;
