import { useEffect, useState } from 'react';
import styles from './Option.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { updateOption } from '../slices/optionSlice';

type OptionProps = {
    optionData: {
        answer: string;
        isCorrect: boolean;
    }
    index: number;
}



export const Option = ({optionData, index} : OptionProps) => {
    const [style, setStyle] = useState('')
    const dispatch = useDispatch()
    const optionsState = useSelector(state => state.option.value) // FIXME:
    const confirmState = useSelector(state => state.confirm.value) // FIXME:

    useEffect(() => {
        if (confirmState) {
            setStyle(optionsState[index])
        }
    },[confirmState, optionsState, index])

    function handleClick () {
        if (confirmState) return
        if (style == 'clicked') {
            setStyle('')
            const newState = optionsState.concat()
            newState.splice(index, 1, '')
            dispatch(updateOption(newState))
        } else {
            setStyle('clicked')
            const newState = optionsState.concat()
            newState.splice(index, 1, 'clicked')
            dispatch(updateOption(newState))
        }
        console.log('xd')
    }

    const currentStyle = style === 'correct' ? styles.correct : style === 'incorrect' ? styles.incorrect : style === 'clicked' ? styles.clicked : ''

  return (
    <div className={`${styles.answer} ${currentStyle}`}
        onClick={handleClick}
    >
        {optionData.answer}
    </div>
  )
}
