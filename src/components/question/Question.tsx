import React from 'react'
import styles from './Question.module.css'
import { useSelector } from 'react-redux';

export const Question = () => {
    let visibility = 'hidden';
    const appState = useSelector((state) => state.app.value) // FIXME:
    if (appState != 'menu' && appState != 'final'){
        visibility = 'visible'
    } else {
        visibility = 'hidden'
    }

    console.log()
  return (
    <div className={styles.container + ' ' + visibility}>Question topic: {}</div>
  )
}
