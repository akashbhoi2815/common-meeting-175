import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import MenPage from '../pages/men/MenPage'
import Signup from '../pages/Signup'
import Singlepage from '../pages/Singlepage'
import Bag from '../pages/Bag'
import Home from './Home'
import Adress from '../pages/Adress'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/menpage' element={<MenPage/>}></Route>
        <Route path='/singlepage' element={<Singlepage/>}></Route>
        <Route path="/bag" element={<Bag/>}></Route>
        <Route path="/adress" element={<Adress/>}></Route>
      </Routes>
    </div>
  )
}
export default AllRoutes