import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    Radio,
    RadioGroup,
    TextField,
} from "@mui/material";
import { Answer, Question, question_type } from "@prisma/client";
import cs from "classnames";

import styles from "./QuestionView.module.scss";
import { useEffect, useState } from "react";

type QuestionViewType = {
    className?: string;
    question: Question & {
        answers: Answer[];
    };
    no: number;
    onAnswer: (score: number) => void;
};

const rdnSort = () => Math.random() - 0.5;

const Body = ({
    type,
    answers,
    onChange,
}: {
    type: question_type;
    answers: Answer[];
    onChange: (value: string | number | boolean) => void;
}) => {
    if (type === question_type.single) {
        return (
            <div>
                <FormControl>
                    <RadioGroup>
                        {answers.sort(rdnSort).map((answer) => (
                            <FormControlLabel
                                key={answer.id}
                                value={answer.id}
                                control={<Radio />}
                                label={answer.text}
                                onChange={() => onChange(answer.isCorrect)}
                            />
                        ))}
                    </RadioGroup>
                </FormControl>
            </div>
        );
    }

    if (type === question_type.open) {
        return (
            <div>
                <TextField
                    variant="outlined"
                    onChange={(e) => onChange(e.target.value)}
                />
            </div>
        );
    }
    return (
        <>
            {type === question_type.multiple ? (
                <FormGroup>
                    {answers.map((answer) => (
                        <FormControlLabel
                            key={answer.id}
                            control={<Checkbox />}
                            label={answer.text}
                            onChange={() => onChange(answer.id)}
                        />
                    ))}
                </FormGroup>
            ) : null}
        </>
    );
};

const QuestionView = ({
    question,
    no,
    className,
    onAnswer,
}: QuestionViewType) => {
    const [selects, setSelects] = useState<number[]>([]);
    const [input, setInput] = useState("");
    const [ratio, setRatio] = useState(false);

    const handleRatio = (value: boolean) => {
        setRatio(value);
    };

    useEffect(() => {
        setSelects([]);
        setInput("");
        setRatio(false);
    }, [question.id]);

    const handleSelect = (id: number) => {
        const index = selects.indexOf(id);
        const newArray = [...selects];

        if (index === -1) {
            newArray.push(id);
        } else {
            newArray.splice(index, 1);
        }

        setSelects(newArray);
    };

    const handelInput = (value: string) => {
        setInput(value.trim());
    };

    const handleChange = (value: string | number | boolean) => {
        if (question.type === question_type.open) {
            handelInput(value as string);
        } else if (question.type === question_type.single) {
            handleRatio(value as boolean);
        } else {
            handleSelect(value as number);
        }
    };

    const handleAnswer = () => {
        let score = 0;
        const answer = question.answers.find((a) => a.isCorrect) as Answer;

        if (question.type === question_type.open) {
            score = answer.text.toLowerCase() === input.toLowerCase() ? 1 : 0;
        } else if (question.type === question_type.single) {
            score = ratio ? 1 : 0;
        } else {
            const userAnswers = selects
                .map((id) => question.answers.find((a) => a.id === id))
                .filter((e) => e?.isCorrect);
            score = userAnswers.length * 0.5;
        }

        console.log(score);

        onAnswer(score);
    };

    return (
        <div className={cs(styles.question, className)}>
            <div>
                <h3>
                    {no} {question.text}
                </h3>
            </div>
            <Body
                type={question.type}
                answers={question.answers}
                onChange={handleChange}
            />
            <div>
                <Button variant="contained" onClick={handleAnswer}>
                    Відповісти
                </Button>
            </div>
        </div>
    );
};

export default QuestionView;
