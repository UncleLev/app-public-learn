import styles from "./Header.module.scss";
import { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import IconButton from "@mui/material/IconButton";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Link from "next/link";
type HeaderType = {
    className?: string;
};

const Header = ({ className }: HeaderType) => {
    const [fontSize, setFontSize] = useState<number>(1);

    const changeFontSize = (value: number) => {
        setFontSize(value);
        const doc = document.querySelector("html");
        if (doc) doc.style.fontSize = `${value}px`;
    };

    const handleAddFont = () => {
        changeFontSize(fontSize + 0.2);
    };

    const handleDecreesFontSize = () => {
        changeFontSize(fontSize - 0.2);
    };

    return (
        <div className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__links}>
                    <Link href="/">
                        <p className={styles.header__title}>Навчанння</p>
                    </Link>
                    <Link href="/tabs">Додаткова інформація</Link>
                    <Link href="/test">Тестування</Link>
                </div>
                <div className={styles.vision}>
                    <RemoveRedEyeIcon />

                    <div>
                        <IconButton onClick={handleAddFont}>
                            <AddCircleIcon />
                        </IconButton>
                        <IconButton onClick={handleDecreesFontSize}>
                            <RemoveCircleIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
