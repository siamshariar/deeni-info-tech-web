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
            <h2>Apps for Scholars & Da&apos;wah organizations</h2>
          </div>
          <div className={styles.text}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              reiciendis veniam commodi id maxime quo, nihil quae ab suscipit
              cupiditate hic quaerat alias dolores quisquam in voluptatum
              temporibus minima repellat.
            </p>
          </div>
          <div className={styles.btn}>
            <Link href="/applications-for-scholars-and-dawah-organizations">
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
