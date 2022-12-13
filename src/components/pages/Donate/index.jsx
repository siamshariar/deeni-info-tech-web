// import classNames from 'classnames';
import Section from '../../utils/Section';
import DonateForm from './Form';
import styles from './index.module.scss';

const DonateContent = () => {
  return (
    <Section
      classes={{
        root: styles.root,
        container: styles.container,
        content: styles.content,
      }}
    >
      <div className={styles.inner}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="col-span-1 md:col-span-8 lg:col-span-9">
            <div className={styles.left}>
              <div className={styles.card}>
                <DonateForm />
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-4 lg:col-span-3">
            <div className={styles.right}>
              <div className="grid grid-cols-1 gap-8">
                <div className={styles.card}>
                  <h3>Questions</h3>
                  <p>Do you accept Zakat?</p>
                  <p>Do you accept donations via PayPal?</p>
                  <p>I am from Bangladesh. How do I donate?</p>
                </div>

                <div className={styles.card}>
                  <h3>Questions</h3>
                  <p>Do you accept Zakat?</p>
                  <p>Do you accept donations via PayPal?</p>
                  <p>I am from Bangladesh. How do I donate?</p>
                </div>

                <div className={styles.card}>
                  <h3>Questions</h3>
                  <p>Do you accept Zakat?</p>
                  <p>Do you accept donations via PayPal?</p>
                  <p>I am from Bangladesh. How do I donate?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default DonateContent;
