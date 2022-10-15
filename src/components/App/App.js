import appStyles from './App.module.scss'
import Header from '../Header/Header'
import Categories from '../Categories/Categories'
import Sort from '../Sort/Sort'
import Product from '../Product/Product'

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
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
