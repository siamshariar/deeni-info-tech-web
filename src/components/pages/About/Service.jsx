import Section from '../../utils/Section';
import Card from '../../cards/CardOne';
import styles from './Service.module.scss';

const ServiceSection = () => {
  return (
    <Section
      classes={{
        root: styles.root,
        container: styles.container,
        content: styles.content,
      }}
    >
      <div className={styles.title}>
        <h2 className="title_r">Get in Touch</h2>
      </div>

      <div className={styles.text}>
        <p className="paragraph_r">
          <span className="highlight">Lorem ipsum dolor</span> sit amet
          consectetur adipisicing elit. Ullam exercitationem odio repellendus
          modi atque minima, voluptatem quasi molestiae ipsa sint officiis
          beatae quibusdam enim laudantium nulla praesentium soluta molestias
          accusamus!
        </p>
      </div>

      <div className={styles.grid}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card text="Four ways to unlock the true power of TV through programmatic" />
          <Card text="Four ways to unlock the true power of TV through programmatic" />
          <Card text="Four ways to unlock the true power of TV through programmatic" />
        </div>
      </div>
    </Section>
  );
};

export default ServiceSection;
