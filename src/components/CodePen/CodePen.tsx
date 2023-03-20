import styles from "./CodePen.module.scss";
import clsx from "clsx";

type CodePenType = {
    className?: string;
};

const CodePen = ({ className }: CodePenType) => {
    return (
        <div className={clsx(styles.codePen, className)}>
            <h2>Пісочниця для JavaScript</h2>
            <iframe
                scrolling="no"
                title="Example"
                src="https://codepen.io/unclelev/embed/poOROBr?default-tab=html%2Cresult&editable=true"
                frameBorder="no"
                loading="lazy"
                allowTransparency
                allowFullScreen
            >
                See the Pen{" "}
                <a href="https://codepen.io/unclelev/pen/poOROBr">Example</a> by
                UncleLev (<a href="https://codepen.io/unclelev">@unclelev</a>)
                on <a href="https://codepen.io">CodePen</a>.
            </iframe>
        </div>
    );
};

export default CodePen;
