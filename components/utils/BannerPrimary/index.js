import Container from "../Container";
import styles from "./index.module.scss";

const Banner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.base}>
        <div className={styles.image}>
          <img src="img/banner/banner-about.jpg" alt="banner" />
        </div>
        <div className={styles.content}>
          <Container>
            <div className={styles.container}>
              <h1 className={styles.title}>Deeni Info Tech</h1>
              <p className={styles.subtitle}>
                A non profitable software company for Deeni projects
              </p>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Banner;
