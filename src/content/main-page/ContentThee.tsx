import { ContentContainer, Image } from "@/components";

import img3 from "./images/3.png";
import img4 from "./images/4.png";
import img5 from "./images/5.png";

export function ContentThree() {
    return (
        <ContentContainer>
            <h2 id="-https-uk-javascript-info-hello-world-zovnishni-skripti-">
                <a href="https://uk.javascript.info/hello-world#zovnishni-skripti">
                    Зовнішні скрипти
                </a>
            </h2>
            <p>
                Якщо ми маємо багато коду на JavaScript, ми можемо розділити
                його на окремі файли.
            </p>
            <p>
                Файл скрипта можна додати до HTML за допомогою атрибута{" "}
                <code>src</code>:
            </p>
            <Image src={img3} alt="sdf" />
            <p>
                Тут <code>/path/to/script.js</code> --- абсолютний шлях до файлу
                скрипта з кореня сайту. Також можна вказати відносний шлях з
                поточної сторінки. Наприклад,{" "}
                <code>src=&quot;script.js&quot;</code>, так само як{" "}
                <code>src=&quot;./script.js&quot;</code>, означатиме, що файл{" "}
                <code>&quot;script.js&quot;</code> у поточній директорії.
            </p>
            <Image src={img4} alt="sdf" />

            <p>
                Ми також можемо вказати повну URL-адресу. Наприклад: Щоб додати
                кілька скриптів, використовуйте кілька тегів:
            </p>
            <Image src={img5} alt="sdf" />
        </ContentContainer>
    );
}
