import React from 'react';
import { Avatar, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
  HomeOutlined,
  BellOutlined,
  UserOutlined,
  TeamOutlined,
  InfoCircleOutlined,
  CustomerServiceOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  PoweroffOutlined,
} from '@ant-design/icons';
import './sidemenu.css';

const menuOptions = [
  { key: 'discovery', icon: <HomeOutlined />, label: 'Discovery' },
  { key: 'alert', icon: <BellOutlined />, label: 'Alert' },
  { key: 'profile', icon: <UserOutlined />, label: 'Profile' },
  { key: 'invite', icon: <TeamOutlined />, label: 'Invite Friends' },
  { key: 'about', icon: <InfoCircleOutlined />, label: 'About Us' },
  { key: 'support', icon: <CustomerServiceOutlined />, label: 'Support' },
  { key: 'faq', icon: <QuestionCircleOutlined />, label: 'FAQ' },
  { key: 'settings', icon: <SettingOutlined />, label: 'Settings' },
];

const SideMenu = ({ user, onLogout, onMenuClick }) => {
  const navigate = useNavigate();
  return (
    <div className="side-menu-root">
      <div className="side-menu-user">
        <Avatar src={user.userAvatar} size={64} />
        <div className="side-menu-username">{user.username}</div>
        <Button
          type="primary"
          size="small"
          className="side-menu-profile-btn"
          icon={<UserOutlined />}
          onClick={() => onMenuClick('profile')}
        >
          View Profile
        </Button>
      </div>
      <div className="side-menu-list">
        {menuOptions.map(opt => (
          <Button
            key={opt.key}
            type="text"
            icon={opt.icon}
            className="side-menu-item"
            onClick={() => {
              if (opt.key === 'settings') {
                navigate('/settings');
              } else {
                onMenuClick(opt.key);
              }
            }}
          >
            {opt.label}
          </Button>
        ))}
      </div>
      <Button
        type="primary"
        icon={<PoweroffOutlined style={{ fontSize: 22 }} />}
        block
        className="side-menu-logout modern-logout-btn"
        onClick={onLogout}
      >
        <span className="logout-text">Logout</span>
      </Button>
    </div>
  );
};

export default SideMenu;
