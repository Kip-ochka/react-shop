import React from 'react'
import appStyles from './App.module.scss'
import Header from '../Header/Header'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Cart from '../pages/Cart'

function App() {

  return (
    <div className={appStyles.wrapper}>
      <Header />
      <div className={appStyles.container}>
        <div className={appStyles.content}>
          <Home />
          <NotFound />
          <Cart />
        </div>
      </div>
    </div>
  )
}

export default App
