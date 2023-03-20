import { ContentContainer, Image } from "@/components";

import img14 from "./images/14.png";
import img15 from "./images/15.png";

export function Content8() {
    return (
        <ContentContainer>
            <h2 id="-https-uk-javascript-info-strict-mode-konsol-brauzera-">
                <a href="https://uk.javascript.info/strict-mode#konsol-brauzera">
                    Консоль браузера
                </a>
            </h2>
            <p>
                Коли ви використовуєте{" "}
                <a href="https://uk.javascript.info/devtools">
                    консоль розробника
                </a>{" "}
                для виконання коду, майте на увазі, що консоль усталено не
                використовує суворий режим.
            </p>
            <p>
                В тих випадках, коли <code>use strict</code> впливає на роботу
                коду, ви отримаєте невірні результати в консолі.
            </p>
            <p>
                Як тоді увімкнути <code>use strict</code> в консолі?
            </p>
            <p>
                По-перше, можна використовувати <code>Shift+Enter</code>, щоб
                ввести декілька рядків, і на початку написати{" "}
                <code>use strict</code>, ось так:
            </p>
            <Image src={img14} alt="image info" />

            <p>
                Це працюватиме в більшості браузерів, зокрема в Firefox і
                Chrome.
            </p>
            <p>
                Якщо не спрацює, наприклад, в старих браузерах, тоді
                найнадійнішим варіантом буде використати <code>use strict</code>{" "}
                всередині функції-обгортки (хоч це, звичайно, виглядатиме
                потворно). Ось так:
            </p>
            <Image src={img15} alt="image info" />

            <h2 id="-https-uk-javascript-info-strict-mode-chi-povinni-mi-vikoristovuvati-suvorii-rezhim-">
                Чи повинні ми використовувати суворий режим?
            </h2>
            <p>Питання може здатися очевидним, але це не так.</p>
            <p>
                Одні можуть порекомендувати ставити{" "}
                <code>&quot;use strict&quot;</code> на початку скриптів... Але
                знаєте, що круто?
            </p>
            <p>
                Сучасний JavaScript підтримує &quot;класи&quot; і
                &quot;модулі&quot; -- просунуті структури мови (ми їх, звичайно,
                будемо вивчати), які автоматично вмикають{" "}
                <code>use strict</code>. Тому, якщо ми використовуємо ці
                структури, нам не потрібно прописувати директиву{" "}
                <code>&quot;use strict&quot;</code>.
            </p>
            <p>
                <strong>
                    Отож зараз бажано ставити{" "}
                    <code>&quot;use strict&quot;;</code> на початку скриптів.
                    Але пізніше, коли наш код &quot;доросте&quot; до класів і
                    модулів, ми зможемо пропускати цю директиву.
                </strong>
            </p>
            <p>
                Зараз ми знаємо про <code>use strict</code> в загальному.
            </p>
            <p>
                У наступних розділах, в процесі вивчення особливостей мови, ми
                помітимо відмінності між суворим і усталеним режимами. На щастя,
                їх не багато, і вони справді роблять наше життя кращим.
            </p>
            <p>
                Всі приклади в цьому посібнику працюють в суворому режимі, окрім
                випадків (дуже рідкісних), коли вказано зворотнє.
            </p>
        </ContentContainer>
    );
}
