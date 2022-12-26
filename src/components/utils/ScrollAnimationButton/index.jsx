import styles from './index.module.scss';

const ScrollAnimationButton = () => {
  const handleScroll = () => {
    const top = document.getElementById('PageContent').offsetTop - 113;
    window.scrollTo({
      top: top,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.root}>
      <div className={styles.mouse} onClick={() => handleScroll()}></div>
      <p className={styles.text}>Scroll</p>
    </div>
  );
};

export default ScrollAnimationButton;
