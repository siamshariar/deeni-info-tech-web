import Section from '../../utils/Section';
import Slider from '../../sliders/ImageSliderSecondary';
import styles from './ImageSliderSecondary.module.scss';

const ImageSliderSecondary = ({ displayButton }) => {
  return (
      <Section
          classes={{
              root: styles.root,
              // container: styles.container,
              // content: styles.content,
          }}
      >
          <Slider displayButton={displayButton} />
      </Section>
  );
};

export default ImageSliderSecondary;
