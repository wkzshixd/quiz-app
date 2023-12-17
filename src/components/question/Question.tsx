import { useState } from 'react'
import styles from './Question.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../scoreSlice';
import { Option } from '../option/Option'
import { JSONData } from '../menu/Menu';

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
    const appState = useSelector((state) => state.app.value) // FIXME:
    const [clickStates, setClickStates] = useState(Array(4).fill(''));
    const [answerStates, setAnswerStates] = useState(Array(4).fill('')); // Создаем массив из 4 состояний для каждой кнопки
    const [confirmation, setConfirmation] = useState(false); // Флаг подтверждения ответа

    if (appState != 'menu' && appState != 'final'){
        visibility = 'visible'
    } else {
        visibility = 'hidden'
    }

    props.json.map(topic => { //FIXME:
        if (topic.lang == appState) {
            questions = topic.questions
            console.log(questions)
        }
    })

    const handleAnswer = (index: number) => {
        if (confirmation) return;
        if (clickStates[index] === 'clicked') {
            const newStates = [...clickStates];
            newStates[index] = '';
            setClickStates(newStates);
        } else {
            const newStates = [...clickStates];
            newStates[index] = 'clicked';
            setClickStates(newStates);
        }
    };

    function whichAreCorrect () {
        const correctAnswers = []
        questions[0].answers.map(answer => {
            answer.isCorrect ? correctAnswers.push('correct') : correctAnswers.push('');
        })
        return correctAnswers;
    }

      const handleConfirmation = () => {
        let score = 0;
        console.log(clickStates)
        console.log(whichAreCorrect())
        const correctAnswers = whichAreCorrect();
        for (let i = 0; i < clickStates.length; i++){
            if (clickStates[i] === 'clicked') {
                correctAnswers[i] === 'correct' ? score += 1 : null;  
            }
        }
        dispatch(update(score))
      };

    return (questions && (    
        <div className={`${styles.container} ${visibility}`}>
            <div className={styles.question}>
                <div className={styles.title}>Question</div>
                <div className={styles.body}>{questions[0].question}</div>
            </div>
            <div className={styles.answers__wrapper}>
                {questions[0].answers.map((answer, index) => {
                    return <Option key={index} styleState={clickStates[index]} optionData={answer} index={index} handleAnswer={handleAnswer}/>
                })}
            </div>
            <div className={styles.button} onClick={handleConfirmation} >Next</div>
        </div>
        )
    )
}