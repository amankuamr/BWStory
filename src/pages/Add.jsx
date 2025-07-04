import React from 'react';
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import { FolderOpenOutlined, CameraOutlined } from '@ant-design/icons';
import '../styles/pagebase.css';

const Add = () => (
  <div className="home-root">
    <Header />
    <main className="home-main">
      <h1 className="page-base-heading">Add</h1>
      <div className="page-base-section">
        Use this page to add new content or posts.<br />
        Start sharing your thoughts with the community!
      </div>
      <div style={{ display: 'flex', gap: 16, marginTop: 24 }}>
        <button className="page-base-btn" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          <FolderOpenOutlined /> Select
        </button>
        <button className="page-base-btn" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          <CameraOutlined /> Capture
        </button>
      </div>
    </main>
    <MenuBar />
  </div>
);

export default Add;
