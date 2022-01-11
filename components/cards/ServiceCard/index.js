import Link from "next/link";
import Container from "../../utils/Container";
import ServiceGrid from "../ServiceGrid/Grid2";
import styles from "./index.module.scss";

const ServiceCard = ({
  imagePos,
  imageSrc,
  altText,
  title,
  text,
  link,
  grid,
}) => {
  return (
    <div className={`${styles.card} ${styles[imagePos]}`}>
      <Container>
        <div className={styles.content}>
          <div className={styles.image}>
            {grid && <ServiceGrid />}
            {!grid && <img src={imageSrc} alt={altText} />}
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

export default ServiceCard;
