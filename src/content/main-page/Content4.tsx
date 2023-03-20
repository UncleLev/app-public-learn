import { ContentContainer, Image } from "@/components";


import img6 from "./images/6.png";
import img7 from "./images/7.png";

export function Content4() {
    return (
        <ContentContainer>
            <h1 id="-">Структура коду</h1>
            <p>Спочатку розглянемо &quot;будівельні блоки&quot; коду.</p>
            <h2 id="-https-uk-javascript-info-structure-instrukciyi-">
                Інструкції
            </h2>
            <p>
                Інструкції -- це синтаксичні конструкції та команди, які
                виконують дії.
            </p>
            <p>
                Ми вже бачили інструкцію{" "}
                <code>alert(&#39;Привіт, світ!&#39;)</code>, яка показує
                повідомлення &quot;Привіт, світ!&quot;.
            </p>

            <p>
                Можна писати стільки інструкцій, скільки завгодно. Інструкції
                можна розділяти крапкою з комою.
            </p>
            <p>
                Наприклад, тут ми розділити &quot;Привіт, світ&quot; на два
                виклики alert:
            </p>
            <Image src={img6} alt="image info" />
            <p>
                Зазвичай кожну інструкцію пишуть з нового рядка, щоби код було
                легше читати:
            </p>
            <Image src={img7} alt="image info" />
        </ContentContainer>
    );
}
