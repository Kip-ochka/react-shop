import style from './NodFound.module.scss'
import React from 'react'

const NotFoundComponent = () => {
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}><span>😕</span><br/>Ничего не найдено</h1>
      <p className={style.description}>К сожалению данная страница отсутсвует в нашем интренет-магазине.</p>
    </div>
  )
}

export default NotFoundComponent