import React from 'react'
import styles from './Cart.module.scss'
import cartSvg from '../../assets/img/emptycart.svg'
import remove from '../../assets/img/icons8-trash-can.svg'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'

const Cart = () => {
  return (
    <>
      <div className={styles.cartTop}>
          <h2>Корзина</h2>
        <div className={styles.trash}>
          <span>Очистить корзину</span>
        </div>
      </div>
      <ul>
        <li><CartItem/></li>
      </ul>
      <div className={styles.wrapper}>
        <h1>Корзина пустая</h1>
        <p>Вероятней всего, вы не заказывали ещё пиццу.
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <img src={cartSvg} alt='Пустая корзина' />
        <Link to='/'>
          <button className={styles.button}>Вернуться на главную</button>
        </Link>
      </div>
    </>


  )
}

export default Cart