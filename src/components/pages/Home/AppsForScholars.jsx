// import { useState } from 'react';
import Link from 'next/link';
// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Grid, Autoplay } from 'swiper';
import AppsForScholars from '../../ui/AppsForScholars';
// import { apps } from '../../../data/apps-for-scholars';
// import ButtonNext from '../../utils/SwiperButtonPrimary/SwiperButtonNext';
// import ButtonPrev from '../../utils/SwiperButtonPrimary/SwiperButtonPrev';
// import Tooltip from '../../utils/Tooltip';
import Section from '../../utils/Section';
import styles from './AppsForScholars.module.scss';

const SectionAppsForScholars = () => {
  return (
    <Section
      classes={{
        root: styles.root,
        container: styles.container,
        content: styles.content,
      }}
    >
      <div className={styles.inner}>
        <div className={styles.detail}>
          <div className={styles.title}>
            {/* <h2>Apps for Scholars</h2> */}
            <h2>Applications for Scholars & Da&apos;wah organizations</h2>
          </div>
          <div className={styles.text}>
            <p>
              Develop Islamic websites and mobile apps for Scholars, Da’wah organizations
              and under their supervision.

              All the Islamic scholars are our assets; they are themselves like an institute.
              It is so important to keep all of their resources (books, lectures, articles,
              and research papers) together in one place.
            </p>
          </div>
          <div className={styles.btn}>
            <Link href="/applications-for-scholars-and-dawah-organizations" legacyBehavior>
              <a>Read more</a>
            </Link>
          </div>
        </div>

        <div className={styles.slider}>
          <AppsForScholars />
        </div>
      </div>
    </Section>
  );
};

export default SectionAppsForScholars;
