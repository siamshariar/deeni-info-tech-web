import styles from './index.module.scss';

export default function PageContent({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}
