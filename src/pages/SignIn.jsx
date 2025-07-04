import React from 'react';
import { Button, Form, Input, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/auth.css';

const { Title } = Typography;

const SignIn = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    // Simulate authentication
    navigate('/home');
  };

  return (
    <div className="auth-container">
      <Title level={2}>Sign In</Title>
      <Form
        name="signin"
        layout="vertical"
        onFinish={onFinish}
        className="auth-form"
      >
        <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Please input your email!' }]}> 
          <Input type="email" />
        </Form.Item>
        <Form.Item name="password" label="Password" rules={[{ required: true, message: 'Please input your password!' }]}> 
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>Sign In</Button>
        </Form.Item>
        <div className="auth-link">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </Form>
    </div>
  );
};

export default SignIn;
