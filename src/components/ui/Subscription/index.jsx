import Container from '../../utils/Container';
import styles from './index.module.scss';

const Subscription = () => {
  return (
    <div className={styles.root}>
      <Container>
        <div className={styles.content}>
          <div className={styles.title}>
            <h2>
              <span>Get</span> in Touch
            </h2>
          </div>
          <div className={styles.text}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Similique accusamus, animi ab a eius, quos aliquam cum aspernatur
              cumque recusandae inventore soluta repellendus quas odio rem.
              Aliquid tempora reiciendis doloribus.
            </p>
          </div>
          <form className={styles.form} action="" method="POST">
            <input type="text" name="email" placeholder="Enter your email" />
            <button type="submit" name="submit">
              Subscribe
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Subscription;
