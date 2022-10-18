import React from 'react'
import style from './Sort.module.scss'
import arrow from '../../assets/img/Vector.svg'

function Sort() {
  const [isVisiblePopup, setIdVisiblePopup] = React.useState(false)
  const [selectedMenuItem, setSelectedMenuItem] = React.useState(0)
  const menuList = ['популярности','цене','алфавиту']
  const menuItemName = menuList[selectedMenuItem]
  const onClickMenuItem = (index) => {
    setSelectedMenuItem(index)
    setIdVisiblePopup(false)
  }
  return (
    <div className={style.wrapper}>
      <img alt='стрелочка' src={arrow} className={style.svg} />
      <p className={style.pText}>
        Сортировать по: <span onClick={() => setIdVisiblePopup(!isVisiblePopup)} className={style.spanText}> {menuItemName}</span>
      </p>
      <div className={style.popup}>
        {isVisiblePopup &&
          (<ul>
            {menuList.map((menuItem, index)=>(<li key={index} className={selectedMenuItem === index?style.active:''} onClick={()=>onClickMenuItem(index)}>{menuItem}</li>))}
          </ul>)
        }
      </div>
    </div>
  )
}

export default Sort
