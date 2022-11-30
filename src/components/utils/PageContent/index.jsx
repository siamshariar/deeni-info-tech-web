import styles from './index.module.scss';

const PageContent = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};

export default PageContent;
