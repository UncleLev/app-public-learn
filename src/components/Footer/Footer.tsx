import styles from "./Footer.module.scss";

type FooterType = {
    className?: string;
};

const Footer = ({ className }: FooterType) => {
    return <div className={styles.footer}>
        <p>Автор курсу Левчук З.А.</p>
    </div>;
};

export default Footer;
