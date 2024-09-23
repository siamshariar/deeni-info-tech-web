import Link from 'next/link';
import Container from '../../utils/Container';
import styles from './index.module.scss';

const MainNav = ({ open, controller }) => {
  return (
    <div
      className={open ? `${styles.wrapper} ${styles.active}` : styles.wrapper}
    >
      <div className={styles.scrollarea}>
        <div className={styles.inner}>
          <Container>
            <ul className={styles.pages}>
              <li className={styles.page}>
                <Link href="/">
                  <a onClick={(e) => controller(e)}>Home</a>
                </Link>
              </li>

              <li className={styles.page}>
                <Link href="/about">
                  <a onClick={(e) => controller(e)}>About Us</a>
                </Link>
              </li>

              <li className={styles.page}>
                <Link href="/contact">
                  <a onClick={(e) => controller(e)}>Contact</a>
                </Link>
              </li>

              <li className={styles.page}>
                <Link href="/donate">
                  <a onClick={(e) => controller(e)}>Donation</a>
                </Link>
              </li>

              <li className={styles.page}>
                <Link href="/grateful">
                  <a onClick={(e) => controller(e)}>Grateful</a>
                </Link>
              </li>

              <li className={styles.page}>
                <Link href="/scholars-recommendation">
                  <a style={{fontSize: `18px`}} onClick={(e) => controller(e)}>Scholars Recommendation</a>
                </Link>
              </li>

              <li className={`${styles.page} ${styles.footer}`}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <a style={{ pointerEvents: `none` }}>OUR GOALs</a>
              </li>

              <li
                className={`${styles.page} ${styles.footer} ${styles.accessibility}`}
              >
                <Link href="/applications-for-scholars-and-dawah-organizations">
                  <a onClick={(e) => controller(e)}>
                    Applications for Scholars & Da&apos;wah organizations
                  </a>
                </Link>
              </li>

              <li
                className={`${styles.page} ${styles.footer} ${styles.accessibility}`}
              >
                <Link href="/applications-for-non-muslim-countries">
                  <a onClick={(e) => controller(e)}>
                    Applications for Non-Muslim Countries
                  </a>
                </Link>
              </li>

              <li
                className={`${styles.page} ${styles.footer} ${styles.accessibility}`}
              >
                <Link href="/develop-islamic-applications">
                  <a onClick={(e) => controller(e)}>
                    Develop Islamic applications
                  </a>
                </Link>
              </li>
            </ul>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
