import React from 'react'
import style from './Categories.module.scss'

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const categories = ['Все', 'Категория 1', 'Категория 2', 'Категория 3', 'Категория 4', 'Категория 5']
  return (
    <ul className={style.categories}>
      {categories.map((category, index) => (
        <li key={index} onClick={() => setActiveIndex(index)}
            className={activeIndex === index ? style.active : style.category}>{category}</li>
      ))}
    </ul>
  )
}

export default Categories
