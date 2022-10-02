import headerStyle from './_header.module.scss'

const Header = () => {
  return (
    <header className={headerStyle.header}>
      <div className="header__logo-section">
        <div className="header__title-wrapper">
          <img alt="" className="header__logo" />
          <h1 className="header__title">ReactShop</h1>
          <p className="header__subtitle">
            Самый продающий магазин во вселенной
          </p>
        </div>
      </div>
      <div className="header__cart-section">
        <div className="header__cart-cost">1000р</div>
        <div className="header__cart-value">3</div>
      </div>
    </header>
  )
}

export default Header
