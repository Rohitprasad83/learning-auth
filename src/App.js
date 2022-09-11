import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './style.css';
import { Login, Register } from './pages';
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
