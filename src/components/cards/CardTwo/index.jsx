import Link from 'next/link';
import styles from './index.module.scss';

const Card = ({ name, title, imagePath, url, excerpt }) => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <a href={url} target="_blank">
          <div className={styles.image}>
            <div className={styles.img}>
              <img src={imagePath} alt="" />
            </div>
          </div>
        </a>
        <div className={styles.content}>
          <a href={url} target="_blank">
            <div className={styles.title}>{name}</div>
          </a>
          <div className={styles.excerpt}>
            {excerpt}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
