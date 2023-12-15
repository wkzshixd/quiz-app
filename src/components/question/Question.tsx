import React, { useState } from 'react'
import styles from './Question.module.css'
import { useSelector } from 'react-redux';

export const Question = (props) => { // FIXME:
    let visibility = 'hidden';
    let questions;
    const appState = useSelector((state) => state.app.value) // FIXME:
    
    const [clickStates, setClickStates] = useState(Array(4).fill(''));
    const [answerStates, setAnswerStates] = useState(Array(4).fill('')); // Создаем массив из 4 состояний для каждой кнопки
    const [answerState, setAnswerState] = useState(''); // Состояние для каждого ответа
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

    const handleAnswer = (index: number, isCorrect : boolean) => {
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
        
        console.log(setClickStates)
        setAnswerState(isCorrect ? 'correct' : 'incorrect');
        console.log(answerState)
    };

      const handleConfirmation = () => {
        setConfirmation(true); // Устанавливаем флаг подтверждения
    
        // Здесь можно провести проверку ответа и установить состояние ответа (красный или зеленый)
        // Например, с помощью какой-то логики, проверяющей правильность ответа
        // В данном примере установим случайный ответ как правильный или неправильный для демонстрации
        const randomIsCorrect = Math.random() < 0.5; // Генерируем случайное значение true/false
        setAnswerState(randomIsCorrect ? 'correct' : 'incorrect');
      };

    console.log(questions)
    return (questions && (    
        <div className={`${styles.container} ${visibility}`}>
            <div className={styles.question}>
                <div className={styles.title}>Question</div>
                <div className={styles.body}>{questions[0].question}</div>
            </div>
            <div className={styles.answers__wrapper}>
                <div 
                    className={`${styles.answer} ${answerStates[0] === 'correct' ? styles.correct : answerStates[0] === 'incorrect' ? styles.incorrect : clickStates[0] === 'clicked' ? styles.clicked : ''}`}
                    onClick={() => handleAnswer(0, questions[0].answers[0].isCorrect)}
                >
                    A {questions[0].answers[0].answer}
                </div>
 
                <div
                    className={`${styles.answer} ${answerStates[1] === 'correct' ? styles.correct : answerStates[1] === 'incorrect' ? styles.incorrect : clickStates[1] === 'clicked' ? styles.clicked : ''}`}
                    onClick={() => handleAnswer(1, questions[0].answers[1].isCorrect)}
                >
                    B {questions[0].answers[1].answer}
                </div>

                <div 
                    className={`${styles.answer} ${answerStates[2] === 'correct' ? styles.correct : answerStates[2] === 'incorrect' ? styles.incorrect : clickStates[2] === 'clicked' ? styles.clicked : ''}`}
                    onClick={() => handleAnswer(2, questions[0].answers[2].isCorrect)}
                >
                    C {questions[0].answers[2].answer}
                </div>

                <div 
                    className={`${styles.answer} ${answerStates[3] === 'correct' ? styles.correct : answerStates[3] === 'incorrect' ? styles.incorrect : clickStates[3] === 'clicked' ? styles.clicked : ''}`}
                    onClick={() => handleAnswer(3, questions[0].answers[3].isCorrect)}
                >
                    D {questions[0].answers[3].answer}
                </div>
            </div>
            <div className={styles.button} onClick={handleConfirmation} >Next</div>
        </div>
        )
    )
}