import headerStyle from './Header.module.scss'
import profitLogo from '../../vendor/logo3.png'
import cart from '../../vendor/cart.svg'

const Header = () => {
  return (
    <header className={headerStyle.header}>
      <div className={headerStyle.container}>
        <div className={headerStyle.logoSection}>
          <a href="/">
            <img src={profitLogo} alt="" className={headerStyle.logo} />
          </a>

          <div className={headerStyle.headerTextContent}>
            <h1 className={headerStyle.title}>
              Proffit.<span className={headerStyle.accent}>Shop</span>
            </h1>
            <p className={headerStyle.subtitle}>
              Самый продающий магазин во вселенной
            </p>
          </div>
        </div>
        <a href="#">
          <div className={headerStyle.cartSection}>
            <p className={headerStyle.cartPrice}>
              56211
              <span className={headerStyle.rub}>&#8381;</span>
            </p>
            <div className={headerStyle.valueWrapper}>
              <img src={cart} alt="logo" className={headerStyle.cartImage} />
              <p className={headerStyle.value}>9999</p>
            </div>
          </div>
        </a>
      </div>
    </header>
  )
}

export default Header
