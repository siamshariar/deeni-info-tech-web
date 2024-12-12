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
                <Link href="/" legacyBehavior>
                  <a onClick={(e) => controller(e)}>Home</a>
                </Link>
              </li>

              <li className={styles.page}>
                <Link href="/about" legacyBehavior>
                  <a onClick={(e) => controller(e)}>About Us</a>
                </Link>
              </li>

              <li className={styles.page}>
                <Link href="/contact" legacyBehavior>
                  <a onClick={(e) => controller(e)}>Contact</a>
                </Link>
              </li>

              <li className={styles.page}>
                <Link href="/donate" legacyBehavior>
                  <a onClick={(e) => controller(e)}>Donation</a>
                </Link>
              </li>

              <li className={styles.page}>
                <Link href="/grateful" legacyBehavior>
                  <a onClick={(e) => controller(e)}>Grateful</a>
                </Link>
              </li>

              <li className={styles.page}>
                <Link href="/scholars-recommendation" legacyBehavior>
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
                <Link href="/applications-for-scholars-and-dawah-organizations" legacyBehavior>
                  <a onClick={(e) => controller(e)}>
                    Applications for Scholars & Da&apos;wah organizations
                  </a>
                </Link>
              </li>

              <li
                className={`${styles.page} ${styles.footer} ${styles.accessibility}`}
              >
                <Link href="/applications-for-non-muslim-countries" legacyBehavior>
                  <a onClick={(e) => controller(e)}>
                    Applications for Non-Muslim Countries
                  </a>
                </Link>
              </li>

              <li
                className={`${styles.page} ${styles.footer} ${styles.accessibility}`}
              >
                <Link href="/develop-islamic-applications" legacyBehavior>
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
