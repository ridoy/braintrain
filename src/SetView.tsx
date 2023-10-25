import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Set } from './types';

type QuestionViewProps = {
    prompt: string,
    correctAnswer: string
};


const SetView = () => {
    const { setId } = useParams();
    const [currentSet, setCurrentSet] = useState<Set | null>(null);
    useEffect(() => {
        import(`./data/set-${setId}.json`)
            .then((data) => {
                setCurrentSet(data);
            })
    });
    return (
        <QuestionView prompt={"hi"} correctAnswer="hi"/>
    )
}

const QuestionView = (props: QuestionViewProps) => {
    const { prompt, correctAnswer } = props;
    return (
        <div>{prompt}</div>
    )
}

export default SetView;