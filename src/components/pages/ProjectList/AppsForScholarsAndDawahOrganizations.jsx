import { apps } from '../../../data/apps-for-scholars';
import Card from '../../cards/CardTwo';
import AppsForScholars from '../../ui/AppsForScholars';
import Section from '../../utils/Section';
import styles from './AppsForScholars.module.scss';

const AppsForScholarsAndDawahOrganizations = () => {
  return (
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
            <h2>Apps for Scholars & Da&apos;wah organizations</h2>
          </div>
          <div className={styles.text}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              reiciendis veniam commodi id maxime quo, nihil quae ab suscipit
              cupiditate hic quaerat alias dolores quisquam in voluptatum
              temporibus minima repellat.
            </p>
          </div>
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
              All the Islamic scholars are our assets; they are themselves like
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
              scholars&apos; and dawah organizations&apos; supervision.{' '}
              <span>Such as Zakat, Hajj.</span>
            </p>

            <h3>
              Deeni Info Tech is, in summary (in a straightforward way), a
              software development company. The only differences are:
            </h3>

            <ul>
              <li>Islamic projects from authentic source</li>
              <li>Not financial</li>
            </ul>

            <p>
              Alhamdulillah, we are developing these sorts of websites and
              mobile applications throughout the world.
            </p>

            <h3>List of applications we have done so far,</h3>

            <ul>
              <li>One</li>
              <li>Two</li>
            </ul>
          </div>
        </div>

        <div className={styles.slider}>
          <AppsForScholars />
        </div>
      </div>

      <div className={styles.grid}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {apps.slice(0, 3).map((app, index) => (
            <Card
              key={app.id}
              title={app.tooltip}
              imagePath={app.imgPath}
              url={app.url}
              excerpt={app.excerpt}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default AppsForScholarsAndDawahOrganizations;
