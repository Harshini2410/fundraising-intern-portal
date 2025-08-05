import React from 'react';
import { motion } from 'framer-motion';

const leaderboardData = [
  { name: 'Poornima Harshini', amount: 1200 },
  { name: 'Ravi Kumar', amount: 950 },
  { name: 'Anjali Mehta', amount: 700 },
  { name: 'Rohit Sharma', amount: 500 },
];

function Leaderboard() {
  return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          padding: 'clamp(20px, 5vw, 40px)',
          maxWidth: 'clamp(320px, 90vw, 900px)',
          margin: '60px auto',
          backgroundColor: '#ffffffee',
          borderRadius: '16px',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
          width: '80%',
        }}

      >

      <h1 style={{ fontSize: '2rem', marginBottom: '60px' }}>          Leaderboard</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead style={{ backgroundColor: '#f0f0f0' }}>
          <tr>
            <th style={{ padding: '10px' }}>Rank</th>
            <th style={{ padding: '10px' }}>Intern Name</th>
            <th style={{ padding: '10px' }}>Total Raised (₹)</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((entry, index) => (
            <tr key={index} style={{ textAlign: 'center' }}>
              <td style={{ padding: '10px' }}>{index + 1}</td>
              <td style={{ padding: '10px' }}>{entry.name}</td>
              <td style={{ padding: '10px' }}>{entry.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}

export default Leaderboard;
