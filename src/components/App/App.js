import React from 'react'
import appStyles from './App.module.scss'
import Header from '../Header/Header'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'
import CartPage from '../pages/CartPage'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className={appStyles.wrapper}>
      <Header />
      <div className={appStyles.container}>
        <div className={appStyles.content}>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/cart' element={<CartPage/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
