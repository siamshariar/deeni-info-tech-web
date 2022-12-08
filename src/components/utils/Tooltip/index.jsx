import classNames from 'classnames';
import styles from './index.module.scss';

const Tooltip = ({ isShown, text }) => {
  return (
    <div
      id="AppsForScholarsTooltip"
      className={classNames(styles.root, isShown ? styles.active : '')}
      // style={{
      //   opacity: isShown ? 1 : 0,
      //   display: isShown ? 'block' : 'none',
      // }}
    >
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default Tooltip;
