import React from 'react';
import { Button, Form, Input, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/auth.css';

const { Title } = Typography;

const SignUp = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    // Simulate registration
    navigate('/home');
  };

  return (
    <div className="auth-container">
      <Title level={2}>Sign Up</Title>
      <Form
        name="signup"
        layout="vertical"
        onFinish={onFinish}
        className="auth-form"
      >
        <Form.Item name="username" label="Username" rules={[{ required: true, message: 'Please input your username!' }]}> 
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Please input your email!' }]}> 
          <Input type="email" />
        </Form.Item>
        <Form.Item name="password" label="Password" rules={[{ required: true, message: 'Please input your password!' }]}> 
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>Sign Up</Button>
        </Form.Item>
        <div className="auth-link">
          Already have an account? <Link to="/signin">Sign In</Link>
        </div>
      </Form>
    </div>
  );
};

export default SignUp;
