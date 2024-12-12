import Link from 'next/link';
import classNames from 'classnames';
import ArrowRightIcon from '../../icons/ArrowRight';
import styles from './index.module.scss';

const Button = ({ url, text, isReverse, isActive }) => {
  return (
    <div
      className={classNames(
        styles.btn,
        isReverse ? styles.rev : '',
        isActive ? styles.active : ''
      )}
    >
      <Link href={url} legacyBehavior>
        <a className={styles.link}>
          <ArrowRightIcon />
          <span>{text}</span>
        </a>
      </Link>
    </div>
  );
};

export default Button;
