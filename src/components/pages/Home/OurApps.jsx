import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import ButtonNext from '../../utils/SwiperButtonSecondary/SwiperButtonNext';
import ButtonPrev from '../../utils/SwiperButtonSecondary/SwiperButtonPrev';
import Container from '../../utils/Container';
import Button from '../../utils/ButtonSecondary';
import styles from './OurApps.module.scss';

const OurApps = () => {
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
                      src="/img/apps/1.jpg"
                      alt=""
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center center"
                      loading="eager"
                      unoptimized
                    />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles.slide}>
                  <div className={styles.image}>
                    <Image
                      src="/img/apps/2.jpg"
                      alt=""
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center center"
                      loading="eager"
                      unoptimized
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
                      unoptimized
                    />
                  </div>
                </div>
              </SwiperSlide>

              <div className={styles.nav}>
                <ButtonPrev />
                <ButtonNext />
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

export default OurApps;
