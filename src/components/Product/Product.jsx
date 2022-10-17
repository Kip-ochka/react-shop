import React from 'react'
import style from './Product.module.scss'
import './product__button.scss'

function Product(props) {
  const [activeType, setActiveType] = React.useState(0)
  const [activeSize, setActiveSize] = React.useState(0)
  const typesName = ['тонкое', 'традиционное']
  return (
    <div className={style.productWrapper}>
      <div className={style.product}>
        <a href='/'>
          <img alt='товар' src={props.imageUrl} className={style.product__image} />
          <h4 className={style.product__title}>{props.title}</h4>
        </a>
        <div className={style.product__selector}>
          <ul>
            {props.types.map((typeId, index) => <li key={index} onClick={()=>setActiveType(typeId)} className={activeType === index ? style.active : ''}>{typesName[typeId]}</li>)}
          </ul>
          <ul>
            {props.sizes.map((size, index) => <li key={index} onClick={()=>setActiveSize(index)} className={activeSize === index ? style.active : ''}>{size} см.</li>)}
          </ul>
        </div>
        <div className={style.product__bottom}>
          <p className={style.product__price}>от {props.price}</p>
          <button className='button button--outline button--add'>
            <svg
              width='12'
              height='12'
              viewBox='0 0 12 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
                fill='white'
              />
            </svg>
            <span>Добавить</span>
            <i>99</i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product
