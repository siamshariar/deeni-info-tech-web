import Container from '../../utils/Container';
import styles from './index.module.scss';

const Donation = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.intro}>
          <div className={styles.title}>
            <h2>Deeni Info Tech</h2>
          </div>
          <div className={styles.text}>
            <p>
              <span className={styles.highlight}>Lorem ipsum dolor</span> sit
              amet consectetur adipisicing elit. Possimus blanditiis totam
              quaerat enim, et perferendis, qui amet unde dolorem repellendus
              expedita asperiores laboriosam repudiandae. Quae commodi odit
              veniam in laborum!
            </p>
            <p>
              <span className={styles.highlight}>Lorem ipsum dolor</span> sit
              amet consectetur adipisicing elit. Voluptas totam sint blanditiis,
              officia fugiat quam aliquam minus consectetur harum illo iusto
              eius? Enim sint ipsum veritatis culpa maxime assumenda nostrum?
            </p>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.account}>
              <h2>Account title</h2>
              <p>
                <span>Account No:</span> 2554155800574
              </p>
            </div>
            <div className={styles.account}>
              <h2>Account title</h2>
              <p>
                <span>Account No:</span> 2554155800574
              </p>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.account}>
              <h2>Account title</h2>
              <p>
                <span>Account No:</span> 2554155800574
              </p>
            </div>
            <div className={styles.account}>
              <h2>Account title</h2>
              <p>
                <span>Account No:</span> 2554155800574
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Donation;
