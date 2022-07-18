import React from 'react'
import { useScrollAnim } from 'components/hooks/hooks'

import logo from "assets/img/quiz/logoAvarik.svg"
import box from "assets/img/quiz/box.svg"
import FactionQuizText from "assets/img/quiz/FactionQuizText.svg"
import flag1 from "assets/img/quiz/flag1.png"
import flag2 from "assets/img/quiz/flag2.png"
import flag3 from "assets/img/quiz/flag3.png"
import flag4 from "assets/img/quiz/flag4.png"


import Instagram from "assets/img/quiz/social/Instagram.svg"
import Twitter from "assets/img/quiz/social/Twitter.svg"
import Discord from "assets/img/quiz/social/Discord.svg"
import youtube from "assets/img/quiz/social/youtube.svg"
import Mail from "assets/img/quiz/social/Mail.svg"
import M from "assets/img/quiz/social/M.svg"

import AvarikButton from 'components/avarik-saga/avarik-button'
import { useDispatch } from 'react-redux'
import { getHandleNext } from 'redux/quiz/quiz.reducer'



export default function Begin() {
    const dispatch = useDispatch()

    const [trigger, anim] = useScrollAnim()

    return (
        <section className={`sc-begin d-flex justify-content-center pt-5 ${anim(1)} `} ref={trigger}>
            <div className="container">
                <div className="w-100 justify-content-center d-flex mb-3">
                    <img src={logo} className="logo img-fluid" alt="" />
                </div>

                <div className="w-100 justify-content-center d-flex mb-5">
                    <img src={FactionQuizText} alt="" />
                </div>

                <h1 className="text-center text-white mb-4">
                    A Moment of Birth
                </h1>

                <div className="d-flex justify-content-center w-100 mb-5">
                    <p className='text-center text-white'>
                        Before an Avarian descends into this world, an entity shall guide them through a series of mystical questions,
                        subconsciously leading them to their rightful place.
                    </p>
                </div>

                <div className="d-flex justify-content-center w-100 mb-4">
                    <img src={flag1} className="flag" alt="" />
                    <img src={flag2} className="flag" alt="" />
                    <img src={flag3} className="flag" alt="" />
                    <img src={flag4} className="flag" alt="" />
                </div>

                <div className="d-flex justify-content-center w-100 mb-4">
                    <img src={box} alt="" />
                </div>

                <div className="d-flex justify-content-center w-100 mb-5">
                    <AvarikButton text='Begin' className='ml-0' variant='dark' onClick={() => dispatch(getHandleNext())} />
                </div>

                <div className="d-flex justify-content-center w-100 mb-3">
                    <img src={Instagram} className="socialquiz" alt="" />
                    <img src={Twitter} className="socialquiz" alt="" />
                    <img src={Discord} className="socialquiz" alt="" />
                    <img src={youtube} className="socialquiz" alt="" />
                    <img src={Mail} className="socialquiz" alt="" />
                    <img src={M} className="socialquiz" alt="" />
                </div>

                <div className="d-flex justify-content-center w-100 mb-3">
                    <p className='text-center text-white'>
                        ©2022 Avarik Saga Universe
                    </p>
                </div>






            </div>
        </section>
    )
}
