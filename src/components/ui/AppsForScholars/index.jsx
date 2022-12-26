import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Autoplay } from 'swiper';
import { apps } from '../../../data/apps-for-scholars';
import ButtonNext from '../../utils/SwiperButtonPrimary/SwiperButtonNext';
import ButtonPrev from '../../utils/SwiperButtonPrimary/SwiperButtonPrev';
import Tooltip from '../../utils/Tooltip';
import styles from './index.module.scss';

const AppsForScholars = () => {
  const [isTooltipShown, setIsTooltipShown] = useState(false);
  const [tooltipText, setTooltipText] = useState('');
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleMouseMove = (e) => {
    const tooltip = document.getElementById('AppsForScholarsTooltip');

    // TODO: fix tooltip right pos
    // console.log(tooltip.offsetWidth);
    // console.log(e.target.offsetParent);

    tooltip.style.top = `${e.clientY}px`;
    tooltip.style.left = `${e.clientX}px`;
  };

  return (
    <>
      <Tooltip isShown={isTooltipShown} text={tooltipText} />

      <div className={styles.slider}>
        <div
          className={styles.swiper_container}
          onMouseEnter={() => setIsTooltipShown(true)}
          onMouseLeave={() => setIsTooltipShown(false)}
          onMouseMove={(e) => handleMouseMove(e)}
        >
          <Swiper
            className={styles.swiper}
            slidesPerView={2}
            slidesPerGroup={2}
            grid={{
              rows: 3,
            }}
            spaceBetween={0}
            modules={[Grid, Autoplay]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            // loop={true}
            // loopFillGroupWithBlank={true}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
          >
            {apps &&
              apps.filter((item) => item.displayInSlider === 1 ).map((app, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={styles.slide}
                    onMouseEnter={() => setTooltipText(app.tooltip)}
                    onMouseLeave={() => setTooltipText('')}
                  >
                    {/*<Link href={app.url}>*/}
                      <a className={styles.image}>
                        <Image
                          src={app.imgPath}
                          alt=""
                          layout="fill"
                          objectFit="contain"
                          objectPosition="center center"
                          loading="eager"
                        />
                      </a>
                    {/*</Link>*/}
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
    </>
  );
};

export default AppsForScholars;
