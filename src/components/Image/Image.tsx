import clsx from "clsx";

import styles from "./Image.module.scss";
import NextImage, { ImageProps } from "next/image";

interface ImageType extends ImageProps {
    className?: string;
}

const Image = ({ className, ...props }: ImageType) => {
    return (
        <NextImage
            layout="responsive"
            className={clsx(className, styles.root)}
            {...props}
        />
    );
};

export default Image;
