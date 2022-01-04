import styles from "./index.module.scss";

export default function Container({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}
