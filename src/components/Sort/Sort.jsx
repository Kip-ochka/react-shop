import style from './Sort.module.scss'
import arrow from '../../vendor/Vector.svg'
function Sort() {
  return (
    <div className={style.wrapper}>
      <img alt="стрелочка" src={arrow} className={style.svg} />
      <p className={style.pText}>
        Сортировать по: <span className={style.spanText}> чему-то</span>
      </p>
      <div className={style.popup}>
        <ul>
          <li>По популярности</li>
          <li>По алфавиту</li>
          <li>По цене</li>
        </ul>
      </div>
    </div>
  )
}

export default Sort
