import React from 'react'
import style from './Home.module.scss'
import Categories from '../Categories/Categories'
import Sort from '../Sort/Sort'
import Skeleton from '../Product/SkeletonProduct'
import Product from '../Product/Product'

const Home = () => {
  const [products, setProducts] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  React.useEffect(() => {
    fetch('https://634e880ff34e1ed8268ed360.mockapi.io/products')
      .then(res => res.json()).then(res => {
      setProducts(res)
      setIsLoading(false)
    })
      .catch(err => console.log(err))
  }, [])
  return (
    <>
      <div className={style.choiceSection}>
        <Categories />
        <Sort />
      </div>
      <h2 className={style.pageTitle}>Все товары</h2>
      <div className={style.products}>
        {isLoading
          ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
          : products.map((pizza) => {
            return <Product key={pizza.id} title={pizza.title} price={pizza.price} imageUrl={pizza.imageUrl}
                            sizes={pizza.sizes} types={pizza.types} />
          })
        }
      </div>
    </>
  )
}

export default Home