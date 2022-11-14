import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid } from 'swiper';
import Container from '../../utils/Container';
import styles from './Scholars.module.scss';

const images = [
  '/img/apps/logo01.png',
  '/img/apps/logo02.png',
  '/img/apps/logo03.png',
  '/img/apps/logo04.png',
  '/img/apps/logo05.png',
  '/img/apps/logo06.png',
  '/img/apps/logo07.png',
  '/img/apps/logo08.png',
  '/img/apps/logo09.png',
  '/img/apps/logo10.png',
  '/img/apps/logo11.png',
  '/img/apps/logo12.png',
];

const HomeScholars = () => {
  return (
    <div className={styles.root}>
      <Container>
        <div className={styles.content}>
          <div className={styles.slider}>
            <div className={styles.swiper_container}>
              <Swiper
                className={styles.swiper}
                slidesPerView={2}
                slidesPerGroup={1}
                grid={{
                  rows: 3,
                }}
                spaceBetween={0}
                modules={[Grid]}
                // loop={true}
              >
                {images &&
                  images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className={styles.slide}>
                        <div className={styles.image}>
                          <Image
                            src={image}
                            alt=""
                            layout="fill"
                            objectFit="contain"
                            objectPosition="center center"
                            loading="eager"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
          <div className={styles.detail}>
            <div className={styles.title}>
              <h2>Apps for Scholars</h2>
            </div>
            <div className={styles.text}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquid reiciendis veniam commodi id maxime quo, nihil quae ab
                suscipit cupiditate hic quaerat alias dolores quisquam in
                voluptatum temporibus minima repellat.
              </p>
            </div>
            <div className={styles.btn}>
              <Link href={'/'}>
                <a>Read more</a>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeScholars;
