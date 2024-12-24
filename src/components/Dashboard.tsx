import React from 'react';

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Welcome to the Dashboard!</h2>
      <button onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;