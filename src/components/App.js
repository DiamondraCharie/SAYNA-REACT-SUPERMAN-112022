import React from 'react'
import NavBar from '../components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Game from '../pages/Game'
import Eshop from '../pages/Eshop'
import MonCompte from '../pages/MonCompte'
import Footer from '../components/Footer'

const App = () => {
  return (
    <>
      <BrowserRouter>
       <NavBar/>
       <Routes>
       <Route>
           <Route path='/' element={<Home/>} />
           <Route path='/game' element={<Game/>}/>
           <Route path='/eshop' element={<Eshop/>}/>
           <Route path='/moncompte' element={<MonCompte/>}/>
        </Route>   
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App