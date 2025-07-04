import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Local from './pages/Local';
import Add from './pages/Add';
import Alert from './pages/Alert';
import Profile from './pages/Profile';
import MenuBar from './components/MenuBar';
import Settings from './pages/Settings';

const App = () => {
  // Show MenuBar only on main app pages
  // For HashRouter, use window.location.hash
  const hash = window.location.hash.replace('#', '');
  const showMenuBar = hash.startsWith('/home') ||
    hash.startsWith('/local') ||
    hash.startsWith('/add') ||
    hash.startsWith('/alert') ||
    hash.startsWith('/profile') ||
    hash === '/';

  return (
    <div className="frame">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/local" element={<Local />} />
        <Route path="/add" element={<Add />} />
        <Route path="/alert" element={<Alert />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      {showMenuBar && <MenuBar />}
    </div>
  );
};

export default App;
