import classNames from 'classnames';
import styles from './index.module.scss';

const SwiperButtonNext = ({ swiper }) => {
  return (
    <button
      className={classNames(
        styles.btn,
        styles.next,
        'scbtn scbtn_next tsbtn_next'
      )}
      onClick={() => swiper.slideNext()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="83.354"
        height="20.482"
        viewBox="0 0 83.354 20.482"
      >
        <g transform="translate(-1653 -3843.871)">
          <line
            y1="9.888"
            x2="9.888"
            transform="translate(1736 3864) rotate(180)"
            fill="none"
            stroke="#393939"
            strokeWidth="1"
          />
          <line
            x1="9.888"
            y1="9.888"
            transform="translate(1736 3854.112) rotate(180)"
            fill="none"
            stroke="#393939"
            strokeWidth="1"
          />
          <line
            x2="82"
            transform="translate(1653 3854)"
            fill="none"
            stroke="#393939"
            strokeWidth="1"
          />
        </g>
      </svg>
    </button>
  );
};

export default SwiperButtonNext;
