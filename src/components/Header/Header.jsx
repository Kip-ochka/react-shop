import headerStyle from './Header.module.scss'
import profitLogo from '../../assets/img/logo3.png'
import cart from '../../assets/img/cart.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className={headerStyle.header}>
      <div className={headerStyle.container}>
        <div className={headerStyle.logoSection}>
          <Link to='/'>
            <img src={profitLogo} alt='' className={headerStyle.logo} />
          </Link>
          <Link to='/'>
            <div className={headerStyle.headerTextContent}>
              <h1 className={headerStyle.title}>
                Proffit.<span className={headerStyle.accent}>Shop</span>
              </h1>
              <p className={headerStyle.subtitle}>
                Самый продающий магазин во вселенной
              </p>
            </div>
          </Link>

        </div>
        <Link to='/cart'>
          <div className={headerStyle.cartSection}>
            <p className={headerStyle.cartPrice}>
              5207
              <span className={headerStyle.rub}>&#8381;</span>
            </p>
            <div className={headerStyle.stick} />
            <div className={headerStyle.valueWrapper}>
              <img src={cart} alt='logo' className={headerStyle.cartImage} />
              <p className={headerStyle.value}>99</p>
            </div>
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Header
