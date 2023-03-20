import Head from "next/head";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import clsx from "clsx";
import Pagination from "@mui/material/Pagination";
import styles from "@/styles/Home.module.scss";
import * as content from "@/content/main-page";
import { useMemo, useState } from "react";

const pages = Object.values(content);

export default function Home() {
    const [activeIndex, setActivePageIndex] = useState(0);

    const isStart = activeIndex === 0;
    const isEnd = activeIndex === pages.length - 1;

    const handleBack = () => {
        if (isStart) return;
        setActivePageIndex((i) => i - 1);
    };

    const handleForward = () => {
        if (isEnd) return;
        setActivePageIndex((i) => i + 1);
    };

    const ActivePage = useMemo(() => {
        return pages[activeIndex];
    }, [activeIndex]);

    return (
        <>
            <div className={styles.wrapper}>
                <IconButton
                    disabled={isStart}
                    onClick={handleBack}
                    className={clsx(
                        styles.scrollBtn,
                        styles["scrollBtn--back"]
                    )}
                >
                    <ArrowBackIosIcon />
                </IconButton>
                <IconButton
                    disabled={isEnd}
                    onClick={handleForward}
                    className={clsx(
                        styles.scrollBtn,
                        styles["scrollBtn--forward"]
                    )}
                >
                    <ArrowForwardIosIcon />
                </IconButton>
                <div className={styles.container}>
                    <ActivePage />
                    <div className={styles.pagination__wrapper}>
                        <Pagination
                            classes={{ root: styles.pagination__root }}
                            page={activeIndex + 1}
                            hideNextButton={isEnd}
                            hidePrevButton={isStart}
                            onChange={(_, n) => setActivePageIndex(n - 1)}
                            count={pages.length}
                            color="primary"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
