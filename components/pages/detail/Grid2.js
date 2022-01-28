import Container from "../../utils/Container";
import ServiceGrid from "../../cards/ServiceGrid/Grid2";
import styles from "./index.module.scss";

const DetailContent = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <div className={styles.image}>
            <ServiceGrid />
          </div>
          <div className={styles.detail}>
            <div className={styles.title}>
              <h2>Autumn</h2>
            </div>
            <div className={styles.text}>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam similique dolorem repellendus nam, asperiores, hic totam
                eveniet eligendi ea iste assumenda ex distinctio! Temporibus
                labore velit, molestiae nesciunt debitis neque.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repudiandae explicabo quisquam odio molestias animi quas
                nesciunt facere minima, cumque quia laboriosam? Placeat tempora
                cupiditate similique quos, sit harum eum quas!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam similique dolorem repellendus nam, asperiores, hic totam
                eveniet eligendi ea iste assumenda ex distinctio! Temporibus
                labore velit, molestiae nesciunt debitis neque.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DetailContent;
