import React, { useState, useEffect } from 'react'
import vd from './assets/video1.mp4'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Resume from './Pages/Resume/Resume'
import Portfolio from './Pages/Portfolio/Portfolio'
import Contact from './Pages/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  const[direct, setDirect] = useState(0)
  
  return (
    <div className="bg">
      <video className='vid-bg' src={vd} autoPlay muted loop ></video>
      <div className="container">
        <div className="container-1">
          <Navbar direct={direct} setDirect={setDirect}/>
          <div className='container-2'>
            {
              direct === 0 ? <Home setActive={setDirect}/> 
              :(direct === 1 ? <Resume/>
                :(direct === 2 ? <Portfolio/>
                  :(direct === 4 ? <Contact/>: null))
                )
            }
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App