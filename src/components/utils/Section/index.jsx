import classNames from 'classnames';
import styles from './index.module.scss';

const PageSection = ({ children, classes }) => {
  return (
    <section
      className={classNames(
        styles.root,
        classes && classes.root ? classes.root : ''
      )}
    >
      <div
        className={classNames(
          styles.container,
          classes && classes.container ? classes.container : ''
        )}
      >
        <div
          className={classNames(
            styles.content,
            classes && classes.content ? classes.content : ''
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default PageSection;
