import Image from 'next/image';
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
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className="slider_wrapper">
          <div className="slider img_right">
            <div className="ts_images">
              <div className="tsi_item">
                <Image src="/img/slides/01.jpg" alt="hotel" layout="fill" />
              </div>
              <div className="tsi_item">
                <Image src="/img/slides/01.jpg" alt="hotel" layout="fill" />
              </div>
              <div className="tsi_item">
                <Image src="/img/slides/01.jpg" alt="hotel" layout="fill" />
              </div>
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
                  <a href="#" className="btn_primary">
                    BOOK
                  </a>
                </div>
              </div>

              <div className="ts_ctrl">
                <div className="scbtn scbtn_prev tsbtn_prev">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="83.354"
                    height="20.707"
                    viewBox="0 0 83.354 20.707"
                  >
                    <g transform="translate(-1515.646 -3843.646)">
                      <line
                        x2="82"
                        transform="translate(1517 3854)"
                        fill="none"
                        stroke="#c2d5c1"
                        strokeWidth="1"
                      />
                      <line
                        y1="10"
                        x2="10"
                        transform="translate(1516 3844)"
                        fill="none"
                        stroke="#c2d5c1"
                        strokeWidth="1"
                      />
                      <line
                        x1="10"
                        y1="10"
                        transform="translate(1516 3854)"
                        fill="none"
                        stroke="#c2d5c1"
                        strokeWidth="1"
                      />
                    </g>
                  </svg>
                </div>
                <div className="scbtn scbtn_next tsbtn_next">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="83.354"
                    height="20.482"
                    viewBox="0 0 83.354 20.482"
                  >
                    <g transform="translate(-1653 -3843.871)">
                      <line
                        y1="9.888"
                        x2="9.888"
                        transform="translate(1736 3864) rotate(180)"
                        fill="none"
                        stroke="#393939"
                        strokeWidth="1"
                      />
                      <line
                        x1="9.888"
                        y1="9.888"
                        transform="translate(1736 3854.112) rotate(180)"
                        fill="none"
                        stroke="#393939"
                        strokeWidth="1"
                      />
                      <line
                        x2="82"
                        transform="translate(1653 3854)"
                        fill="none"
                        stroke="#393939"
                        strokeWidth="1"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
