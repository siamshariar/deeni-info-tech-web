import Link from "next/link";
import Container from "../../utils/Container";
import styles from "./index.module.scss";

const MainNav = ({ open, controller }) => {
  return (
    <div
      className={open ? `${styles.wrapper} ${styles.active}` : styles.wrapper}
    >
      <Container>
        <ul className={styles.pages}>
          <li className={styles.page}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>

          <li className={styles.page}>
            <Link href="/about-us">
              <a>About Us</a>
            </Link>
          </li>

          <li className={styles.page}>
            <Link href="/grateful">
              <a>Grateful</a>
            </Link>
          </li>

          <li className={styles.page}>
            <Link href="/donation">
              <a>Support Us</a>
            </Link>
          </li>

          <li className={styles.page}>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>

          <li className={`${styles.page} ${styles.footer}`}>
            <Link href="/">
              <a>Policy</a>
            </Link>
            <Link href="/">
              <a>Legal</a>
            </Link>
          </li>

          <li
            className={`${styles.page} ${styles.footer} ${styles.accessibility}`}
          >
            <Link href="/">
              <a>Accessibility Statement</a>
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
  );
};

export default MainNav;
