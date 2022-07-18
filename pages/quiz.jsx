import { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import Layout from "components/layout"
import SEO from "components/seo"
import Begin from "components/pages/quiz/Begin"
import { useDispatch, useSelector } from "react-redux"
import QuizTemplate from "components/pages/quiz/QuizTemplate"
import { getHandleNext } from "redux/quiz/quiz.reducer"

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
            {/* <Layout> */}
            <div className="quiz">
                {
                    quizActive === 0 ?
                        <Begin addTime={addTime} />
                        :
                        <QuizTemplate timeLeft={timeLeft} addTime={addTime} />
                }
            </div>
            {/* </Layout> */}
        </>
    )
}
export default QuizPage