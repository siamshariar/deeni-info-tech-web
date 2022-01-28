import Container from "../../utils/Container";
import styles from "./index.module.scss";

const AboutContent = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            exercitationem odio repellendus modi atque minima, voluptatem quasi
            molestiae ipsa sint officiis beatae quibusdam enim laudantium nulla
            praesentium soluta molestias accusamus!
          </p>
        </div>
      </Container>
    </div>
  );
};

export default AboutContent;
