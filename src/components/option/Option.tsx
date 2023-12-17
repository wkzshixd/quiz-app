import { useState } from 'react';
import styles from './Option.module.css'

type OptionProps = {
    styleState: string;
    optionData: {
        answer: string;
        isCorrect: boolean;
    }
    index: number;
    handleAnswer: (index: number) => void;
}



export const Option = ({styleState, optionData, index, handleAnswer} : OptionProps) => {
    const [style, setStyle] = useState(styleState)

    function handleClick () { 
        if (style == 'clicked') {
            setStyle('')
        } else {
            setStyle('clicked')
        }
    }

  return (
    <div className={`${styles.answer} ${style === 'correct' ? styles.correct : style === 'incorrect' ? styles.incorrect : style === 'clicked' ? styles.clicked : ''}`}
        onClick={handleClick}
    >
        {optionData.answer}
    </div>
  )
}
