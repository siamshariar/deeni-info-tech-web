import Container from '../../utils/Container';
import ContactForm from './Contact';
import styles from './index.module.scss';

const AboutContent = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <h2>Deeni Info Tech</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            exercitationem odio repellendus modi atque minima, voluptatem quasi
            molestiae ipsa sint officiis beatae quibusdam enim laudantium nulla
            praesentium soluta molestias accusamus!
          </p>
        </div>

        <div className={styles.contact}>
          <ContactForm />
        </div>
      </Container>
    </div>
  );
};

export default AboutContent;
