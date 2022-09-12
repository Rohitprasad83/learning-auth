import React, { useState, useEffect } from 'react';
import FirebaseAuthService from '../FirebaseAuthService';
import { useAuth } from '../context/authContext';

function Home() {
  const { user, setUser } = useAuth();
  FirebaseAuthService.subscribeToAuthChanges(setUser);
  return (
    <div className="container">
      <h2>You have Successfully logged In</h2>
      <button
        className="button"
        onClick={() => FirebaseAuthService.logoutUser()}
      >
        Logout
      </button>
    </div>
  );
}

export { Home };
