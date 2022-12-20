import Section from '../../utils/Section';
import styles from '../About/Info.module.scss';

const GratefulInfo = () => {
  return (
    <Section
      classes={{
        root: styles.root,
        container: styles.container,
        content: styles.content,
      }}
    >
      <p className="paragraph_b">
        <span className="highlight">First and foremost</span> , we want to express our sincere gratitude to Allah Subhanahu
        Wa Ta'ala. What we have accomplished so far never would have been possible without Allah's help and guidance.
      </p>
      <p className="paragraph_r">
        We are thankful for all the Islamic applications; they have inspired us. Specially QuranEnc, HadithEnc, IslamHouse,
        IslamQa, Quran.com and some other Quran & Hadith apps.
      </p>
      <p className="paragraph_r">
        We are grateful to everyone who are connected with us (members, donors, developers, quality assurance team and data processing team).
      </p>
    </Section>
  );
};

export default GratefulInfo;
