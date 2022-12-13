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
                <Link href="/grateful">
                  <a onClick={(e) => controller(e)}>Grateful</a>
                </Link>
              </li>

              <li className={styles.page}>
                <Link href="/donate">
                  <a onClick={(e) => controller(e)}>Support Us</a>
                </Link>
              </li>

              <li className={styles.page}>
                <Link href="/contact">
                  <a onClick={(e) => controller(e)}>Contact</a>
                </Link>
              </li>

              <li className={`${styles.page} ${styles.footer}`}>
                <Link href="/">
                  <a onClick={(e) => controller(e)}>Policy</a>
                </Link>
                <Link href="/">
                  <a onClick={(e) => controller(e)}>Legal</a>
                </Link>
              </li>

              <li
                className={`${styles.page} ${styles.footer} ${styles.accessibility}`}
              >
                <Link href="/">
                  <a onClick={(e) => controller(e)}>Accessibility Statement</a>
                </Link>
              </li>

              <li
                className={`${styles.page} ${styles.footer} ${styles.accessibility}`}
              >
                <a
                  href="http://deeniinfotech.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Deeni Info Tech Stories
                </a>
              </li>
            </ul>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
