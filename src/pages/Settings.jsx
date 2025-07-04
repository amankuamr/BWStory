import React, { useState } from 'react';
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import '../styles/pagebase.css';

const options = [
  {
    key: 'profile',
    label: 'Edit Profile',
    icon: '👤',
    description: 'Update your personal information and avatar.'
  },
  {
    key: 'notifications',
    label: 'Notifications',
    icon: '🔔',
    description: 'Manage notification preferences.'
  },
  {
    key: 'privacy',
    label: 'Privacy',
    icon: '🔒',
    description: 'Control who can see your posts and info.'
  },
  {
    key: 'theme',
    label: 'Theme',
    icon: '🎨',
    description: 'Switch between light and dark mode.'
  },
  {
    key: 'logout',
    label: 'Log Out',
    icon: '🚪',
    description: 'Sign out of your account.'
  }
];

const Settings = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="home-root">
      <Header />
      <main className="home-main" style={{ background: '#f5f8ff', minHeight: '100vh' }}>
        <div style={{ maxWidth: 420, margin: '8px auto', background: '#fff', borderRadius: 18, boxShadow: '0 4px 24px rgba(22,119,255,0.08)', padding: '32px 28px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {options.map(opt => (
              <div
                key={opt.key}
                onClick={() => setSelected(opt.key)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 18,
                  background: selected === opt.key ? 'linear-gradient(90deg, #e6f7ff 0%, #bae7ff 100%)' : '#f5f8ff',
                  borderRadius: 12,
                  padding: '18px 16px',
                  boxShadow: selected === opt.key ? '0 2px 12px rgba(22,119,255,0.10)' : 'none',
                  cursor: 'pointer',
                  border: selected === opt.key ? '2px solid #1677ff' : '2px solid transparent',
                  transition: 'all 0.2s',
                }}
              >
                <span style={{ fontSize: 28 }}>{opt.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, color: '#222', fontSize: 17 }}>{opt.label}</div>
                  <div style={{ color: '#888', fontSize: 13, marginTop: 2 }}>{opt.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <MenuBar />
    </div>
  );
};

export default Settings;
