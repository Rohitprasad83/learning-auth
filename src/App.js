import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './style.css';
import { Home, Login, Register } from './pages';
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
