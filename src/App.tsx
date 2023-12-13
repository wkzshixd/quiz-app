import styles from './App.module.css'
import { Background } from './components/background/Background'
import { Menu } from './components/menu/Menu'

function App() {

  return (
    <>
    <div className={styles.container}>
      <Background/>
      <Menu/>
    </div>
    </> 
  )
}
export default App
