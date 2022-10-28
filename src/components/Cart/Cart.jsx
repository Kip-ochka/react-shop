import React from 'react'
import styles from './Cart.module.scss'
import cartSvg from '../../assets/img/emptycart.svg'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import { ReactComponent as Trash } from '../../assets/img/trashIcon.svg'
import { ReactComponent as CartIcon } from '../../assets/img/cart.svg'
import { ReactComponent as BackIcon } from '../../assets/img/back.svg'

const Cart = () => {
  return (
    <>
      <div className={styles.cartTop}>
        <div className={styles.titleWrapper}>
          <CartIcon />
          <h2>Корзина</h2>
        </div>
        <div className={styles.trash}>
          <Trash />
          <span>Очистить корзину</span>
        </div>
      </div>
      <ul>
        <li><CartItem /></li>
      </ul>
      <div className={styles.cartBottom}>
        <div className={styles.valueWrapper}>
          <span>Всего пицц: <b>5 шт.</b></span>
          <span>Сумма заказа: <b className={styles.price}>1000 &#8381;</b> </span>
        </div>
        <div className={styles.buttonsWrapper}>
          <div className={styles.buttonWrapper}>
            <Link to='/'>
              <BackIcon />
              <span>Вернуться назад</span>
            </Link>
          </div>
          <div className={styles.payButton}><span>Оплатить сейчас</span></div>
        </div>
      </div>
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
