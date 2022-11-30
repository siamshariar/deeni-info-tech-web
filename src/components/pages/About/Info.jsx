import Section from '../../utils/Section';
import styles from './Info.module.scss';

const AboutInfo = () => {
  return (
    <Section
      classes={{
        root: styles.root,
        container: styles.container,
        content: styles.content,
      }}
    >
      <h2 className="title_r highlight">Deeni Info Tech</h2>
      <p className="paragraph_b">
        <span className="highlight">Lorem ipsum dolor</span> sit amet
        consectetur adipisicing elit. Ullam exercitationem odio repellendus modi
        atque minima, voluptatem quasi molestiae ipsa sint officiis beatae
        quibusdam enim laudantium nulla praesentium soluta molestias accusamus!
      </p>
      <p className="paragraph_r">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
        exercitationem odio repellendus modi atque minima, voluptatem quasi
        molestiae ipsa sint officiis beatae quibusdam enim laudantium nulla
        praesentium soluta molestias accusamus!
      </p>
      <p className="paragraph_r">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
        exercitationem odio repellendus modi atque minima, voluptatem quasi
        molestiae ipsa sint officiis beatae quibusdam enim laudantium nulla
        praesentium soluta molestias accusamus!
      </p>
    </Section>
  );
};

export default AboutInfo;
