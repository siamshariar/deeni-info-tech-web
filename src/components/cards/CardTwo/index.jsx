import Link from 'next/link';
import styles from './index.module.scss';

const Card = ({ title, imagePath, url, excerpt }) => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.image}>
          <div className={styles.img}>
            <img src={imagePath} alt="" />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.title}>{title}</div>
          <div className={styles.excerpt}>
            {excerpt} <span>See more</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
