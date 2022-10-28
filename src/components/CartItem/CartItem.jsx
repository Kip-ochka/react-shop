import React from 'react'
import style from './CartItem.module.scss'
import { ReactComponent as Minus } from '../../assets/img/minus.svg'
import { ReactComponent as Plus } from '../../assets/img/plus.svg'

const CartItem = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.label}>
        <img
          src='https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d2e337e9-e07a-4199-9cc1-501cc44cb8f8.jpg' alt='Товар'/>
        <div className={style.typography}>
          <h3>Товар</h3>
          <p>описание, товара</p>
        </div>
      </div>
      <div className={style.valueWrapper}>
        <div className={style.minus}>
          <Minus />
        </div>
        <b>100</b>
        <div className={style.plus}>
          <Plus />
        </div>
      </div>
      <b>1200<span>&#8381;</span></b>
      <div className={style.delete}>
        <Plus />
      </div>
    </div>
  )
}

export default CartItem