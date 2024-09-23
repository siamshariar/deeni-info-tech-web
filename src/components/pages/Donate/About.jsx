import Link from 'next/link';
import Container from '../../utils/Container';
import styles from '../Home/About.module.scss';

const DonationAbout = () => {
  return (
    <div id="sadaqah-jariyah" className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          {/*<div className={styles.title}>*/}
          {/*  /!*<h1>*!/*/}
          {/*  /!*  <span className={styles.highlight}>Deeni Info Tech</span>*!/*/}
          {/*  /!*</h1>*!/*/}
          {/*  <h2>*/}
          {/*    <span className={styles.highlight}>Deen </span>*/}
          {/*    means religion <span className={styles.highlight}>Islam</span>.*/}
          {/*  </h2>*/}
          {/*</div>*/}

          <div className={styles.text}>
            <p>
              <span className={styles.highlight}>Sadaqah Jariyah</span> means a continuous, flowing, and ongoing charity. It is one of the most rewarding acts we
              can do in our lives, as the benefits of giving this type of charity can be reaped in this lifetime and
              long after our deaths.
            </p>

            <p>
              Dear <span className={styles.highlight}>Brothers and Sisters</span>, in order to succeed, we need your
              help to go forward on <span style={{ color: `#1377FD` }}> <Link href="/about">this journey</Link></span>.
            </p>

            <p>
              Our first identity is Muslim. We Muslims are BROTHERS.
              Brotherhood in Islam is a comprehensive concept
              that is based upon good character with others, treating others the way we want to be treated,
              and uniting together upon common values.
            </p>

            <p>
              Let’s join together to <span className={styles.highlight}>Spread Da'wah</span>.
            </p>

            <p>
              The believers are but one brotherhood.
              <span className={styles.text_ref}>[Al Quran - 49 : 10]</span>
            </p>

            <p>
              We are asking for your kind support in every possible way.
              Please provide us with advice, donations, stand by us, and pray for us.
            </p>

            <div className={styles.highlight_border}>
              <h2 style={{ marginTop: `22px`}}>
                Together we can do better In'Sha Allah.
              </h2>
            </div>

          </div>

        </div>
      </Container>
    </div>
  );
};

export default DonationAbout;
