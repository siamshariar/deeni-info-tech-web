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
            <h2>Applications for Non-Muslim Countries</h2>
            {/* <h2>Dawah in non-muslim countries</h2> */}
          </div>
          <div className={styles.text}>
            <p>
              Most of the people of Muslim countries, focusing Da’wah on their country, they also have enough human resources. But non-muslim countries getting lack human resources in their Da’wah work, and sometimes it is difficult for them to get technological support.
            </p>
          </div>
          <div className={styles.btn}>
            <Link href="/applications-for-non-muslim-countries">
              <a>Read more</a>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SectionDawahInCountries;
