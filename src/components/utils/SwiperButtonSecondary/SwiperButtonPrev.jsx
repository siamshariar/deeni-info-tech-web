import { useSwiper } from 'swiper/react';
import classNames from 'classnames';
import styles from './index.module.scss';

const SwiperButtonPrev = () => {
  const swiper = useSwiper();
  return (
    <button
      className={classNames(styles.btn, styles.prev)}
      onClick={() => swiper.slidePrev()}
    >
      <svg
        width="16"
        height="19"
        viewBox="0 0 16 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 1L1 9M1 9L9 18M1 9L16 9" stroke="#4B4B4B"></path>
      </svg>
    </button>
  );
};

export default SwiperButtonPrev;
