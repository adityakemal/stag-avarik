import React from 'react'
import { useDispatch } from 'react-redux'
import { getHandleNext } from 'redux/quiz/quiz.reducer'
import logo from "assets/img/quiz/logoAvarik.svg"
import DoubleQuizTemp from './DoubleQuizTemp'
import { useScrollAnim } from 'components/hooks/hooks'




export default function IntroQuiz() {
    const dispatch = useDispatch()
    const [trigger, anim] = useScrollAnim()

    return (
        <div className={`sc-intro pt-4 ${anim(1)}`} onClick={() => dispatch(getHandleNext())} ref={trigger}>
            <div className="container">
                <div className="w-100 d-flex justify-content-center ">
                    <img src={logo} alt="" />
                </div>
                <div className="w-100 d-flex justify-content-center align-items-center h-100 textwrap" >
                    <p className="text-white text-center">
                        “Come child…. bear witness to the making of your soul. <br />
                        Rest and clear your mind, and stay true to yourself…”
                    </p>
                </div>
            </div>
        </div>
    )

    // return (<DoubleQuizTemp />)
}
