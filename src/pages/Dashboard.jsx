import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Productivity from './Productivity';
import Home from './Home';

function Dashboard() {
  return (
    <div className='w-screen bg-blue-50 h-screen overflow-hidden'>
      <div className="flex flex-row">
        <Sidebar/>
        <div className="flex flex-col w-full">
          <Navbar/>
          <Productivity/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
