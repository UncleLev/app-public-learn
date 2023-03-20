import { ContentContainer, Image } from "@/components";

import img2 from "./images/2.png";

export function ContentTwo() {
    return (
        <ContentContainer>
            <h2 id="-https-uk-javascript-info-hello-world-suchasna-rozmitka-">
                <a href="https://uk.javascript.info/hello-world#suchasna-rozmitka">
                    Сучасна розмітка
                </a>
            </h2>
            <p>
                Тег <code>&lt;script&gt;</code> має декілька атрибутів, які
                рідко використовуються сьогодні, але їх ще можна знайти в
                старому коді.
            </p>
            <p>
                Атрибут <code>type</code>: <code>&lt;script type=...&gt;</code>
            </p>
            <p>
                Старий стандарт HTML, HTML4, вимагав, щоб у{" "}
                <code>&lt;script&gt;</code> був атрибут <code>type</code>.
                Зазвичай це був <code>type=&quot;text/javascript&quot;</code>.
                Зараз в ньому немає необхідності --- сучасний стандарт HTML
                повністю змінив зміст цього атрибута. Тепер його можна
                використовувати для модулів JavaScript. Але це просунута тема,
                ми поговоримо про модулі в іншій частині посібника.
            </p>
            <p>
                Атрибут <code>language</code>:{" "}
                <code>&lt;script language=...&gt;</code>
            </p>
            <p>
                Цей атрибут вказував на мову скрипта. Цей атрибут більше немає
                сенсу, оскільки JavaScript є усталеною мовою. Його більше не
                потрібно використовувати.
            </p>
            <p>Коментарі до та після скриптів.</p>
            <p>
                У дійсно старих посібниках і книгах ви можете знайти коментарі
                всередині тега <code>&lt;script&gt;</code>, наприклад:
            </p>
            <Image src={img2} alt="info" />
            <p>
                Такий спосіб не використовується у сучасному JavaScript. Ці
                коментарі ховали JavaScript для старих браузерів, які не знали,
                як обробляти тег <code>&lt;script&gt;</code>. Ті браузери, які
                були випущені за останні 15 років, не мають цієї проблеми. Такий
                вид коментарів означає, що це дійсно старий код.
            </p>
        </ContentContainer>
    );
}
