import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

function Dashboard() {
  return (
    <div className=' w-screen bg-blue-50'>
      <div className="flex flex-row">
        <Sidebar/>
        <div className="flex flex-col w-full">
          <Navbar/>
          Dashboard</div>
      </div>
    </div>
  )
}

export default Dashboard