import { useState } from 'react'
import Home from "./assets/components/Home"
import Nav from "./assets/components/Nav"
import Product from "./assets/components/Product"
import Profile from "./assets/components/Profile"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <Nav/>
   <Profile/>
   <Routes>
    <Route path='/' Component={Home}/>
    <Route path='/Product' Component={Product}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
