import style from './Categories.module.scss'

function Categories() {
  return (
    <div>
      <ul className={style.categories}>
        <li className={style.active}>Все</li>
        <li className={style.category}>Категория</li>
        <li className={style.category}>Категория</li>
        <li className={style.category}>Категория</li>
        <li className={style.category}>Категория</li>
        <li className={style.category}>Категория</li>
      </ul>
    </div>
  )
}

export default Categories
