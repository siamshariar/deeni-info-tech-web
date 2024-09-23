import { apps } from '../../../data/apps-for-scholars';
import Card from '../../cards/CardTwo';
import AppsForScholars from '../../ui/AppsForScholars';
import Section from '../../utils/Section';
import styles from './AppsForScholars.module.scss';
import aboutStyles from '../Home/About.module.scss';
import Container from "../../utils/Container";

const AppsForScholarsAndDawahOrganizations = () => {
  return (
    <>
      <Section
        classes={{
          root: styles.root,
          container: styles.container,
          content: styles.content,
        }}
      >
        <div className={styles.inner}>
          <div className={styles.detail}>
            <div className={styles.title}>
              {/* <h2>Apps for Scholars</h2> */}
              <h2>Applications for Scholars & Da&apos;wah organizations</h2>
            </div>
            {/*<div className={styles.text}>*/}
            {/*  <p>*/}
            {/*    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid*/}
            {/*    reiciendis veniam commodi id maxime quo, nihil quae ab suscipit*/}
            {/*    cupiditate hic quaerat alias dolores quisquam in voluptatum*/}
            {/*    temporibus minima repellat.*/}
            {/*  </p>*/}
            {/*</div>*/}
            {/* <div className={styles.btn}>
              <Link href="/applications-for-scholars-and-dawah-organizations">
                <a>Read more</a>
              </Link>
            </div> */}
            <div className={styles.detail_text}>
              <p>
                Develop Islamic websites and mobile applications for Scholars,
                Da&apos;wah organizations and Islamic applications under their
                supervision.
              </p>
              <p>
                Islamic scholars are our assets; they are themselves like
                an institute. It is so important to keep all of their resources
                (books, lectures, articles, and research papers) together in one
                place. This can be done by developing their personal website.
              </p>
              <p>
                Islamic Da&apos;wah organizations are also doing great Da&apos;wah
                for their communities. Da&apos;wah organizations need the website
                for their contents and to spread Da&apos;wah more.
              </p>
              <p>
                Another sort of support is to develop Islamic applications under
                Scholars&apos; and Da'wah organizations&apos; supervision.{' '}
                <span>Such as Quran, Hadith, Zakat, Hajj.</span>
              </p>

            </div>
          </div>

          <div className={styles.slider}>
            <AppsForScholars detailPage={true} />
          </div>
        </div>
      </Section>



      <div className={aboutStyles.wrapper}>
        <Container>
          <div className={aboutStyles.content}>
            <div className={aboutStyles.text}>
              <p>
                <span className={aboutStyles.highlight}>Deeni Info Tech</span> is, in summary (in a straightforward way), a
                software development company. The only differences are Islamic projects from authentic source and not financial.
              </p>

              <div className={aboutStyles.highlight_border}>
                <h2 style={{ marginTop: `22px`}}>
                  Alhamdulillah, we are developing these sorts of websites and mobile applications throughout the world.
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
            Projects of this
            <span className={aboutStyles.highlight}> type </span>
            we have done so far,
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {apps.filter((item) => item.isInProgress === 0 ).map((app, index) => (
                <Card
                    key={app.id}
                    name={app.name}
                    title={app.tooltip}
                    imagePath={app.imgPath}
                    url={app.url}
                    excerpt={app.excerpt}
                />
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          <h2 className={aboutStyles.project_header}>
            Some of our in progress projects,
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {apps.filter((item) => item.isInProgress === 1 ).map((app, index) => (
                <Card
                    key={app.id}
                    name={app.name}
                    title={app.tooltip}
                    imagePath={app.imgPath}
                    url={app.url}
                    excerpt={app.excerpt}
                    isInProgress={true}
                />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default AppsForScholarsAndDawahOrganizations;
