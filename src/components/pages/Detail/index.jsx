import Container from '../../utils/Container';
import styles from './index.module.scss';

const DetailContent = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <div className={styles.image}>
            <img src="img/service/03.png" alt="" />
          </div>
          <div className={styles.detail}>
            <div className={styles.title}>
              <h2>Autumn</h2>
            </div>
            <div className={styles.text}>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam similique dolorem repellendus nam, asperiores, hic totam
                eveniet eligendi ea iste assumenda ex distinctio! Temporibus
                labore velit, molestiae nesciunt debitis neque.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt, maiores nostrum aperiam aut cupiditate similique
                laborum reprehenderit quaerat inventore, magnam soluta
                perferendis culpa vero sed autem ad ea, suscipit sint?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam similique dolorem repellendus nam, asperiores, hic totam
                eveniet eligendi ea iste assumenda ex distinctio! Temporibus
                labore velit, molestiae nesciunt debitis neque.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DetailContent;
