import Container from '../../utils/Container';
import styles from './About.module.scss';

const HomeAbout = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <div className={styles.title}>
            {/*<h1>*/}
            {/*  <span className={styles.highlight}>Deeni Info Tech</span>*/}
            {/*</h1>*/}
            <h2>
              <span className={styles.highlight}>Deen </span>
              means religion <span className={styles.highlight}>Islam</span>.
            </h2>
          </div>

          <div className={styles.text}>
            <p>
              Indeed, the religion in the sight of Allah is Islam.
              <span className={styles.text_ref}>[Al Quran - 3 : 9]</span>
            </p>

            <p>
              These days, technology permeates every aspect of our lives. Almost all industries, including business,
              are expanding (moving forward) with the help of technologies. But most important is to spread Islam.
            </p>

            <p>
              The state of technology has significantly advanced recently.
              People are now accustomed to using technologies. Our main
              objective is to spread Deen Islam through modern technology all
              around the world. In this approach, we can quickly reach millions
              of individuals.
            </p>

            <div className={styles.highlight_border}>
              <h2 style={{ marginTop: `22px`}}>
                Our efforts are purely non-profit. We do not charge for any
                projects and our applications are likewise free of advertisements.
              </h2>
            </div>



            {/*<h3>There are three sets of goals.</h3>*/}

            {/*<ul>*/}
            {/*  <li>*/}
            {/*    Develop Islamic websites and mobile applications for Scholars,*/}
            {/*    Da&apos;wah Organizations and Islamic applications under their*/}
            {/*    supervision.*/}
            {/*  </li>*/}
            {/*  <li>Support non-Muslim countries.</li>*/}
            {/*  <li>Develop Islamic applications.</li>*/}
            {/*</ul>*/}


          </div>

          <div style={{ marginTop: `22px` }} className={styles.title}>
            <h2 style={{ fontSize: `1.4em`, marginBottom: `0` }}>
              We are working for
              <span className={styles.highlight}> three </span>
              sets of <span className={styles.highlight}>goals</span>(listed below).
            </h2>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default HomeAbout;
