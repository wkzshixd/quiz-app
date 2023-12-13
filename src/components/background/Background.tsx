import styles from './Background.module.css'

export const Background = () => {
  return (
      <div className={styles.container}>
        <img className={styles.quiz_logo} src="./public/img/quiz_logo.png" alt="" />
        <img className={styles.ellipse__52px} src="./public/svg/ellipse_52px.svg" alt="" />
        <img className={styles.ellipse__129px} src="./public/svg/ellipse_129px.svg" alt="" />
        <img className={styles.ellipse__152white} src="./public/svg/ellipse_152white.svg" alt="" />
        <img className={styles.ellipse__153px} src="./public/svg/ellipse_153px.svg" alt="" />
        <img className={styles.ellipse__204px} src="./public/svg/ellipse_204px.svg" alt="" />
        <img className={styles.ellipse__255px} src="./public/svg/ellipse_255px.svg" alt="" />
        <div className={styles.ellipse__262fade}></div>
    </div>
  )
}
