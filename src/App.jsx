import './App.css'
import Home from './Components/Home'
import { Routes, Route } from 'react-router-dom'
import ProductDetail from './Components/ProductDetail'
import Create from './Components/Create'

import Editproduct from './Components/Editproduct'


function App() {
 

  return (
    
    <div className='w-screen h-screen bg-zinc-300 flex overflow-x-hidden relative'>
     
       
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/editproduct' element={<Editproduct />} />
        <Route path='/ProductDetail/:id' element={<ProductDetail />} />
      </Routes>
      
     
    </div>
  )
}

export default App
