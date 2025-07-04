import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeOutlined, EnvironmentOutlined, PlusCircleOutlined, BellOutlined, UserOutlined } from '@ant-design/icons';
import '../styles/menubar.css';

const MenuBar = () => (
  <nav className="menu-bar">
    <NavLink to="/home" end className={({ isActive }) => 'menu-item' + (isActive ? ' active' : '')}>
      <HomeOutlined />
      <span className="menu-label">Discover</span>
    </NavLink>
    <NavLink to="/local" className={({ isActive }) => 'menu-item' + (isActive ? ' active' : '')}>
      <EnvironmentOutlined />
      <span className="menu-label">Local</span>
    </NavLink>
    <NavLink to="/add" className={({ isActive }) => 'menu-item' + (isActive ? ' active' : '')}>
      <PlusCircleOutlined />
      <span className="menu-label">Add</span>
    </NavLink>
    <NavLink to="/alert" className={({ isActive }) => 'menu-item' + (isActive ? ' active' : '')}>
      <BellOutlined />
      <span className="menu-label">Alert</span>
    </NavLink>
    <NavLink to="/profile" className={({ isActive }) => 'menu-item' + (isActive ? ' active' : '')}>
      <UserOutlined />
      <span className="menu-label">Profile</span>
    </NavLink>
  </nav>
);

export default MenuBar;
