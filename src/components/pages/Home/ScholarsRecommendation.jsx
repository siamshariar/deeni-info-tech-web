import Container from '../../utils/Container';
import styles from './About.module.scss';

const ScholarsRecommendation = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.content}>

          <div style={{position:`relative`, paddingTop:`56%`}}>
            <iframe style={{width:`100%`, height:`100%`,position:`absolute`, top:`0`, left:`0`}}
                    src={`https://www.youtube.com/embed/p3Mrisem6ek?autoplay=0&mute=0`}></iframe>
          </div>

          <div style={{position:`relative`, paddingTop:`56%`, marginTop:`50px`}}>
            <iframe style={{width:`100%`, height:`100%`,position:`absolute`, top:`0`, left:`0`}}
                    src={`https://www.youtube.com/embed/7uN7Bc1lag8?autoplay=0&mute=0`}></iframe>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default ScholarsRecommendation;
