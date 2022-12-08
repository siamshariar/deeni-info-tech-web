import classNames from 'classnames';
import styles from './index.module.scss';

const SwiperButtonPrev = ({ swiper }) => {
  return (
    <button
      className={classNames(
        styles.btn,
        styles.prev,
        'scbtn scbtn_prev tsbtn_prev'
      )}
      onClick={() => swiper.slidePrev()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="83.354"
        height="20.707"
        viewBox="0 0 83.354 20.707"
      >
        <g transform="translate(-1515.646 -3843.646)">
          <line
            x2="82"
            transform="translate(1517 3854)"
            fill="none"
            stroke="#c2d5c1"
            strokeWidth="1"
          />
          <line
            y1="10"
            x2="10"
            transform="translate(1516 3844)"
            fill="none"
            stroke="#c2d5c1"
            strokeWidth="1"
          />
          <line
            x1="10"
            y1="10"
            transform="translate(1516 3854)"
            fill="none"
            stroke="#c2d5c1"
            strokeWidth="1"
          />
        </g>
      </svg>
    </button>
  );
};

export default SwiperButtonPrev;
