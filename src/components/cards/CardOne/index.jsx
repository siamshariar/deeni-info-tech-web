import styles from './index.module.scss';

const Card = ({ text }) => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
