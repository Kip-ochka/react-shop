import appStyles from './App.module.scss'
import Header from '../Header/Header'

function App() {
  return (
      <div className={appStyles.page}>
        <div className={appStyles.pageWrapper}><Header /></div>

      </div>


  )
}

export default App
