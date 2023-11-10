import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Game from '../pages/Game';
import Eshop from '../pages/Eshop';
import MonCompte from '../pages/MonCompte';
import Layout from '../pages/Layout';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Cart from  '../pages/Cart';
import Confirmation from '../pages/Confirmation';

const App = () => {
  return (
    <>
      <BrowserRouter>
       <Routes>
       <Route path='/' element={<Layout/>} > 
           <Route path='index' element={<Home/>} />
           <Route path='home' element={<Home/>} />
           <Route path='game' element={<Game/>}/>
           <Route path='eshop' element={<Eshop/>}/>
           <Route path='compte' element={<MonCompte/>}/>
           <Route path='signup' element={<Signup/>}/>
           <Route path='login' element={<Login/>}/>
           <Route path='cart' element={<Cart/>}/>
           <Route path='cart' element={<Confirmation/>}/>
        </Route>   
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App