import { useEffect, useState } from 'react'
import styles from './App.module.css'
import { Background } from './components/background/Background'
import { Menu } from './components/menu/Menu'
import { Question } from './components/question/Question'


function App() {
  const [json, setJson] = useState({})
  useEffect (() => {
    fetch('./data.json')
    .then(response => response.json())
    .then(data => setJson(data))
  }, [])
  return (
    <>
    <div className={styles.container}>
      <Background/>
      {Object.keys(json).length > 0 && <Menu json={json} />}
      {Object.keys(json).length > 0 && <Question json={json} />}
    </div>
    </> 
  )
}
export default App
