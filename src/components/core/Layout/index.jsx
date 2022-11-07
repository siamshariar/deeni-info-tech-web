import { useEffect, useRef, useContext } from 'react';
// import { useRouter } from 'next/router';
import classNames from 'classnames';
// import { LayoutContext } from "../../contexts/LayoutContext";
// import Intro from "../utils/Intro";
import Header from '../Header';
// import Navbar from "./Navbar";
import Footer from '../Footer';
// import Sidebar from "./Sidebar";
import styles from './index.module.scss';

const Layout = ({ children }) => {
  // const handleScroll = (event) => {
  //   if (event.target.scrollTop > 160) {
  //     event.target.classList.add(styles.scrolled);
  //   } else {
  //     event.target.classList.remove(styles.scrolled);
  //   }

  //   const parcentScrolled =
  //     (event.target.scrollTop * 100) /
  //     (event.target.firstChild.offsetHeight - event.target.offsetHeight);

  //   progressRef.current.style.width = `${parcentScrolled}%`;
  // };

  // const handleProgressWidth = () => {
  //   let parcentScrolled = 0;
  //   if (
  //     scrollbarRef.current.firstChild.offsetHeight >
  //     scrollbarRef.current.offsetHeight
  //   ) {
  //     parcentScrolled =
  //       (scrollbarRef.current.scrollTop * 100) /
  //       (scrollbarRef.current.firstChild.offsetHeight -
  //         scrollbarRef.current.offsetHeight);
  //   }
  //   progressRef.current.style.width = `${parcentScrolled}%`;
  // };

  // useEffect(() => {
  //   handleProgressWidth();
  // }, [progress]);

  // useEffect(() => {
  //   window.addEventListener("resize", handleProgressWidth);
  //   return () => window.removeEventListener("resize", handleProgressWidth);
  // }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Header />
      </div>

      <main className={styles.viewport}>
        <div className={styles.page}>{children}</div>
      </main>

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
