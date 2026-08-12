import Section from '../../utils/Section';
import styles from '../ProjectList/SupportNonMuslimCountries.module.scss';
import countriesStyles from '../ProjectList/DawahInCountries.module.scss';
import aboutStyles from '../Home/About.module.scss';
import Container from "../../utils/Container";
import classNames from "classnames";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from "swiper";
import { useState } from 'react';
import WebsiteIcon from "../../icons/Website";
import Link from 'next/link';

const DeeniTVDetail = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  return (
    <>
      <div id="applications">
        <Section
            classes={{
              root: styles.root,
              container: styles.container,
              content: styles.content,
            }}
        >
          <div className={styles.inner}>
            <div className={classNames(styles.detail_text, styles.app_card)}>
              <div className={styles.app_card_inner}>
                <p>
                  Experience premium Islamic content in a revolutionary lean-back TV interface designed for modern audiences. Deeni.tv brings you high-quality spiritual programming including Quran recitations, Islamic lectures, historical documentaries, and daily reflections, all in a 24/7 live streaming experience with multi-language support and scheduled programming.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </div>

      <div id="apps" className={aboutStyles.wrapper}>
        <Container>
          <div className={aboutStyles.content}>
            <div className={styles.detail_text}>
              <h2><span className={aboutStyles.highlight}>Deeni.tv</span> Apps</h2>
              <p>
                <Link href="/p/deeni-tv#website" legacyBehavior>
                  <a>
                    <span style={{ color: `#1377FD` }}>Website</span>
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </div>

      <Section
          classes={{
            root: styles.root,
            container: styles.container_app_in_vn,
            content: styles.content,
          }}
      >
        <div className={classNames(countriesStyles.inner2, countriesStyles.app_in_vn_right_slider)}>
          <div id="website" className={countriesStyles.detail2}>
            <div className={countriesStyles.title}>
              <h2 className={aboutStyles.highlight}>Website</h2>
            </div>
            <div className={countriesStyles.text}>
              <div className={styles.app_info_wrapper}>
                <span className={styles.app_icon}>
                  <WebsiteIcon />
                </span>
                <a href="https://www.deeni.tv" target="_blank" rel="noreferrer">
                  <span style={{ color: `#1377FD` }}>www.Deeni.tv</span>
                </a>
              </div>
            </div>
          </div>
          <div className={countriesStyles.websitessc}>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                modules={[Autoplay]}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                onSwiper={(swiper) => setSwiperInstance(swiper)}
            >
              <SwiperSlide>
                <img src="/img/our_apps/deeni-tv/website/w1.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img/our_apps/deeni-tv/website/w2.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img/our_apps/deeni-tv/website/w3.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img/our_apps/deeni-tv/website/w4.png" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Section>
    </>
  );
};

export default DeeniTVDetail;
