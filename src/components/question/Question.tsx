import { useState } from 'react'
import styles from './Question.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { Option } from '../option/Option'
import { JSONData } from '../menu/Menu';
import { updateScore } from '../slices/scoreSlice';
import { updateOption } from '../slices/optionSlice';
import { updateConfirm } from '../slices/confirmSlice';

let visibility = 'hidden';
let questions: Questions

type Questions = {
    question: string;
    answers: {
        answer: string,
        isCorrect: boolean
    }[]
}[];

export const Question = (props : JSONData) => { // FIXME:

    const dispatch = useDispatch();
    const appState = useSelector(state => state.app.value) // FIXME:
    const optionsState = useSelector(state => state.option.value) // FIXME:
    const confirmState = useSelector(state => state.confirm.value) // FIXME:


    if (appState != 'menu' && appState != 'final'){
        visibility = 'visible'
    } else {
        visibility = 'hidden'
    }

    props.json.map(topic => { //FIXME:
        if (topic.lang == appState) {
            questions = topic.questions
        }
    })

    function whichAreCorrect () {
        const correctAnswers = []
        questions[0].answers.map(answer => {
            answer.isCorrect ? correctAnswers.push('correct') : correctAnswers.push('');
        })
        return correctAnswers;
    }

    const handleConfirmation = () => {
        if (confirmState) return;
        let score = 0;
        const setStyle = ['', '', '', ''];
        const correctAnswers = whichAreCorrect();
        for (let i = 0; i < optionsState.length; i++){
            if (optionsState[i] === 'clicked') {
                if (correctAnswers[i] === 'correct'){
                    score += 1
                    setStyle[i] = 'correct'
                }  else {
                    setStyle[i] = 'incorrect'
                }
            } else {
                if (correctAnswers[i] === 'correct'){
                    setStyle[i] = 'incorrect'
                }  
            }
        }

        dispatch(updateOption(setStyle))
        dispatch(updateConfirm(true))
        dispatch(updateScore(score))
    };

    return (questions && (    
        <div className={`${styles.container} ${visibility}`}>
            <div className={styles.question}>
                <div className={styles.title}>Question</div>
                <div className={styles.body}>{questions[0].question}</div>
            </div>
            <div className={styles.answers__wrapper}>
                {questions[0].answers.map((answer, index) => {
                    return <Option key={index} optionData={answer} index={index} />
                })}
            </div>
            <div className={styles.button} onClick={handleConfirmation} >Next</div>
        </div>
        )
    )
}