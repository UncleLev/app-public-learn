import { Button } from "@mui/material";
import cs from "classnames";

import styles from "./InfoPage.module.scss";

type InfoPageType = {
    className?: string;
    startTest: () => void;
};

const InfoPage = ({ className, startTest }: InfoPageType) => {
    return (
        <div className={cs(styles.infoPage, className)}>
            <h2>тест з Javascript</h2>
            <p>
                Це тест з Javascript, який складається з 6 запитань, кожне з
                яких має свій тип питання. Типи запитань - це відкриті, одна
                правильна відповідь і дві правильні відповіді. Кожне запитання з
                1 правильним варіантом оцінюється на 1 бал, а кожне запитання з
                2 правильними варіантами оцінюється на 0,5 бала за кожну
                правильну відповідь. За 100% збіг відповіді на відкрите
                запитання додається 1 бал. У всіх інших випадках не додавати
                бали до загального результату.
            </p>
            <p>
                Усього тест складається з 12 питань, 2 запитання на кожен з 6
                типів питань. Оцінка за кожне запитання може бути від 0 до 1,5
                балів. У разі, якщо відповідь на запитання не була надіслана,
                бали не додаються до загального результату. Загальний бал за
                тест буде розрахований як сума балів за всі запитання в тесті.
            </p>
            <Button variant="contained" onClick={startTest}>
                Почати тест
            </Button>
        </div>
    );
};

export default InfoPage;
