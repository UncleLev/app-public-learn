import cs from "classnames";

import styles from "./AnswerDialog.module.scss";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from "@mui/material";

type AnswerDialogType = {
    className?: string;
    open: boolean;
    onClose: () => void;
    isCorrect: boolean;
    score: number;
    correctAnswer?: string;
};

const AnswerDialog = ({
    className,
    open,
    isCorrect,
    score,
    onClose,
    correctAnswer,
}: AnswerDialogType) => {

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle>Відповідь</DialogTitle>
            <DialogContent>
                {isCorrect ? (
                    <div>
                        <p>Правильно</p>
                        <p>+ {score}</p>
                    </div>
                ) : (
                    <div>
                        <p>Не Правильно</p>
                        <p>
                            Правильна Відповідь <b>{correctAnswer}</b>
                        </p>
                    </div>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} autoFocus>
                    Далі
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AnswerDialog;
