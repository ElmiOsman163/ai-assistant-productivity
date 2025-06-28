import React, { useState } from 'react';
import { auth, provider } from './firebase';
import { signInWithPopup, signOut } from 'firebase/auth';

function App() {
  const [user, setUser] = useState(null);

  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => setUser(result.user))
      .catch((error) => console.error('Login failed:', error));
  };

  const logout = () => {
    signOut(auth)
      .then(() => setUser(null))
      .catch((error) => console.error('Logout failed:', error));
  };

  return (
    <div style={{ padding: 40, fontFamily: 'Arial' }}>
      <h1>AI Productivity Assistant</h1>

      {!user ? (
        <button onClick={login} style={{ fontSize: 16, padding: '10px 20px' }}>
          Sign in with Google
        </button>
      ) : (
        <div>
          <p>Welcome, <strong>{user.displayName}</strong></p>
          <img src={user.photoURL} alt="profile" style={{ width: 50, borderRadius: '50%' }} />
          <br /><br />
          <button onClick={logout} style={{ fontSize: 16, padding: '10px 20px' }}>
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
