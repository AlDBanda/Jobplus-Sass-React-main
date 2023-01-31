import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ApplicationPage from './pages/ApplicationPage';
import ApplyPage from './pages/ApplyPage';
import ListingsPage from './pages/ListingsPage';
import NotificationPage from './pages/NotificationPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import RegisterPage from './pages/RegisterPage';
import SavedJobPage from './pages/SavedJobPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/applications" element={<ApplicationPage />} />
      <Route path="/apply" element={<ApplyPage />} />
      <Route path="/listings" element={<ListingsPage />} />
      <Route path="/notifications" element={<NotificationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/saved-jobs" element={<SavedJobPage />} />
    </Routes>
  );
}

export default App;
