import React, { useEffect } from 'react'
import logo from "assets/img/quiz/logoAvarik.svg"
import { useDispatch, useSelector } from 'react-redux'
import { useScrollAnim } from 'components/hooks/hooks'

export default function DoubleQuizTemp({ addTime, handleAnswerQuiz, timeLeft }) {
  const dispatch = useDispatch()

  const [trigger, anim] = useScrollAnim()


  // const { quizActive, QuestionQuiz, answerData } = useSelector(state => state.quiz)

  return (
    <div className={`doublequiz-temp ${anim(1)}`} ref={trigger}>
      <div className=" logotitle d-flex justify-content-center pt-4 text-center">
        <div>
          <img src={logo} alt="" />
          <p className="quest">Which one intrigues you more?</p>
          <p className="note">Choose one to continue</p>
          <h1 className="text-white">{timeLeft} seccond</h1>
        </div>
      </div>
      <div className="container-fluid mx-0 px-0">
        <div className="row ">
          <div className="col-md-6 life" onClick={() => handleAnswerQuiz({ text: 'Life', point: 30 },)}>
            Life
            <img src="bgtemp" alt="" />
          </div>
          <div className="col-md-6 death" onClick={() => handleAnswerQuiz({ text: 'Death', point: 40 },)}>
            Death
            <img src="bgtemp" alt="" />
          </div>

        </div>
      </div>

    </div>
  )
}
