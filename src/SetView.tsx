import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Set, Question } from './types';

type QuestionViewProps = {
    prompt: string | undefined,
    correctAnswer: string | undefined
};

const SetView = () => {
    const { setId } = useParams();
    const [currentSet, setCurrentSet] = useState<Set>();
    const [question, setQuestion] = useState<Question>();
    const [answer, setAnswer] = useState<string>("");

    useEffect(() => {
        import(`./data/set-${setId}.json`)
            .then((set: Set) => {
                setCurrentSet(set);
                setQuestion(currentSet?.questions[0]);
            })
    }, []);

    // Shuffle questions
    // Loop:
    //    Show question, start timer
    //    On submit:
    //       - Store time
    //       - If last question, show times and link back to home page
    //       - Show next quesiton

    function process() {

    }


    return (
        <>
            <QuestionView prompt={question?.prompt} correctAnswer={question?.correctAnswer} />
            <input value={answer} onChange={e => setAnswer(e.target.value)}></input>
            <button onClick={process}>Submit</button>
        </>
    )
}

const QuestionView = (props: QuestionViewProps) => {
    const { prompt, correctAnswer } = props;
    console.log(props)
    return (
        <div>{prompt || ""}</div>
    )
}

function shuffleQuestions(questions: Question[]) {
    for (let i = 0; i < 100; i++) {
        let j = Math.floor(Math.random() * questions.length);
        let k = Math.floor(Math.random() * questions.length);
        let temp = questions[j];
        questions[j] = questions[k];
        questions[k] = temp;
    }
    return questions;   
}

export default SetView;