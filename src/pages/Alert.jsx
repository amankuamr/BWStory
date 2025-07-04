import React, { useState } from 'react';
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import '../styles/pagebase.css';

const Alert = () => {
  const [activeSection, setActiveSection] = useState('notifications');

  return (
    <div className="home-root">
      <Header />
      <main className="home-main">
        <div className="page-base-container">
          <div style={{ display: 'flex', gap: 12, marginBottom: 18, width: '100%' }}>
            <button
              className={`page-base-btn${activeSection === 'notifications' ? ' active' : ''}`}
              style={{ flex: 1, background: activeSection === 'notifications' ? 'linear-gradient(90deg, #1677ff 0%, #69c0ff 100%)' : '#f5f8ff', color: activeSection === 'notifications' ? '#fff' : '#1677ff' }}
              onClick={() => setActiveSection('notifications')}
            >
              Notifications
            </button>
            <button
              className={`page-base-btn${activeSection === 'system' ? ' active' : ''}`}
              style={{ flex: 1, background: activeSection === 'system' ? 'linear-gradient(90deg, #1677ff 0%, #69c0ff 100%)' : '#f5f8ff', color: activeSection === 'system' ? '#fff' : '#1677ff' }}
              onClick={() => setActiveSection('system')}
            >
              System Alerts
            </button>
          </div>

          {activeSection === 'notifications' && (
            <div style={{ width: '100%' }}>
              <strong>Notifications</strong>
              <div style={{ marginTop: 8, color: '#444', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '14px 16px', gap: 14 }}>
                  <img src="https://randomuser.me/api/portraits/women/21.jpg" alt="Alice" style={{ width: 38, height: 38, borderRadius: '50%', objectFit: 'cover', border: '2px solid #e6f7ff' }} />
                  <div style={{ flex: 1 }}>
                    <span style={{ fontWeight: 600, color: '#1677ff' }}>Alice</span> posted a new photo: <span style={{ fontStyle: 'italic', color: '#222' }}>'Sunset at the lake!'</span>
                    <div style={{ fontSize: 12, color: '#888', marginTop: 2 }}>2 minutes ago</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '14px 16px', gap: 14 }}>
                  <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="Bob" style={{ width: 38, height: 38, borderRadius: '50%', objectFit: 'cover', border: '2px solid #e6f7ff' }} />
                  <div style={{ flex: 1 }}>
                    <span style={{ fontWeight: 600, color: '#1677ff' }}>Bob</span> shared a new story: <span style={{ fontStyle: 'italic', color: '#222' }}>'Morning run!'</span>
                    <div style={{ fontSize: 12, color: '#888', marginTop: 2 }}>10 minutes ago</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '14px 16px', gap: 14 }}>
                  <img src="https://randomuser.me/api/portraits/men/23.jpg" alt="Carol" style={{ width: 38, height: 38, borderRadius: '50%', objectFit: 'cover', border: '2px solid #e6f7ff' }} />
                  <div style={{ flex: 1 }}>
                    <span style={{ fontWeight: 600, color: '#1677ff' }}>You</span> have a new post message: <span style={{ fontStyle: 'italic', color: '#222' }}>'Your post was liked by Carol.'</span>
                    <div style={{ fontSize: 12, color: '#888', marginTop: 2 }}>15 minutes ago</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '14px 16px', gap: 14 }}>
                  <img src="https://randomuser.me/api/portraits/men/24.jpg" alt="David" style={{ width: 38, height: 38, borderRadius: '50%', objectFit: 'cover', border: '2px solid #e6f7ff' }} />
                  <div style={{ flex: 1 }}>
                    <span style={{ fontWeight: 600, color: '#1677ff' }}>David</span> commented on your post: <span style={{ fontStyle: 'italic', color: '#222' }}>'Great picture!'</span>
                    <div style={{ fontSize: 12, color: '#888', marginTop: 2 }}>20 minutes ago</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeSection === 'system' && (
            <div style={{ width: '100%' }}>
              <strong>System Alerts</strong>
              <div style={{ marginTop: 8, color: '#444', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', background: '#fffbe6', borderRadius: 12, boxShadow: '0 2px 8px rgba(255,193,7,0.08)', padding: '14px 16px', gap: 14 }}>
                  <span style={{ fontWeight: 600, color: '#faad14', fontSize: 20 }}>⚠️</span>
                  <div style={{ flex: 1 }}>
                    Scheduled maintenance tonight from 2:00 AM to 4:00 AM. Some features may be unavailable.
                    <div style={{ fontSize: 12, color: '#b8860b', marginTop: 2 }}>1 hour ago</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', background: '#e6fffb', borderRadius: 12, boxShadow: '0 2px 8px rgba(24,144,255,0.06)', padding: '14px 16px', gap: 14 }}>
                  <span style={{ fontWeight: 600, color: '#13c2c2', fontSize: 20 }}>ℹ️</span>
                  <div style={{ flex: 1 }}>
                    New version available! Please refresh your browser to get the latest updates.
                    <div style={{ fontSize: 12, color: '#08979c', marginTop: 2 }}>3 hours ago</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', background: '#fff1f0', borderRadius: 12, boxShadow: '0 2px 8px rgba(255,77,79,0.08)', padding: '14px 16px', gap: 14 }}>
                  <span style={{ fontWeight: 600, color: '#ff4d4f', fontSize: 20 }}>❗</span>
                  <div style={{ flex: 1 }}>
                    Connection lost. Trying to reconnect...
                    <div style={{ fontSize: 12, color: '#a8071a', marginTop: 2 }}>Just now</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <MenuBar />
    </div>
  );
};

export default Alert;
