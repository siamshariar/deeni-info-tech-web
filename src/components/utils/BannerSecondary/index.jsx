import Image from 'next/image';
import Section from '../Section';
import styles from './index.module.scss';

const Banner = ({ image, title, subTitle }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.base}>
        {/* <div className={styles.bg_image}>
          <img src={bgImage} alt="banner" />
        </div> */}
        <div className={styles.section}>
          <Section
            classes={{
              root: styles.root,
              container: styles.container,
              content: styles.content,
            }}
          >
            <div className={styles.inner}>
              <div className={styles.left}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subTitle}</p>
              </div>
              <div className={styles.right}>
                <div className={styles.image}>
                  <video
                      className={styles.banner_video}
                      poster="/img/banner/deeni-info-tech-earth-banner.png"
                      autoPlay loop muted playsInline
                  >
                    <source src="/video/banner/deeni-info-tech-earth.mp4" />
                  </video>
                  {/*<Image*/}
                  {/*  src={image}*/}
                  {/*  alt="banner"*/}
                  {/*  layout="fill"*/}
                  {/*  objectFit="cover"*/}
                  {/*  objectPosition="center center"*/}
                  {/*  loading="eager"*/}
                  {/*/>*/}
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default Banner;
