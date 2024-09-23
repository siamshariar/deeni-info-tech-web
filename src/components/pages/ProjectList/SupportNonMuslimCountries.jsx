import DawahInCountries from '../../ui/DawahInCountries';
import Section from '../../utils/Section';
import styles from './SupportNonMuslimCountries.module.scss';
import countriesStyles from './DawahInCountries.module.scss';
import aboutStyles from '../Home/About.module.scss';
import Container from "../../utils/Container";
import VerseSlider from "./VerseSlider";
import classNames from "classnames";
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from "swiper";
import { useState } from 'react';
import { quranAppVerses } from '../../../data/quran-app-verses';
import { hadithAppVerses } from '../../../data/hadith-app-verses';

const SupportNonMuslimCountries = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [swiperInstance2, setSwiperInstance2] = useState(null);
  const [swiperInstance3, setSwiperInstance3] = useState(null);
  const [swiperInstance4, setSwiperInstance4] = useState(null);
  return (
    <>
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
              <h2>Applications for Non-Muslim Countries</h2>
            </div>
            {/*<div className={styles.text}>*/}
            {/*  <p>*/}
            {/*    Most of the people of Muslim country, focusing Da’wah on their*/}
            {/*    country, they also have enough human resources. But non-muslim*/}
            {/*    countries getting lack human resources in their Da’wah work, and*/}
            {/*    sometime it is difficult for them to get technological support.*/}
            {/*  </p>*/}
            {/*</div>*/}
            {/* <div className={styles.btn}>
            <Link href="/applications-for-scholars-and-dawah-organizations">
              <a>Read more</a>
            </Link>
          </div> */}
            <div className={styles.detail_text}>
              <p>
                Most of the people of Muslim countries, focusing Da’wah on their country, they also have enough human resources. But non-muslim countries getting lack human resources in their Da’wah work, and sometimes it is difficult for them to get technological support.
              </p>
              <p>
                Beside that the majority of individuals in non-Muslim nations are
                ignorant of Islam, and some of them even have the wrong concept.
                Terrorism and extremism have no place in Islam; individuals who
                engage in such behavior are in a wrong way.
              </p>
              <p>
                Islam is the religion of peace. It is crucial to spread Dawah so
                that everyone can think and come to their own judgments based on
                the right path that Islam instructs us to follow.
              </p>

            </div>
          </div>

          <div className={styles.slider}>
            <DawahInCountries detailPage={true} />
          </div>
        </div>

      </Section>

      <div className={aboutStyles.wrapper}>
        <Container>
          <div className={aboutStyles.content}>
            <div className={aboutStyles.text}>
              <p>
                Invite (people) to the way of your <span className={aboutStyles.highlight}>Lord</span> with  <span className={aboutStyles.highlight}>wisdom</span>.
                <span className={aboutStyles.text_ref}>[Al Quran - 16 : 125]</span>
              </p>
              <p>
                We are collaborating with these criteria(
                <span style={{ color: `#1377FD` }}><Link href="/applications-for-non-muslim-countries#applications">described below</Link></span>
                ) in non-Muslim countries
                with the support of specific countries&apos; scholars and Muslim
                communities. All of these applications are in their native
                language.
              </p>

              {/*<div className={aboutStyles.highlight_border}>*/}
              {/*  <h2 style={{ marginTop: `22px`}}>*/}
              {/*    Alhamdulillah, we are developing these sorts of websites and mobile applications throughout the world.*/}
              {/*  </h2>*/}
              {/*</div>*/}

            </div>

            {/*<div style={{ marginTop: `22px` }} className={aboutStyles.title}>*/}
            {/*  <h2 style={{ fontSize: `1.4em`, marginBottom: `0` }}>*/}
            {/*    We are working for*/}
            {/*    <span className={aboutStyles.highlight}> three </span>*/}
            {/*    sets of <span className={aboutStyles.highlight}>goals</span>.*/}
            {/*  </h2>*/}
            {/*</div>*/}

          </div>
        </Container>
      </div>

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
                <h2>Quran Application</h2>
                <p>
                  People are generally more interested in e-books these days than in
                  textbooks. It would be preferable if we could provide a lightweight
                  Quran application in their native language that is easy to memorize,
                  accessible, and recommendable to others. People might realize the
                  universal truth by reading the holy Quran.
                </p>
                <p>
                  The Quran is the light for mankind and leads people from darkness to
                  light. It is a complete set of guidelines for humans.
                </p>
              </div>

              <div className={styles.app_card_inner_verse}>
                <VerseSlider verses={quranAppVerses} />
              </div>

            </div>
          </div>

          <div className={styles.inner}>
            <div className={classNames(styles.detail_text, styles.app_card)}>
              <div className={styles.app_card_inner}>
                <h2>Hadith Application</h2>
                <p>
                  The holy Quran is the foundation, rest of all the things well
                  described in Hadith. All Muslim nations have access to Hadith books
                  and applications; on the other hand, it is not so available in
                  non-Muslim nations.
                </p>

                <p>
                  In the Hadith application, important hadiths will be classified and
                  listed in their native languages.
                </p>

                <p>
                  It is essential to understand and abide by hadith in order to stay
                  on the righteous path. It will be helpful for Muslims from
                  non-Muslim nations and new Muslims. Even any individuals can know
                  about the Prophet Muhammad (PBUH) and his advice for mankind.
                </p>
              </div>

              <div className={styles.app_card_inner_verse}>
                <VerseSlider verses={hadithAppVerses} />
              </div>

            </div>
          </div>

          <div className={styles.inner}>
            <div className={classNames(styles.detail_text, styles.app_card)}>
              <div className={styles.app_card_inner}>
                <h2>Islamic Platform application</h2>
                <p>
                  Muslims living in non-Muslim countries will use this as a
                  community application. This application will consist of two main sections.
                </p>

                <h3 style={{ marginBottom: 0 }}>For Muslims:</h3>

                <p style={{ marginBottom: `5px` }}>
                  Muslims living in non-Muslim countries need a platform to grow up
                  together. Some of the key features are:
                </p>

                <ul>
                  <li>Islamic discussion</li>
                  <li>Islamic blogs</li>
                  <li>Online Islamic library</li>
                  <li>Islamic articles & Fataawa</li>
                  <li>Masjid information</li>
                  <li>Forum for Muslims community</li>
                  <li>Guideline articles & captured videos for new Muslim</li>
                </ul>

                <h3 style={{ marginBottom: 0 }}>For non-Muslims:</h3>

                <p style={{ marginBottom: `5px` }}>
                  Most non-Muslims are unfamiliar with Islam, and some of them have
                  misleading ideas about it, particularly as it relates to <span className={aboutStyles.highlight}>terrorism
                  and extremism</span>. Nevertheless, <span className={aboutStyles.highlight}>Islam</span> is the religion of <span className={aboutStyles.highlight}>peace</span>, a
                  complete way of life. Some of the key features are:
                </p>

                <ul>
                  <li>Fundamentals about Islam</li>
                  <li>Articles for non-muslims</li>
                  <li>Dubbing important lectures of scholars</li>
                </ul>



              </div>

            </div>
          </div>

          <div className={aboutStyles.wrapper}>
            <Container>
              <div style={{ paddingTop: `50px` }} className={aboutStyles.content}>
                <div className={aboutStyles.text}>
                  <div className={aboutStyles.text}>
                    <div className={aboutStyles.highlight_border}>
                      <h2 style={{ marginTop: `22px`}}>
                        You might wonder why we are creating above applications
                        separately for each non-Muslim country? You will get the
                        <span className={aboutStyles.highlight}> answer below</span>.
                      </h2>
                    </div>
                  </div>
                </div>

                {/*<div style={{ marginTop: `22px` }} className={aboutStyles.title}>*/}
                {/*  <h2 style={{ fontSize: `1.4em`, marginBottom: `0` }}>*/}
                {/*    We are working for*/}
                {/*    <span className={aboutStyles.highlight}> three </span>*/}
                {/*    sets of <span className={aboutStyles.highlight}>goals</span>.*/}
                {/*  </h2>*/}
                {/*</div>*/}

              </div>
            </Container>
          </div>

          <div id="applications-branding" className={styles.inner}>
            <div className={classNames(styles.detail_text, styles.app_card)}>
              <div className={styles.app_card_inner}>
                <h2>Branding & Marketing</h2>


                <p>
                  The keys to spreading are branding and marketing. To reach a larger
                  audience, all sorts of companies do their own branding.
                </p>

                <p style={{ marginBottom: `5px` }}>
                  All of these three applications will be brand in non-Muslim
                  countries. The whole application will be in their native language
                  using their county LTD (if available). It will make them feel like
                  it is theirs. We will continually engage in various forms of
                  marketing, including:
                </p>

                <ul>
                  <li>Providing Strickers & Prospectus</li>
                  <li>Social media engagement</li>
                  <li>Share & spread with the help of Muslim community</li>
                </ul>

                <p>
                  Developing apps is not that challenging, but it&apos;s difficult to
                  spread it and reach more people. This is a continuous process.
                </p>
              </div>
            </div>
          </div>

        </Section>
      </div>

      <div className={aboutStyles.wrapper}>
        <Container>
          <div className={aboutStyles.content}>

            <div className={styles.detail_text}>
              <h2>Applications in <span className={aboutStyles.highlight}>Vietnam</span></h2>

              <p>
                Let&apos;s count Vietnam as a <span className={aboutStyles.highlight}>model</span> of non-Muslim countries. What we
                have <span className={aboutStyles.highlight}>done and are doing</span> now, will also be the <span className={aboutStyles.highlight}>same</span> in other
                countries.
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
                onSwiper={(swiper) => setSwiperInstance(swiper)}
            >
              <SwiperSlide>
                <img src="/img/slides/quran-vn-web.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img/slides/quran-vn-mobile.jpg" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={countriesStyles.detail}>
            <div className={countriesStyles.title}>
              <a href="https://www.quran.vn/" target="_blank">
                <h2 style={{ color: `#1377FD` }}>Quran.vn</h2>
              </a>
            </div>
            <div className={countriesStyles.text}>
              <p>
                Quran application in Vietnamese.
              </p>
            </div>
          </div>
        </div>

        <div className={countriesStyles.app_in_vn_left_slider}>
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
              <SwiperSlide>
                <img src="/img/slides/hadith-vn-web.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img/slides/hadith-vn-mobile.jpg" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={classNames(countriesStyles.detail, countriesStyles.detail_left_slider)}>
            <div className={countriesStyles.title}>
              <a href="https://www.hadith.vn/" target="_blank">
                <h2 style={{ color: `#1377FD` }}>Hadith.vn</h2>
              </a>
            </div>
            <div className={countriesStyles.text}>
              <p>
                Hadith application in Vietnamese.
              </p>
            </div>
          </div>
        </div>

        <div className={classNames(countriesStyles.inner, countriesStyles.app_in_vn_right_slider)}>
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
                onSwiper={(swiper) => setSwiperInstance3(swiper)}
            >
              <SwiperSlide>
                <img src="/img/slides/islam-vn.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img/slides/islam-com-vn.jpg" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={countriesStyles.detail}>
            <div className={countriesStyles.title}>
              <h2 >Islam.vn</h2>
            </div>
            <div className={countriesStyles.text}>
              <p>
                Islamic Platform application in Vietnam.
              </p>
            </div>
          </div>
        </div>

        <div className={countriesStyles.app_in_vn_left_slider}>
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
                onSwiper={(swiper) => setSwiperInstance4(swiper)}
            >
              <SwiperSlide>
                <img src="/img/slides/branding-vn-1.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img/slides/branding-vn-2.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img/slides/branding-vn-3.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img/slides/branding-vn-3_2.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img/slides/branding-vn-4.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img/slides/branding-vn-5.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img/slides/branding-vn-6.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img/slides/branding-vn-7.jpg" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={classNames(countriesStyles.detail, countriesStyles.detail_left_slider)}>
            <div className={countriesStyles.title}>
              <h2>Branding</h2>
            </div>
            <div className={countriesStyles.text}>
              <p>
                Branding & Marketing in Vietnam.
              </p>
            </div>
          </div>
        </div>





        {/*<div className={countriesStyles.inner}>*/}
        {/*  <div className={countriesStyles.detail}>*/}
        {/*    <div className={countriesStyles.title}>*/}
        {/*      <a href="https://www.hadith.vn/" target="_blank">*/}
        {/*        <h2 style={{ color: `#1377FD` }}>Hadith.vn</h2>*/}
        {/*      </a>*/}
        {/*    </div>*/}
        {/*    <div className={countriesStyles.text}>*/}
        {/*      <p>*/}
        {/*        Quran application in Vietnamese.*/}
        {/*      </p>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <div className={countriesStyles.image}>*/}
        {/*    <Swiper*/}
        {/*        spaceBetween={0}*/}
        {/*        slidesPerView={1}*/}
        {/*        loop={true}*/}
        {/*        modules={[Autoplay]}*/}
        {/*        autoplay={{*/}
        {/*          delay: 3000,*/}
        {/*          disableOnInteraction: false,*/}
        {/*        }}*/}
        {/*        onSwiper={(swiper) => setSwiperInstance2(swiper)}*/}
        {/*    >*/}
        {/*      <SwiperSlide>*/}
        {/*        <img src="/img/slides/monzureelahi.png" />*/}
        {/*      </SwiperSlide>*/}
        {/*      <SwiperSlide>*/}
        {/*        <img src="/img/slides/monzureelahi.png" />*/}
        {/*      </SwiperSlide>*/}
        {/*    </Swiper>*/}
        {/*  </div>*/}
        {/*</div>*/}



      </Section>

    </>
  );
};

export default SupportNonMuslimCountries;
