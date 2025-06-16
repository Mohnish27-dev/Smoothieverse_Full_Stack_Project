import React from 'react'
import Dashboard from '../components/Dashboard'
const DashboardPage = () => {
  return (
    <>
    
    <Dashboard/>
    </>
    
  )
}

export default DashboardPage

export async function generateMetadata() {
  return {
    title: "Dashboard | Manage Your Smoothie Profile"
  };
}