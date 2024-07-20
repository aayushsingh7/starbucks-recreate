import React, { useEffect } from 'react'
import Home from './pages/Home'
import Footer from './layout/Footer'
import Cursor from './components/Cursor'
import Navbar from './layout/Navbar'
import Intro from './layout/Intro'


const App = () => {


  return (
    <div className="app" data-scroll-speed={-5} id='main_container'>
      <Cursor />
      <Intro />
      <Navbar />
      <div className="app_content">
        <Home />
      </div>
      <Footer />
    </div>
  )
}

export default App