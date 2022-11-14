import classNames from 'classnames';
import styles from './index.module.scss';

const PageSection = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default PageSection;
