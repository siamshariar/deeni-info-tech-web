import Link from 'next/link';
import Image from 'next/image';
import Container from '../../utils/Container';
import Logo from '../../icons/Logo';
import styles from './index.module.scss';

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <div className={styles.logo}>
            <Link href="/about">
              <a>
                {/* <Logo /> */}
                <Image
                  src="/img/logo/logo-resiged.png"
                  alt="logo"
                  width={140}
                  height={70}
                />
              </a>
            </Link>
          </div>

          <ul className={styles.menu}>
            <li>
              <Link href="/donate">
                <a>Support</a>
              </Link>
            </li>
            <li>
              <Link href="/grateful">
                <a>Grateful</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>

          <p className={styles.copyright}>
            <span>&copy; {new Date().getFullYear()} </span>
            <Link href="/about">
              <a>Deeni Info Tech</a>
            </Link>
            <span> All Rights Reserved</span>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
