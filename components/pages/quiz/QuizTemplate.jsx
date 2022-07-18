import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHandleAnswer, getHandleNext } from 'redux/quiz/quiz.reducer'

export default function QuizTemplate({
    timeLeft,
    addTime
}) {
    const dispatch = useDispatch()

    const { quizActive, QuestionQuiz, answerData } = useSelector(state => state.quiz)
    useEffect(() => {
        if (quizActive < QuestionQuiz.length) {
            addTime()
        }
    }, [quizActive])

    const handleAnswerQuiz = (res) => {
        dispatch(getHandleAnswer(res))
        dispatch(getHandleNext())
        addTime()
    }


    return (
        <div className='quiz-template container'>
            <pre>
                {JSON.stringify(answerData, null, 2)}
            </pre>
            <h1 className=''>
                {/* <ul>
                    <li>{quizActive} - mactive</li>
                    <li>{QuestionQuiz.length} - question length</li>
                </ul> */}
                {
                    quizActive < QuestionQuiz.length &&
                    <>
                        {timeLeft} seccond
                    </>
                }

            </h1>
            <h1>
                {QuestionQuiz[quizActive]?.title}
            </h1>
            <div className="row">
                {
                    QuestionQuiz[quizActive]?.answers?.map((res, i) => (
                        <div className="col-md-4" key={i}>
                            <h4 className='text-white' onClick={() => handleAnswerQuiz(res)}>
                                {res.text}
                            </h4>
                        </div>
                    ))
                }
            </div>
            <button onClick={() => addTime()}>add time</button>
        </div>
    )
}
