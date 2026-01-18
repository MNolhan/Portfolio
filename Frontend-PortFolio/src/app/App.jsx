import { useState } from 'react'

import HeaderNav from '../components/layout/header.jsx';
import HomeScreen from '../pages/home.jsx';

function App() {

  return (
    <>
      <div className="h-screen flex flex-col bg-[#151515] text-white">
        <HeaderNav />
        <HomeScreen />
      </div>
    </>
  )
}

export default App
