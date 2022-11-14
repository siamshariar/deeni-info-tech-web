import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import Image from 'next/image';
import classNames from 'classnames';
import Container from '../../utils/Container';
import Button from '../../utils/ButtonSecondary';
import styles from './Apps.module.scss';

const Apps = () => {
  return (
    <div className={styles.root}>
      <div className={styles.slider_wrapper}>
        <Container>
          <div className={styles.slider}>
            <Swiper
              className={styles.swiper} //
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
            >
              <SwiperSlide>
                <div className={styles.slide}>
                  <div className={styles.image}>
                    <Image
                      src="/img/apps/01.jpg"
                      alt=""
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center center"
                      loading="eager"
                    />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles.slide}>
                  <div className={styles.image}>
                    <Image
                      src="/img/apps/02.jpg"
                      alt=""
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center center"
                      loading="eager"
                    />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles.slide}>
                  <div className={styles.image}>
                    <Image
                      src="/img/apps/03.jpg"
                      alt=""
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center center"
                      loading="eager"
                    />
                  </div>
                </div>
              </SwiperSlide>

              <div className={styles.nav}>
                <SwiperButtonPrev />
                <SwiperButtonNext />
              </div>
            </Swiper>
          </div>
        </Container>
      </div>

      <div className={styles.content}>
        <div className={styles.ctn_inner}>
          <div className={styles.left}>
            <div className={styles.left_btn}>
              <Button
                url="/" //
                text="Enquire now"
                isReverse={true}
                isActive={false}
              />
            </div>
          </div>
          <div className={styles.right}>
            <h3>Our apps</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              veniam dolorum exercitationem magnam nam, ullam ratione quam aut,
              quasi aliquid porro! Eius repudiandae placeat illo deleniti
              officiis obcaecati animi explicabo?
            </p>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SwiperButtonNext = () => {
  const swiper = useSwiper();
  return (
    <button
      className={classNames(styles.btn, styles.next)}
      onClick={() => swiper.slideNext()}
    >
      <svg
        width="16"
        height="19"
        viewBox="0 0 16 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 1L1 9M1 9L9 18M1 9L16 9" stroke="#4B4B4B"></path>
      </svg>
    </button>
  );
};

const SwiperButtonPrev = () => {
  const swiper = useSwiper();
  return (
    <button
      className={classNames(styles.btn, styles.prev)}
      onClick={() => swiper.slidePrev()}
    >
      <svg
        width="16"
        height="19"
        viewBox="0 0 16 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 1L1 9M1 9L9 18M1 9L16 9" stroke="#4B4B4B"></path>
      </svg>
    </button>
  );
};

export default Apps;
