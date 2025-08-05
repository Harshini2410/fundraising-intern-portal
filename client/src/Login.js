import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const storedName = localStorage.getItem('internName');
    if (storedName) {
      navigate('/dashboard');
    }
  }, []);


    const handleLogin = () => {
      if (name.trim() === '') return;

      // Save to localStorage
      localStorage.setItem('internName', name);

      navigate('/dashboard');
    };


  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      // justifyContent: 'center',
      height: '100vh',
      padding: '20px',
      backgroundColor: '#e0d5e9',
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>Welcome to the Intern Portal</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: '10px',
          fontSize: '1rem',
          width: '250px',
          marginBottom: '20px',
          border: '1px solid #ccc',
          borderRadius: '8px'
        }}
      />
      <button
        onClick={handleLogin}
        style={{
          padding: '10px 20px',
          fontSize: '1rem',
          backgroundColor: '#6a4dad',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
