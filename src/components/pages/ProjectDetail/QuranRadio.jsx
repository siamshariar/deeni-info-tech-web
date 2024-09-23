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

const QuranRadioDetail = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [swiperInstance2, setSwiperInstance2] = useState(null);
  const [swiperInstance3, setSwiperInstance3] = useState(null);
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
                    Discover the beauty of Quranic recitations with Quran.radio, a platform that provides a diverse range of live radio and reciters. Immerse yourself in the authenticity of real-time broadcasts in the Live mode, or enjoy the serenity of recorded recitations in the Reciters mode. Additionally, enjoy the convenience of saving favorites and tracking your previous listening sessions. Explore the beauty of the Quran at your fingertips.
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
              <h2><span className={aboutStyles.highlight}>Quran.radio</span> Apps</h2>
              <p>
                  <Link href="/p/quran-radio#play_store">
                    <a>
                      {/*<span className={aboutStyles.highlight}>Android</span> */}
                      <span style={{ color: `#1377FD` }}>Android</span>
                    </a>
                  </Link>
                  <span style={{margin: `0 5px`}}>|</span>
                  <Link href="/p/quran-radio#app_store">
                      <a>
                          {/*<span className={aboutStyles.highlight}>Android</span> */}
                          <span style={{ color: `#1377FD` }}>iPhone</span>
                      </a>
                  </Link>
                  <span style={{margin: `0 5px`}}>|</span>
                  <Link href="/p/quran-radio#website">
                      <a>
                          {/*<span className={aboutStyles.highlight}>Android</span> */}
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


        {/*{app.playStore && (*/}
            <div className={countriesStyles.inner}>
              <div className={countriesStyles.image}>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    modules={[Autoplay]}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    onSwiper={(swiper) => setSwiperInstance2(swiper)}
                >
                  {/*{app.playStore && app.playStore.images.map((data, index) => (*/}
                  {/*    <SwiperSlide>*/}
                  {/*      <img src={app.playStore.images[index]} />*/}
                  {/*    </SwiperSlide>*/}
                  {/*))}*/}
                    <SwiperSlide>
                        <img src="/img/our_apps/quran-radio/android/m1.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/img/our_apps/quran-radio/android/m2.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/img/our_apps/quran-radio/android/m3.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/img/our_apps/quran-radio/android/m4.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/img/our_apps/quran-radio/android/m5.png" />
                    </SwiperSlide>
                </Swiper>
              </div>
              <div id="play_store" className={countriesStyles.detail}>
                <div className={countriesStyles.title}>
                  <h2 className={aboutStyles.highlight}>Android App</h2>
                  {/*<a href={app.playStore && app.playStore.link} target="_blank">*/}
                  <a href="https://play.google.com/store/apps/details?id=com.deeniinfotech.quran.radio" target="_blank">
                    <img style={{height: `40px`, width: `auto`}} src="/img/play-store-badge.png" />
                  </a>
                </div>
                <div className={countriesStyles.text}>

                  <div className={styles.app_info_wrapper}>
                    {/*<span className={styles.app_icon}>*/}
                    {/*  <InstallMobileIcon />*/}
                    {/*</span>*/}
                    {/*<a href={app.playStore && app.playStore.link} target="_blank">*/}
                    <a href="https://play.google.com/store/apps/details?id=com.deeniinfotech.quran.radio" target="_blank">
                      {/*<span style={{ color: `#1377FD` }}>{app.playStore && app.playStore.link}</span>*/}
                      <span style={{ color: `#1377FD` }}>https://play.google.com/store/apps/details?id=com.deeniinfotech.quran.radio</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
        {/*)}*/}

          {/*{app.playStore && (*/}
          <div style={{borderTop: `1px solid #dedede;`}} className={countriesStyles.app_in_vn_left_slider}>
              <div className={countriesStyles.image}>
                  <Swiper
                      spaceBetween={0}
                      slidesPerView={1}
                      loop={true}
                      modules={[Autoplay]}
                      autoplay={{
                          delay: 3000,
                          disableOnInteraction: false,
                      }}
                      onSwiper={(swiper) => setSwiperInstance2(swiper)}
                  >
                      {/*{app.playStore && app.playStore.images.map((data, index) => (*/}
                      {/*    <SwiperSlide>*/}
                      {/*      <img src={app.playStore.images[index]} />*/}
                      {/*    </SwiperSlide>*/}
                      {/*))}*/}
                      <SwiperSlide>
                          <img src="/img/our_apps/quran-radio/iphone/ip_1.png" />
                      </SwiperSlide>
                      <SwiperSlide>
                          <img src="/img/our_apps/quran-radio/iphone/ip_2.png" />
                      </SwiperSlide>
                      <SwiperSlide>
                          <img src="/img/our_apps/quran-radio/iphone/ip_3.png" />
                      </SwiperSlide>
                      <SwiperSlide>
                          <img src="/img/our_apps/quran-radio/iphone/ip_4.png" />
                      </SwiperSlide>
                  </Swiper>
              </div>
              <div id="app_store" className={countriesStyles.detail}>
                  <div className={countriesStyles.title}>
                      <h2 className={aboutStyles.highlight}>iPhone App</h2>
                      {/*<a href={app.playStore && app.playStore.link} target="_blank">*/}
                      <a>
                          <img style={{height: `40px`, width: `auto`}} src="/img/app-store-badge.png" />
                      </a>

                  </div>
                  <div className={countriesStyles.text}>

                      {/*<div className={styles.app_info_wrapper}>*/}
                      <div>
                          {/*<span className={styles.app_icon}>*/}
                          {/*  <InstallMobileIcon />*/}
                          {/*</span>*/}
                          {/*<a href={app.playStore && app.playStore.link} target="_blank">*/}
                              {/*<span style={{ color: `#1377FD` }}>{app.playStore && app.playStore.link}</span>*/}
                          {/*</a>*/}
                          <span>(AppStore link will be updated shortly.)</span> <br/><br/>
                          <span>Installation process,</span> <br/>
                          <span>
                              1. Open Safari browser and visit
                              <a href="https://www.quran.radio" target="_blank"><span style={{ color: `#1377FD` }}> www.Quran.radio</span></a>,
                              click on "Share" icon at bottom-middle.
                          </span> <br/>
                          <span>2. Scroll to bottom & click on "Add to Home Screen".</span> <br/>
                          <span>3. Click on "Add" to confirm.</span> <br/>
                      </div>
                  </div>
              </div>
          </div>
          {/*)}*/}

          {/*{app.website && (*/}
          <div  style={{borderTop: `1px solid #dedede;`}} className={classNames(countriesStyles.inner, countriesStyles.app_in_vn_right_slider)}>
              <div className={countriesStyles.image}>
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
                      {/*{app.website && app.website.images.map((data, index) => (*/}
                      {/*    <SwiperSlide>*/}
                      {/*      <img src={app.website.images[index]} />*/}
                      {/*    </SwiperSlide>*/}
                      {/*))}*/}
                      <SwiperSlide>
                          <img src="/img/our_apps/quran-radio/website/w1.png" />
                      </SwiperSlide>
                      <SwiperSlide>
                          <img src="/img/our_apps/quran-radio/website/w2.png" />
                      </SwiperSlide>
                      <SwiperSlide>
                          <img src="/img/our_apps/quran-radio/website/w3.png" />
                      </SwiperSlide>
                  </Swiper>
              </div>
              <div id="website" className={countriesStyles.detail}>
                  <div className={countriesStyles.title}>
                      <h2 className={aboutStyles.highlight}>Website</h2>
                  </div>
                  <div className={countriesStyles.text}>
                      <div className={styles.app_info_wrapper}>
                  <span className={styles.app_icon}>
                    <WebsiteIcon />
                  </span>
                          {/*<a href={app.url} target="_blank">*/}
                          <a href="https://www.quran.radio" target="_blank">
                              {/*<span style={{ color: `#1377FD` }}>{app.website && app.website.text}</span>*/}
                              <span style={{ color: `#1377FD` }}>www.Quran.radio</span>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
          {/*)}*/}

      </Section>

    </>
  );
};

export default QuranRadioDetail;
