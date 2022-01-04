import Link from "next/link";
import Container from "../../utils/Container";
import styles from "./Services.module.scss";

const ServiceCard = ({ imagePos, imageSrc, altText, title, text, link }) => {
  return (
    <div className={`${styles.card} ${styles[imagePos]}`}>
      <Container>
        <div className={styles.content}>
          <div className={styles.image}>
            <img src={imageSrc} alt={altText} />
          </div>
          <div className={styles.detail}>
            <div className={styles.title}>
              <h2>{title}</h2>
            </div>
            <div className={styles.text}>
              <p>{text}</p>
            </div>
            <div className={styles.btn}>
              <Link href={link}>
                <a>Read more</a>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

const HomeServices = () => {
  return (
    <div className={styles.wrapper}>
      <ServiceCard
        imagePos="right"
        imageSrc="img/service/01.png"
        altText=""
        title="Autumn"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid reiciendis veniam commodi id maxime quo, nihil quae ab suscipit cupiditate hic quaerat alias dolores quisquam in voluptatum temporibus minima repellat."
        link="#"
      />
      <ServiceCard
        imagePos="left"
        imageSrc="img/service/02.png"
        altText=""
        title="Spring"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid reiciendis veniam commodi id maxime quo, nihil quae ab suscipit cupiditate hic quaerat alias dolores quisquam in voluptatum temporibus minima repellat."
        link="#"
      />
      <ServiceCard
        imagePos="right"
        imageSrc="img/service/03.png"
        altText=""
        title="Winter"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid reiciendis veniam commodi id maxime quo, nihil quae ab suscipit cupiditate hic quaerat alias dolores quisquam in voluptatum temporibus minima repellat."
        link="#"
      />
      <ServiceCard
        imagePos="left"
        imageSrc="img/service/04.png"
        altText=""
        title="Summer"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid reiciendis veniam commodi id maxime quo, nihil quae ab suscipit cupiditate hic quaerat alias dolores quisquam in voluptatum temporibus minima repellat."
        link="#"
      />
    </div>
  );
};

export default HomeServices;
