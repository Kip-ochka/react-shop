import appStyles from './App.module.scss'
import Header from '../Header/Header'
import Categories from '../Categories/Categories'
import Sort from '../Sort/Sort'
import Product from '../Product/Product'
import db from '../../assets/pizzasDB.json'
function App() {
  return (
    <div className={appStyles.wrapper}>
      <Header />
      <div className={appStyles.content}>
        <div className={appStyles.container}>
          <div className={appStyles.choiceSection}>
            <Categories />
            <Sort />
          </div>
          <h2 className={appStyles.pageTitle}>Все товары</h2>
          <div className={appStyles.products}>
            {db.pizzas.map((pizza, index)=> {
             return <Product key={index} title={pizza.title} price={pizza.price} imageUrl={pizza.imageUrl} sizes={pizza.sizes} types={pizza.types}/>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
