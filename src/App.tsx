import styles from './App.module.css'
import { Background } from './components/background/Background'
import { Menu } from './components/menu/Menu'
import { Question } from './components/question/Question'

function App() {

  return (
    <>
    <div className={styles.container}>
      <Background/>
      <Menu/>
      <Question/>
    </div>
    </> 
  )
}
export default App
