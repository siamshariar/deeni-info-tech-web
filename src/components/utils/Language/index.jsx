import DropdownIcon from '../../icons/Dropdown';
import styles from './index.module.scss';

const Language = () => {
  return (
    <div className={styles.lang}>
      <button className={styles.lang_btn}>
        <span>EN</span>
        <span className={styles.dropdown_icon}>
          <DropdownIcon />
        </span>
      </button>
    </div>
  );
};

export default Language;
