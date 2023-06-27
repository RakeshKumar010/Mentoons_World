import React from 'react'
import './App.css'
import Home from './components/Home'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Podcast from './components/Podcast'
import SpeakEasy from './components/speak easy/SpeakEasy'
import SignUp from './components/Get Start/SignUp'
import LogIn from './components/Get Start/LogIn'
const App = () => {
  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/podcast' element={<Podcast/>}/>
      <Route path='/speak-easy' element={<SpeakEasy/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<LogIn/>}/>
    </Routes>
    </BrowserRouter>
        
    </>
  )
}

export default App