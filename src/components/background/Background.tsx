import { useSelector } from 'react-redux'
import styles from './Background.module.css'
import { useEffect, useState } from 'react'
import { RootState } from '../store'

export const Background = () => {

  const appState = useSelector((state: RootState) => state.app.value)
  const [apperance, setApperance] = useState('default')
  const [display, setDisplay] = useState(styles.collapsed)
  const [visibility, setVisibility] = useState(styles.hidden)
  const [logoSrc, setLogoSrc] = useState("./img/quiz_logo.png")

  useEffect(() => {
    if (appState != 'final' && appState != 'menu') {
      switch (appState){
        case 'C++':
          setLogoSrc('./img/c++_logo.png');
          break;
        case 'Java':
          setLogoSrc('./img/java_logo.png');
          break;
        case 'Python':
          setLogoSrc('./img/python_logo.png')
      }
    }
    if (appState == 'final'){
      setDisplay(styles.full)
      setVisibility(styles.visible)
      setLogoSrc("./img/quiz_logo.png")
    } else {
      setDisplay(styles.collapsed)
      setVisibility(styles.hidden)
    }
    if (appState == 'menu'){
      setApperance('default')
      setLogoSrc("./img/quiz_logo.png")
    } else {
      setApperance('changed')
    }
  }, [appState])

  const correctAnswers = useSelector((state: RootState) => state.score.value.correct)
  const incorrectAnswers = useSelector((state: RootState) => state.score.value.incorrect)

  return (
      <div className={`${styles.container} ${display}`}>
        <img className={apperance == 'default' ? styles.logo : styles.logo_changed} src={logoSrc}/>
        <img className={apperance == 'default' ? styles.ellipse__52px : styles.ellipse__52px_changed} src="./svg/ellipse_52px.svg"/>
        <img className={styles.ellipse__129px} src="./svg/ellipse_129px.svg"/>
        <img className={`${styles.ellipse__129px_right} ${visibility}`} src="./svg/ellipse_129px_right.svg"/>
        <img className={apperance == 'default' ? styles.ellipse__152white : styles.ellipse__152white_changed} src="./svg/ellipse_152white.svg"/>
        <img className={apperance == 'default' ? styles.ellipse__153px : styles.ellipse__153px_changed} src="./svg/ellipse_153px.svg"/>
        <img className={apperance == 'default' ? styles.ellipse__204px : styles.ellipse__204px_changed} src="./svg/ellipse_204px.svg"/>
        <img className={apperance == 'default' ? styles.ellipse__255px : styles.ellipse__255px_changed} src="./svg/ellipse_255px.svg"/>
        <img className={`${styles.ellipse__110px} ${visibility}`} src="./svg/ellipse_110px.svg"/>
        <div className={apperance == 'default' ? styles.ellipse__262fade : styles.ellipse__262fade_changed}></div>
        <img className={`${visibility} ${styles.completed}`} src="./img/comleted.png"/>
        <div className={`${visibility} ${styles.score}`}>
          <p>Correct answers: {correctAnswers}</p>
          <p>Incorrect answers: {incorrectAnswers}</p>
        </div>
    </div>
  )
}
