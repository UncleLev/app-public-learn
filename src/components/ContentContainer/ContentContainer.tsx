import clsx from 'clsx';

import styles from './ContentContainer.module.scss'

type ContentContainerType = {
   className?: string
   children: React.ReactNode
}

const ContentContainer = ({ className, children }: ContentContainerType) => {
    return <div className={clsx(styles.root, className)}>{children}</div>;
};

export default ContentContainer;