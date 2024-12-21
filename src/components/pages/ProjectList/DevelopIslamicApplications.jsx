import { apps } from '../../../data/our-apps';
import Card from '../../cards/CardThree';
import Section from '../../utils/Section';
import styles from './DevelopIslamicApplications.module.scss';
import aboutStyles from '../Home/About.module.scss';
import Container from "../../utils/Container";
import Link from 'next/link';

const DevelopIslamicApplications = () => {
  return (
    <>
      {/*<Section*/}
      {/*  classes={{*/}
      {/*    root: styles.root,*/}
      {/*    container: styles.container,*/}
      {/*    content: styles.content,*/}
      {/*  }}*/}
      {/*>*/}

      {/*  /!*<HomeImageSliderSecondary />*!/*/}

      {/*  <div className={styles.inner}>*/}
      {/*    <div className={styles.detail}>*/}
      {/*      <div className={styles.title}>*/}
      {/*        <h2>Develop Islamic applications</h2>*/}
      {/*      </div>*/}
      {/*      <div className={styles.text}>*/}
      {/*        <p>*/}
      {/*          Alhamdulillah, some useful Islamic applications already exist. But*/}
      {/*          one of our primary goals is to create more promising Islamic*/}
      {/*          applications. The more we all grow, the more people we will be*/}
      {/*          able to reach and involve. All of our applications{' '}*/}
      {/*          <span className={styles.bold}>*/}
      {/*            will not require payment and are fully Ads free*/}
      {/*          </span>*/}
      {/*        </p>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*  <div className={styles.inner}>*/}
      {/*    <div className={styles.detail_text}>*/}
      {/*      <h3 className={styles.title_s}>Some of our applications include:</h3>*/}
      {/*      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">*/}
      {/*        {apps.slice(0, 3).map((app, index) => (*/}
      {/*          <Card*/}
      {/*            key={app.id}*/}
      {/*            title={app.tooltip}*/}
      {/*            imagePath={app.imgPath}*/}
      {/*            url={app.url}*/}
      {/*            excerpt={app.excerpt}*/}
      {/*          />*/}
      {/*        ))}*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*  <div className={styles.inner}>*/}
      {/*    <div className={styles.detail_text}>*/}
      {/*      <h2>Quran.ac</h2>*/}
      {/*      <p>*/}
      {/*        Quran application. All possible Quran translations will be available*/}
      {/*        here. Some of the features are,*/}
      {/*      </p>*/}

      {/*      <ul>*/}
      {/*        <li>Read full chapter or read verse by verse</li>*/}
      {/*        <li>Play audio</li>*/}
      {/*        <li>Bookmark verses</li>*/}
      {/*        <li>Copy verse, copy link</li>*/}
      {/*        <li>Share in social</li>*/}
      {/*        <li>Quran subjective (subject wise verses)</li>*/}
      {/*        <li>Multi translations</li>*/}
      {/*        <li>Custom settings</li>*/}
      {/*      </ul>*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*  <div className={styles.inner}>*/}
      {/*    <div className={styles.detail_text}>*/}
      {/*      <h2>Hadith.ac</h2>*/}

      {/*      <p>*/}
      {/*        Hadith application. Hadith books and category wise important*/}
      {/*        Hadiths. Some of the features are,*/}
      {/*      </p>*/}

      {/*      <ul>*/}
      {/*        <li>Read from hadith book or category wise</li>*/}
      {/*        <li>Bookmark hadith</li>*/}
      {/*        <li>Copy hadith</li>*/}
      {/*        <li>Share on social</li>*/}
      {/*        <li>Custom settings</li>*/}
      {/*      </ul>*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*  <div className={styles.inner}>*/}
      {/*    <div className={styles.detail_text}>*/}
      {/*      <h2>Quran.radio</h2>*/}

      {/*      <p>*/}
      {/*        Online Quran radio & audio. Users will have experience with both a*/}
      {/*        radio and an audio. The app operates like a radio by default, but*/}
      {/*        the user can select a reciter or a specific chapter.*/}
      {/*      </p>*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*  <div className={styles.inner}>*/}
      {/*    <div className={styles.detail_text}>*/}
      {/*      <h2>DeeniTube</h2>*/}
      {/*      <p>Islamic video application.</p>*/}

      {/*      <div className={styles.special_text}>*/}
      {/*        <blockquote>*/}
      {/*          We are also developing some other applications, which we will*/}
      {/*          later publish.*/}
      {/*        </blockquote>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</Section>*/}

      <div className={aboutStyles.wrapper}>
        <Container>
          <div className={aboutStyles.content}>
            <div className={aboutStyles.text}>
              <p>
                We are focusing more on application <span className={aboutStyles.highlight}> Performance & UI</span>.
              </p>

              <div className={aboutStyles.highlight_border}>
                <h2 style={{ marginTop: `22px`}}>
                  All of our applications will not require payment and are fully Ads free.
                </h2>
              </div>

            </div>

            {/*<div style={{ marginTop: `22px` }} className={aboutStyles.title}>*/}
            {/*  <h2 style={{ fontSize: `1.4em`, marginBottom: `0` }}>*/}
            {/*    We are working for*/}
            {/*    <span className={aboutStyles.highlight}> three </span>*/}
            {/*    sets of <span className={aboutStyles.highlight}>goals</span>.*/}
            {/*  </h2>*/}
            {/*</div>*/}

          </div>
        </Container>
      </div>

      <Section
          classes={{
            root: styles.root,
            container: styles.container,
            content: styles.content,
          }}
      >
        <div style={{ marginTop: `0px` }} className={styles.grid}>

          <h2 className={aboutStyles.project_header}>
            Some of our <span className={aboutStyles.highlight}> applications</span>,
            <span style={{ display: `block`, fontSize: `.85em` }} >We are also developing some other applications, which we will publish later.</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {apps.map((app) => (
              <Link key={app.id} href={`/p/${app.slug}`} legacyBehavior>
                <a>
                  <Card
                    name={app.name}
                    imagePath={app.imgPath}
                    url={app.url}
                    excerpt={app.excerpt}
                  />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </Section>

    </>
  );
};

export default DevelopIslamicApplications;
