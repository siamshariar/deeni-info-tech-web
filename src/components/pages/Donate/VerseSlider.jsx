import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { verses } from '../../../data/donation-verses';
import ButtonNext from '../../utils/SwiperButtonPrimary/SwiperButtonNext';
import ButtonPrev from '../../utils/SwiperButtonPrimary/SwiperButtonPrev';
import Section from '../../utils/Section';
import styles from '../Home/VerseSlider.module.scss';

const VerseSlider = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <Section
      classes={{
        root: styles.root,
        container: styles.container,
        content: styles.content,
      }}
    >
      <div className={styles.inner}>
        <div className={styles.slider}>
          <Swiper
            className={styles.swiper} //
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
          >
            {verses &&
              verses.map((verse, index) => (
                <SwiperSlide key={index}>
                  <div className={styles.item}>
                    <blockquote className={styles.text}>
                      {verse.text}
                    </blockquote>
                    <div className={styles.label}>
                      {verse.ref}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        <div className={styles.nav}>
          <ButtonPrev swiper={swiperInstance} />
          <ButtonNext swiper={swiperInstance} />
        </div>
      </div>
    </Section>
  );
};

export default VerseSlider;
