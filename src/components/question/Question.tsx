import { useState } from 'react'
import styles from './Question.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { Option } from '../option/Option'
import { JSONData } from '../menu/Menu';
import { updateScore } from '../slices/scoreSlice';
import { updateOption } from '../slices/optionSlice';
import { updateConfirm } from '../slices/confirmSlice';
import { final } from '../slices/appSlice';
import { RootState } from '../store';


let visibility = 'hidden';
let questions: Questions

type Questions = {
    question: string;
    answers: {
        answer: string,
        isCorrect: boolean
    }[]
}[];

interface QuestionProps {
    json: JSONData;
}

export const Question: React.FC<QuestionProps> = ({json}) => {

    const dispatch = useDispatch();
    const appState = useSelector((state: RootState) => state.app.value)
    const optionsState = useSelector((state: RootState) => state.option.value)
    const confirmState = useSelector((state: RootState) => state.confirm.value)
    const [isDisabled, setIsDisabled] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState(0)

    if (appState != 'menu' && appState != 'final'){
        visibility = 'visible'
    } else {
        visibility = 'hidden'
    }

    json.map(topic => {
        if (topic.lang == appState) {
            questions = topic.questions
        }
    })

    function whichAreCorrect () {
        const correctAnswers : string[] = [];
        questions[currentQuestion].answers.map(answer => {
            answer.isCorrect ? correctAnswers.push('correct') : correctAnswers.push('');
        })
        return correctAnswers;
    }

    const handleConfirmation = () => {
        if (confirmState) return;
        let correct = 0;
        let incorrect = 0;
        const setStyle = ['', '', '', ''];
        const correctAnswers = whichAreCorrect();
        for (let i = 0; i < optionsState.length; i++){
            if (optionsState[i] === 'clicked') {
                if (correctAnswers[i] === 'correct'){
                    correct += 1
                    setStyle[i] = 'correct'
                }  else {
                    incorrect += 1;
                    setStyle[i] = 'incorrect'
                }
            } else {
                if (correctAnswers[i] === 'correct'){
                    incorrect += 1;
                    setStyle[i] = 'incorrect'
                }  
            }
        }

        setIsDisabled(true)
        dispatch(updateOption(setStyle))
        dispatch(updateConfirm(true))
        dispatch(updateScore({correct, incorrect}))

        setTimeout(() => {
            setIsDisabled(false)
            dispatch(updateOption(['', '', '', '']))
            dispatch(updateConfirm(false))
            if (questions.length - 1 != currentQuestion){
                setCurrentQuestion(currentQuestion =>  currentQuestion += 1)
            } else {
                dispatch(final())
            }
        }, 3000)
    };

    return (questions && (    
        <div className={`${styles.container} ${visibility}`}>
            <div className={styles.question}>
                <div className={styles.title}>Question</div>
                <div className={styles.body}>{questions[currentQuestion].question}</div>
            </div>
            <div className={styles.answers__wrapper}>
                {questions[currentQuestion].answers.map((answer, index) => {
                    return <Option key={index} optionData={answer} index={index} />
                })}
            </div>
            <button className={styles.button} disabled={isDisabled} onClick={handleConfirmation} >Next</button>
        </div>
        )
    )
}