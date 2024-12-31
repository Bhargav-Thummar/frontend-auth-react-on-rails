import React, { useState, useEffect } from "react";
import { axiosDelete, axiosGet } from '../apiServices';
import { useNavigate } from 'react-router-dom';

interface UserAttribute {
  id: number;
  email: string;
  created_at: string;
}

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<UserAttribute[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axiosGet('users');
        const userAttributes: UserAttribute[] = response?.data?.data.map((item: { attributes: any; }) => item.attributes);
        setUsers(userAttributes);
      } catch (err) {
        console.log(err);
      }
    }
    fetchUsers();
  }, []); 

  const handleLogout = async() => {
    try {
      await axiosDelete('logout');
      localStorage.removeItem('authToken');
      navigate('/');
    
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100"> 
      <div style={{ textAlign: 'center' }}>
        <h2>Welcome to the Dashboard!</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;