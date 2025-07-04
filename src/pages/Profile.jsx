import React from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Button, Avatar } from 'antd';
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import '../styles/pagebase.css';
import '../styles/postcard.css';

// Example user data
const user = {
  name: 'Alex Lee',
  avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
  location: 'San Francisco, CA',
  profession: 'Product Designer',
  about: 'Passionate about design, photography, and travel. Always seeking new adventures and creative challenges.',
  feed: 24,
  followers: 1200,
  following: 180,
  blocked: 2,
};

const Profile = () => (
  <div className="home-root profile-page">
    <Header />
    <main className="home-main">
      <div className="page-base-container">
        {/* Profile Top Section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, width: '100%', marginBottom: 18 }}>
          <Avatar src={user.avatar} size={80} style={{ boxShadow: '0 2px 12px rgba(22,119,255,0.10)' }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 24, fontWeight: 700, color: '#23272f', marginBottom: 2 }}>{user.name}</div>
            <div style={{ color: '#1677ff', fontWeight: 500, fontSize: 15, marginBottom: 2 }}>{user.location}</div>
            <div style={{ color: '#8a94a6', fontWeight: 500, fontSize: 15 }}>{user.profession}</div>
          </div>
          <Button icon={<EditOutlined />} className="page-base-btn" style={{ padding: '8px 16px', height: 40 }}>Edit</Button>
        </div>

        {/* Counters */}
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: 18 }}>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ fontWeight: 700, fontSize: 18, color: '#1677ff' }}>{user.feed}</div>
            <div style={{ color: '#8a94a6', fontSize: 13 }}>Feed</div>
          </div>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ fontWeight: 700, fontSize: 18, color: '#1677ff' }}>{user.followers}</div>
            <div style={{ color: '#8a94a6', fontSize: 13 }}>Followers</div>
          </div>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ fontWeight: 700, fontSize: 18, color: '#1677ff' }}>{user.following}</div>
            <div style={{ color: '#8a94a6', fontSize: 13 }}>Following</div>
          </div>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ fontWeight: 700, fontSize: 18, color: '#1677ff' }}>{user.blocked}</div>
            <div style={{ color: '#8a94a6', fontSize: 13 }}>Blocked</div>
          </div>
        </div>

        {/* About Me */}
        <div style={{ width: '100%', marginBottom: 18 }}>
          <div style={{ fontWeight: 600, color: '#23272f', marginBottom: 6 }}>About Me</div>
          <div style={{ color: '#444', fontSize: 15 }}>{user.about}</div>
        </div>

        {/* Drafts and History Buttons */}
        <div style={{ display: 'flex', gap: 16, width: '100%', marginBottom: 18 }}>
          <Button className="page-base-btn" style={{ flex: 1 }}>Drafts</Button>
          <Button className="page-base-btn" style={{ flex: 1, background: 'linear-gradient(90deg, #40a9ff 0%, #1677ff 100%)' }}>History</Button>
        </div>
      </div>
    </main>
    <MenuBar />
  </div>
);

export default Profile;
