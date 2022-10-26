import React from 'react'
import appStyles from './App.module.scss'
import Header from '../Header/Header'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Cart from '../pages/Cart'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className={appStyles.wrapper}>
      <Header />
      <div className={appStyles.container}>
        <div className={appStyles.content}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
