import styles from "./index.module.scss";

const Detail = ({ services }) => {
  return (
    <div>
      <h2 className={styles.name}>{services.detail}</h2>
    </div>
  );
};

export default Detail;
