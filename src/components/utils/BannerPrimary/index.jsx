import Container from '../Container';
import styles from './index.module.scss';
import ScrollAnimationButton from '../ScrollAnimationButton';

const Banner = ({ bgImage, title, subTitle }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.base}>
        {/* <div className={styles.image}>
          <img src={bgImage} alt="banner" />
        </div> */}
        <div className={styles.content}>
          <Container>
            <div className={styles.container}>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.subtitle}>{subTitle}</p>
            </div>
          </Container>
        </div>

        <ScrollAnimationButton />
      </div>
    </div>
  );
};

export default Banner;
