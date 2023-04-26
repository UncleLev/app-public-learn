import { Answer, Question } from "@prisma/client";
import cs from "classnames";
import { useMemo, useState } from "react";
import QuestionView from "../QuestionView";
import AnswerDialog from "../AnswerDialog";

import styles from "./TestView.module.scss";
import axios from "axios";

type TestViewType = {
    className?: string;
    questions: (Question & {
        answers: Answer[];
    })[];
};

const TestView = ({ className, questions }: TestViewType) => {
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [activeScore, setActiveScore] = useState(0);
    const [totalScore, setTotalScore] = useState(0);
    const [totalCorrect, setTotalCorrect] = useState(0);
    const [dialog, setDialog] = useState(false);

    const [question, answerStr] = useMemo(() => {
        const question = questions[activeQuestion];
        const answer =
            question &&
            question.answers
                .filter((e) => e.isCorrect)
                .map((a) => a.text)
                .join("; ");
        return [question, answer];
    }, [activeQuestion, questions]);

    const handleAnswer = (score: number) => {
        setDialog(true);
        setActiveScore(score);
        if (score === 1) setTotalCorrect((state) => state + 1);
    };

    const handlePushToDb = async () => {
        await axios.post("/api/answer", {
            userId: 1,
            knowledgeLevel: activeScore,
            elementOfLearningId: question.elementOfLearningId,
        });
    };

    const handleClose = () => {
        setDialog(false);
        setActiveQuestion((state) => state + 1);
        setTotalScore((state) => state + activeScore);
        handlePushToDb();
    };

    return (
        <div className={cs(styles.TestView, className)}>
            <AnswerDialog
                open={dialog}
                score={activeScore}
                isCorrect={activeScore === 1}
                onClose={handleClose}
                correctAnswer={answerStr}
            />

            {question ? (
                <QuestionView
                    question={question}
                    no={activeQuestion + 1}
                    onAnswer={handleAnswer}
                />
            ) : (
                <div>
                    <h2>Кінець тесту</h2>
                    <p>
                        Загальний бал <b>{totalScore}</b>
                    </p>
                    <p>
                        Кількість правильних відповідей <b>{totalCorrect}</b>
                    </p>
                </div>
            )}
        </div>
    );
};

export default TestView;
