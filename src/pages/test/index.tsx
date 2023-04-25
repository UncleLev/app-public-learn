import { useState } from "react";
import cs from "classnames";

import { Answer, PrismaClient, Question } from "@prisma/client";

import InfoPage from "./InfoPage";
import TestView from "./TestView";

import styles from "./TestPage.module.scss";

type questionsType = (Question & {
    answers: Answer[];
})[];

type TestPageType = {
    questions: questionsType;
};

const TestPage = ({ questions }: TestPageType) => {
    const [showTest, setShowTest] = useState(false);

    const handleStart = () => setShowTest(true);

    return (
        <div className={cs(styles.testPage)}>
            {showTest ? (
                <TestView questions={questions} />
            ) : (
                <InfoPage startTest={handleStart} />
            )}
        </div>
    );
};

function selectQuestions(questions: questionsType) {
    let selectedQuestions = [];
    let types = { multiple: 2, single: 2, open: 2 };

    while (selectedQuestions.length < 6) {
        let randomIndex = Math.floor(Math.random() * questions.length);
        let question = questions[randomIndex];
        let qType = questions[randomIndex].type;
        if (types[qType] > 0) {
            selectedQuestions.push(question);
            types[qType]--;
        }
    }
    return selectedQuestions;
}

export async function getStaticProps() {
    const prisma = new PrismaClient();
    const rawData = await prisma.question.findMany({
        include: { answers: true },
    });
    const allQuestions = JSON.parse(JSON.stringify(rawData)) as questionsType;

    const questions = selectQuestions(allQuestions);

    return {
        props: { questions: questions },
    };
}

export default TestPage;
