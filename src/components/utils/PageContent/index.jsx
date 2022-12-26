import styles from './index.module.scss';

const PageContent = ({ children }) => {
  return (
    <div id="PageContent" className={styles.root}>
      {children}
    </div>
  );
};

export default PageContent;
