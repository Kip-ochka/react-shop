import React from 'react'
import appStyles from './App.module.scss'
import Header from '../Header/Header'
import Categories from '../Categories/Categories'
import Sort from '../Sort/Sort'
import Product from '../Product/Product'

function App() {
  const [products, setProducts] = React.useState([])
  React.useEffect(() => {
    fetch('https://634e880ff34e1ed8268ed360.mockapi.io/products').then(res => res.json()).then(res=>setProducts(res)).catch(err=>console.log(err))
  }, [])
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
            {products.map((pizza) => {
              return <Product key={pizza.id} title={pizza.title} price={pizza.price} imageUrl={pizza.imageUrl}
                              sizes={pizza.sizes} types={pizza.types} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
