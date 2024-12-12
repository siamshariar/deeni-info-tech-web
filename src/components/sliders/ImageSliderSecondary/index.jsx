import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import ButtonNext from '../../utils/SwiperButtonPrimary/SwiperButtonNext';
import ButtonPrev from '../../utils/SwiperButtonPrimary/SwiperButtonPrev';
import styles from './index.module.scss';

const Slider = ({ displayButton }) => {
  // function initTertiarySlider(slider) {
  //   const images = [...slider.querySelectorAll('.ts_images .tsi_item')];
  //   // const contents = [...slider.querySelectorAll(".ts_contents .tsc_item")];

  //   const backButton = slider.querySelector('.tsbtn_prev');
  //   const forwardButton = slider.querySelector('.tsbtn_next');

  //   let clickable = true,
  //     activeSlide = 0;

  //   // initial state
  //   function initSliderState() {
  //     images.forEach((slide, index) => {
  //       if (index === activeSlide) {
  //         gsap.to(slide, {
  //           duration: 0,
  //           zIndex: 2,
  //           xPercent: 0,
  //           yPercent: 0,
  //           opacity: 1,
  //         });
  //       } else {
  //         gsap.to(slide, {
  //           duration: 0,
  //           zIndex: 1,
  //           xPercent: 0,
  //           yPercent: 0,
  //           opacity: 1,
  //         });
  //       }
  //     });
  //   }
  //   initSliderState();

  //   // change slide
  //   function changeSlide(forward, slides, active) {
  //     let newIndex = forward
  //       ? (active + 1) % slides.length
  //       : (active - 1 + slides.length) % slides.length;

  //     let t,
  //       lastImage = slides[active],
  //       newImage = slides[newIndex],
  //       contact = newImage.querySelector('img');

  //     t = forward ? [0, -100] : [0, 100];

  //     const tweens = gsap.timeline({
  //       force3D: 1,
  //       onComplete: function () {
  //         clickable = true;
  //       },
  //     });

  //     tweens
  //       .set(newImage, {
  //         autoAlpha: 1,
  //         zIndex: 2,
  //       })
  //       .set(lastImage, {
  //         autoAlpha: 1,
  //         zIndex: 3,
  //       })
  //       .fromTo(
  //         newImage,
  //         {
  //           xPercent: t[0],
  //         },
  //         {
  //           duration: 1.1,
  //           xPercent: 0,
  //           ease: 'expo.inOut',
  //           stagger: 0,
  //         },
  //         0
  //       )
  //       .fromTo(
  //         lastImage,
  //         {
  //           xPercent: 0,
  //         },
  //         {
  //           duration: 1.1,
  //           xPercent: t[1],
  //           ease: 'expo.inOut',
  //         },
  //         0
  //       )

  //       .set(lastImage, {
  //         autoAlpha: 0,
  //         clearProps: 'zIndex, xPercent',
  //         zIndex: 2,
  //       })

  //       .set(newImage, {
  //         zIndex: 3,
  //       });

  //     return newIndex;
  //   }

  //   // event listeners
  //   function callChangeSlide(forward) {
  //     if (clickable) {
  //       clickable = false;
  //       activeSlide = changeSlide(forward, images, activeSlide);
  //       // activeSmall = changeSlide(forward, slidesSmall, activeSmall);
  //       // setTimeout(() => {
  //       //   clickable = true;
  //       // }, speed * 1000);
  //     }
  //   }

  //   forwardButton.addEventListener('click', () => {
  //     callChangeSlide(true);
  //   });

  //   backButton.addEventListener('click', () => {
  //     callChangeSlide(false);
  //   });
  // }

  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.slider_wrapper}>
          <div className="slider img_right">
            {
              displayButton !== true
                  ? <Link href="/develop-islamic-applications" legacyBehavior>
                      <div style={{ cursor: `pointer` }} className="ts_images">
                        <Swiper
                            className={styles.swiper} //
                            spaceBetween={0}
                            slidesPerView={1}
                            loop={true}
                            modules={[Autoplay]}
                            autoplay={{
                              delay: 4000,
                              disableOnInteraction: false,
                            }}
                            onSwiper={(swiper) => setSwiperInstance(swiper)}
                        >
                          <SwiperSlide>
                            <div className="tsi_item">
                              <img
                                  src="/img/slides/quran-tube-webb.jpg"
                                  alt=""
                                  layout="fill"
                                  objectFit="cover"
                                  objectPosition="center center"
                                  loading="eager"
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="tsi_item">
                              <img
                                  src="/img/slides/quran-radio.jpg"
                                  alt=""
                                  layout="fill"
                                  objectFit="cover"
                                  objectPosition="center center"
                                  loading="eager"
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="tsi_item">
                              <img
                                  src="/img/slides/deeni-tube.jpg"
                                  alt=""
                                  layout="fill"
                                  objectFit="cover"
                                  objectPosition="center center"
                                  loading="eager"
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="tsi_item">
                              <img
                                  src="/img/slides/quran-ac_2025.jpg"
                                  alt=""
                                  layout="fill"
                                  objectFit="cover"
                                  objectPosition="center center"
                                  loading="eager"
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="tsi_item">
                              <img
                                  src="/img/slides/hadith_ac_2025.jpg"
                                  alt=""
                                  layout="fill"
                                  objectFit="cover"
                                  objectPosition="center center"
                                  loading="eager"
                              />
                            </div>
                          </SwiperSlide>
                        </Swiper>
                      </div>
                    </Link>
                  : <div className="ts_images">
                    <Swiper
                        className={styles.swiper} //
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        modules={[Autoplay]}
                        autoplay={{
                          delay: 4000,
                          disableOnInteraction: false,
                        }}
                        onSwiper={(swiper) => setSwiperInstance(swiper)}
                    >
                       <SwiperSlide>
                        <div className="tsi_item">
                          <img
                              src="/img/slides/quran-tube-webb.jpg"
                              alt=""
                              layout="fill"
                              objectFit="cover"
                              objectPosition="center center"
                              loading="eager"
                          />
                        </div>
                      </SwiperSlide>
                       <SwiperSlide>
                        <div className="tsi_item">
                          <img
                              src="/img/slides/quran-radio.jpg"
                              alt=""
                              layout="fill"
                              objectFit="cover"
                              objectPosition="center center"
                              loading="eager"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="tsi_item">
                          <img
                              src="/img/slides/deeni-tube.jpg"
                              alt=""
                              layout="fill"
                              objectFit="cover"
                              objectPosition="center center"
                              loading="eager"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="tsi_item">
                          <img
                              src="/img/slides/quran-ac_2025.jpg"
                              alt=""
                              layout="fill"
                              objectFit="cover"
                              objectPosition="center center"
                              loading="eager"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="tsi_item">
                          <img
                              src="/img/slides/hadith_ac_2025.jpg"
                              alt=""
                              layout="fill"
                              objectFit="cover"
                              objectPosition="center center"
                              loading="eager"
                          />
                        </div>
                      </SwiperSlide>
                     
                    </Swiper>
                  </div>
            }

            <div className="ts_contents">
              <div className="tsc_item">
                <h3>Develop Islamic applications</h3>
                <p>
                  Alhamdulillah, some useful Islamic applications already exist. But one of our primary goals is to
                  create more promising Islamic applications. The more we all grow, the more people we will be able
                  to reach and involve.
                </p>


                {
                  displayButton !== true
                      ? <div className={styles.btn}>
                        <Link href="/develop-islamic-applications" legacyBehavior>
                          <a>Read More</a>
                        </Link>
                      </div>
                      : ''
                }

              </div>

              <div className="ts_ctrl">
                <ButtonPrev swiper={swiperInstance} />
                <ButtonNext swiper={swiperInstance} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;

