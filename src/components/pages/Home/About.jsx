import Container from '../../utils/Container';
import styles from './About.module.scss';

const HomeAbout = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <div className={styles.title}>
            <h1>
              <span className={styles.highlight}>Deeni Info Tech</span>
            </h1>
            <h2>
              <span className={styles.highlight}>We own and curate </span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur quaerat, recusandae debitis hic dolore voluptatum
              doloremque distinctio.
            </h2>
          </div>

          <div className={styles.text}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perferendis dicta voluptas accusamus consequatur expedita natus,
              sapiente minima repudiandae error aspernatur quibusdam distinctio
              quia, harum illo. Suscipit minima eligendi quisquam ipsum. Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum
              dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
              Vel aperiam in quo et fuga, deserunt, maiores aspernatur aliquam
              est totam dolores mollitia perferendis corrupti? Explicabo
              exercitationem architecto aliquid nulla iure? Lorem, ipsum dolor
              sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeAbout;
