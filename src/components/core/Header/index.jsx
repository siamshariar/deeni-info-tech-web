import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '../../utils/Container';
import MainNav from '../MainNav';
// import Logo from '../../icons/Logo';
import Logo from '../../utils/Logo';
// import DropdownIcon from '../../icons/Dropdown';
// import Language from '../../utils/Language';
import Button from '../../utils/ButtonPrimary';
import styles from './index.module.scss';

const Header = () => {
  const header = useRef(null);
  const hamburger = useRef(null);
  const [offset, setOffset] = useState(0);
  const [didMount, setDidMount] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    setDidMount(true);

    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };

    if (offset > 3) {
      header.current.classList.add(styles.scrolled);
      setScrolled(true);
    } else {
      header.current.classList.remove(styles.scrolled);
      setScrolled(false);
    }

    header.current.classList.add(styles.loaded);

    return () => setDidMount(false);
  }, [offset]);

  // overlay menu
  const [navOpenStatus, setNavOpenStatus] = useState(false);

  const handleNavOpen = (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    // navOpenStatus ? setNavOpenStatus(false) : setNavOpenStatus(true);
    setNavOpenStatus(!navOpenStatus);
    hamburger.current.classList.toggle(styles.active);
    header.current.classList.toggle(styles.active);
    setActive(!isActive);
  };

  return (
    <>
      <MainNav open={navOpenStatus} controller={handleNavOpen} />

      <header className={styles.wrapper} ref={header}>
        <Container>
          <div className={styles.content}>
            <div className={styles.cell}>
              <div className={styles.menu_burger}>
                <button
                  className={styles.hamburger}
                  onClick={(event) => handleNavOpen(event)}
                  ref={hamburger}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
              {/* <div className={styles.lang}>
                <button className={styles.lang_btn}>
                  <span>EN</span>
                  <span className={styles.dropdown_icon}>
                    <DropdownIcon />
                  </span>
                </button>
              </div> */}
            </div>
            <div className={styles.cell}>
              <div className={styles.logo}>
                <Link href="/">
                  <a>
                    {/* <Logo /> */}
                    <Image
                      src={
                        isScrolled && !isActive
                          ? '/img/logo/logo-resiged.png'
                          : '/img/logo/logo-white-resiged.png'
                      }
                      alt="logo"
                      width={200}
                      height={100}
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className={styles.cell}>
              <Button
                url="/donate"
                text="Donate now"
                isReverse={isScrolled}
                isActive={isActive}
              />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
