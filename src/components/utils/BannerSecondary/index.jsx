import Image from 'next/image';
import Section from '../Section';
import styles from './index.module.scss';

const Banner = ({ image, title, subTitle }) => {
  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `linear-gradient(0deg, #38633a, #2b96c7)` }}
    >
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
                  <Image
                    src={image}
                    alt="banner"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center center"
                    loading="eager"
                  />
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
