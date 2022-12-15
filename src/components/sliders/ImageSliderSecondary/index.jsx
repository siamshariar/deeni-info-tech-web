import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import ButtonNext from '../../utils/SwiperButtonPrimary/SwiperButtonNext';
import ButtonPrev from '../../utils/SwiperButtonPrimary/SwiperButtonPrev';
import styles from './index.module.scss';

const Slider = () => {
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
  //       c = newImage.querySelector('img');

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
        <div className="slider_wrapper">
          <div className="slider img_right">
            <div className="ts_images">
              <Swiper
                className={styles.swiper} //
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                modules={[Autoplay]}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                onSwiper={(swiper) => setSwiperInstance(swiper)}
              >
                <SwiperSlide>
                  <div className="tsi_item">
                    <Image src="/img/slides/01.jpg" alt="hotel" layout="fill" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="tsi_item">
                    <Image src="/img/slides/02.jpg" alt="hotel" layout="fill" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="tsi_item">
                    <Image src="/img/slides/03.jpg" alt="hotel" layout="fill" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="ts_contents">
              <div className="tsc_item">
                <h3>Our apps</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur veniam dolorum exercitationem magnam nam, ullam
                  ratione quam aut, quasi aliquid porro! Eius repudiandae
                  placeat illo deleniti officiis obcaecati animi explicabo?
                </p>
                <div className="tsc_links">
                  <Link href="/develop-islamic-applications">
                    <a className="btn_primary">Read More</a>
                  </Link>
                </div>
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
