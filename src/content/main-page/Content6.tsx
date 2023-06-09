import { ContentContainer, Image } from "@/components";

import img10 from "./images/10.png";
import img11 from "./images/11.png";
import img12 from "./images/12.png";

export function Content6() {
    return (
        <ContentContainer>
            <h2 id="-https-uk-javascript-info-structure-code-comments-">
                Коментарі
            </h2>
            <p>
                З часом програми стають все складнішими та складнішими. Виникає
                потреба додавати <em>коментарі</em>, які будуть описувати що
                робить код і чому.
            </p>
            <p>
                Коментарі можна писати в будь-якому місці скрипту. Вони не
                впливають на його виконання, тому що рушій просто ігнорує
                коментарі.
            </p>
            <p>
                <strong>
                    Однорядкові коментарі починаються з подвійної косої риски{" "}
                    <code>{"//"}</code>.
                </strong>
            </p>
            <p>
                Частина рядка після <code>{"//"}</code> вважається коментарем.
                Такий коментар може займати весь рядок, або міститися після
                інструкції.
            </p>
            <p>Ось так:</p>
            <Image src={img10} alt="image info" />
            <p>
                <strong>
                    Багаторядкові коментарі починаються з косої риски з зірочкою{" "}
                    <code>{"/*"}</code> і закінчується зірочкою з косою рискою{" "}
                    <code>*/</code>.
                </strong>
            </p>
            <p>Ось так:</p>
            <Image src={img11} alt="image info" />

            <p>
                Вміст коментаря ігнорується, тому, якщо ми напишемо всередині{" "}
                <code>{"/* ... */"}</code> код, він не виконається.
            </p>
            <p>Деколи виникає необхідність тимчасово вимкнути частину коду:</p>
            <Image src={img12} alt="image info" />

            <p>Будь ласка, не вагайтесь коментувати ваш код.</p>
            <p>
                Коментарі збільшують розмір коду, але це не проблема. Є багато
                інструментів, які мініфікують код перед публікацією на робочий
                сервер. Вони видалять коментарі, тому їх не буде в робочих
                скриптах. Отже, коментарі жодним чином не впливають на робочий
                код.
            </p>
        </ContentContainer>
    );
}
