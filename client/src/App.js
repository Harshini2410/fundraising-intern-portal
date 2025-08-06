import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Leaderboard from './Leaderboard';
import { motion } from 'framer-motion';
import Login from './Login';

// Dashboard component
function Dashboard() {
  const [internData, setInternData] = useState(null);

  useEffect(() => {
    fetch('https://fundraising-intern-portal-t78v.onrender.com/api/data')
      .then((res) => res.json())
      .then((data) => {
        const nameFromStorage = localStorage.getItem('internName') || data.name;
        setInternData({
          ...data,
          name: nameFromStorage
        });
      })
      .catch((err) => console.error('Failed to fetch:', err));
  }, []);

  if (!internData) return <p>Loading...</p>;

  return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          padding: '30px',
          maxWidth: '800px',
          margin: '60px auto 40px auto', // top, right, bottom, left
          backgroundColor: '#ffffffee',
          borderRadius: '12px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
          width: '80%', // responsive width
        }}
      >

      <img
        src={`https://api.dicebear.com/7.x/initials/svg?seed=${internData.name}&backgroundColor=c0aede`}
        alt="Avatar"
        style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          marginBottom: '5px'
        }}
      />

      <h1 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}>Welcome, {internData.name}</h1>
      <p><strong>Referral Code:</strong> {internData.referralCode}</p>
      <p><strong>Total Raised:</strong> ₹{internData.totalRaised}</p>

      <h2 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)' }}>Rewards</h2>
      <ul>
        <li>₹500 - Certificate of Participation</li>
        <li>₹1000 - Badge on Leaderboard</li>
        <li>₹2000 - Special Mention</li>
      </ul>

      <button
        onClick={() => {
          localStorage.removeItem('internName');
          window.location.href = '/';
        }}
        style={{
          marginTop: '20px',
          backgroundColor: 'rgba(226, 11, 0, 1)',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          padding: '8px 16px',
          boxShadow: '0 6px 8px rgba(0,0,0,0.34)',
          cursor: 'pointer'
        }}
      >
        Logout
      </button>
    </motion.div>
  );
}

// App component
function App() {
  return (
    <Router>
        <nav
          style={{
            padding: '15px 30px',
            backgroundColor: '#ffffff',
            boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
            fontSize: '1.1rem',
            fontWeight: '600',
            display: 'flex',
            // justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
            borderBottom: '1px solid #eee'
          }}
        >

        <div>
          <Link
            to="/dashboard"
            style={{
              padding: '8px 16px',
              textDecoration: 'none',
              color: '#4d2e66ff',
              borderRadius: '6px',
              transition: 'background 0.3s'
            }}
          >
            Dashboard
          </Link>

          <Link
              to="/Leaderboard"
              style={{
                padding: '8px 16px',
                textDecoration: 'none',
                color: '#4d2e66ff',
                borderRadius: '6px',
                transition: 'background 0.3s',
              }}
            >
              LeaderBoard
          </Link>

        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  );
}

export default App;
