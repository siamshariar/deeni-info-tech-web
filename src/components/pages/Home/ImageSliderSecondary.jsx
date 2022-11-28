import Container from '../../utils/Container';
import Slider from '../../sliders/ImageSliderSecondary';
import styles from './ImageSliderSecondary.module.scss';

const ImageSliderSecondary = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Container>
          <Slider />
        </Container>
      </div>
    </div>
  );
};

export default ImageSliderSecondary;
