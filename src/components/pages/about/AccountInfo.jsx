import Section from '../../utils/Section';
import styles from './AccountInfo.module.scss';

const AccountInfo = () => {
  return (
    <Section
      classes={{
        root: styles.root,
        container: styles.container,
        content: styles.content,
      }}
    >
      <div className={styles.intro}>
        <div className={styles.title}>
          <h2 className="title_r highlight">Deeni Info Tech</h2>
        </div>
        <div className={styles.text}>
          <p className="paragraph_r">
            <span className="highlight">Lorem ipsum dolor</span> sit amet
            consectetur adipisicing elit. Possimus blanditiis totam quaerat
            enim, et perferendis, qui amet unde dolorem repellendus expedita
            asperiores laboriosam repudiandae. Quae commodi odit veniam in
            laborum!
          </p>
          <p className="paragraph_r">
            <span className="highlight">Lorem ipsum dolor</span> sit amet
            consectetur adipisicing elit. Voluptas totam sint blanditiis,
            officia fugiat quam aliquam minus consectetur harum illo iusto eius?
            Enim sint ipsum veritatis culpa maxime assumenda nostrum?
          </p>
        </div>
      </div>

      <div className={styles.detail}>
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
    </Section>
  );
};

export default AccountInfo;
