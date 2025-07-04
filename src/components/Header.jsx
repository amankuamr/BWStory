import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import '../styles/header.css';
import logo from '../../images/logo.png';
import SideMenu from './SideMenu';

const mockUser = {
  username: 'john_doe',
  userAvatar: 'https://randomuser.me/api/portraits/men/1.jpg',
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Only show SideMenu in mobile view
  const isMobile = window.innerWidth <= 768;

  const navigate = useNavigate();
  const handleMenuClick = (key) => {
    setMenuOpen(false);
    if (key === 'discovery') navigate('/home');
    else if (key === 'alert') navigate('/alert');
    else if (key === 'profile') navigate('/profile');
    // Add navigation logic for other keys if needed
  };

  const handleLogout = () => {
    setMenuOpen(false);
    // Add logout logic here if needed
  };

  return (
    <>
      {/* Hamburger/Cross icon absolutely positioned for mobile */}
      <div
        className={`hamburger-animated hamburger-icon fixed-hamburger${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        tabIndex={0}
        role="button"
      >
        <span />
        <span />
        <span />
      </div>
      <header className="app-header">
        <div className="header-left" />
        <div className="header-center">
          <img src={logo} alt="Company Logo" className="header-logo" />
        </div>
        <div className="header-right">
          <SearchOutlined className="header-icon" />
        </div>
      </header>
      {menuOpen && (
        <>
          <div className="side-menu-overlay" onClick={() => setMenuOpen(false)} />
          <div className="side-menu-drawer">
            <SideMenu user={mockUser} onLogout={handleLogout} onMenuClick={handleMenuClick} />
          </div>
        </>
      )}
    </>
  );
};

export default Header;
