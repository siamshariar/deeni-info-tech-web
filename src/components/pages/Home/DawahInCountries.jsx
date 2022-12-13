import Link from 'next/link';
import Section from '../../utils/Section';
import DawahInCountries from '../../ui/DawahInCountries';
import styles from './DawahInCountries.module.scss';

const SectionDawahInCountries = () => {
  return (
    <Section
      classes={{
        root: styles.root,
        container: styles.container,
        content: styles.content,
      }}
    >
      <div className={styles.inner}>
        <div className={styles.image}>
          <DawahInCountries />
        </div>
        <div className={styles.detail}>
          <div className={styles.title}>
            <h2>Support Non-Muslim Countries</h2>
            {/* <h2>Dawah in non-muslim countries</h2> */}
          </div>
          <div className={styles.text}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              reiciendis veniam commodi id maxime quo, nihil quae ab suscipit
              cupiditate hic quaerat alias dolores quisquam in voluptatum
              temporibus minima repellat.
            </p>
          </div>
          <div className={styles.btn}>
            <Link href="/support-non-muslim-countries">
              <a>Read more</a>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SectionDawahInCountries;
