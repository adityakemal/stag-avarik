import { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import Layout from "components/layout"
import SEO from "components/seo"
import Begin from "components/pages/quiz/Begin"
import { useDispatch, useSelector } from "react-redux"
import QuizTemplate from "components/pages/quiz/QuizTemplate"
import { getHandleNext } from "redux/quiz/quiz.reducer"
import IntroQuiz from "components/pages/quiz/IntroQuiz"

const QuizPage = () => {
    const { quizActive, QuestionQuiz } = useSelector(state => state.quiz)
    const [timeLeft, setTimeLeft] = useState(null);
    const dispatch = useDispatch()

    useEffect(() => {
        if (timeLeft === 0) {
            console.log("TIME LEFT IS 0");
            setTimeLeft(null)
            dispatch(getHandleNext())
        }

        if (!timeLeft) return;

        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [timeLeft]);




    const addTime = () => setTimeLeft(5)

    return (
        <>
            <SEO title="Quiz" />
            <Helmet>
                <body className="bd-quiz" />
            </Helmet>

            <div className="quiz">
                {
                    quizActive === 0 ?
                        <Begin />
                        :
                        quizActive === 1 ?
                            <IntroQuiz />
                            :
                            <QuizTemplate timeLeft={timeLeft} addTime={addTime} />
                }
            </div>
        </>
    )
}
export default QuizPage