import { useSelector } from 'react-redux'
import styles from './Background.module.css'

let visibility = 'collapsed'

export const Background = () => {

  const appState = useSelector(state => state.app.value) // FIXME:

  if (appState == 'final'){
    visibility = 'full'
  } else {
    visibility = 'collapsed'
  }

  const correctAnswers = useSelector(state => state.score.value.correct) // FIXME:;
  const incorrectAnswers = useSelector(state => state.score.value.incorrect) // FIXME:;

  return (
      <div className={`${styles.container} ${visibility}`}>
        <img className={styles.quiz_logo} src="./img/quiz_logo.png" alt="" />
        <img className={styles.ellipse__52px} src="./svg/ellipse_52px.svg" alt="" />
        <img className={styles.ellipse__129px} src="./svg/ellipse_129px.svg" alt="" />
        <img className={styles.ellipse__152white} src="./svg/ellipse_152white.svg" alt="" />
        <img className={styles.ellipse__153px} src="./svg/ellipse_153px.svg" alt="" />
        <img className={styles.ellipse__204px} src="./svg/ellipse_204px.svg" alt="" />
        <img className={styles.ellipse__255px} src="./svg/ellipse_255px.svg" alt="" />
        <div className={styles.ellipse__262fade}></div>
        <img className={`${styles.completed} ${visibility}`} src="./img/comleted.png"/>
        <div className={`${styles.score} ${visibility}`}>
          <p>Correct answers: {correctAnswers}</p>
          <p>Incorrect answers: {incorrectAnswers}</p>
        </div>
    </div>
  )
}
