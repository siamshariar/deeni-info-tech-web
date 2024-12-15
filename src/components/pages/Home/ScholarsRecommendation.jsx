import Container from '../../utils/Container';
import styles from './About.module.scss';
import { videos } from '../../../data/ScholarsRecommendation';

const ScholarsRecommendation = () => {

  return (
    <div className={styles.wrapper} style={{ maxWidth: '1440px', margin: '0 auto' }}>
      <Container>
        <div className={styles.grid}>
          {videos.map((video, index) => (
            <div key={index} className={styles.card}>
              <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                <iframe
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    borderRadius: '8px'
                  }}
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=0&mute=0`}
                  title={video.title}
                ></iframe>
              </div>
              <div className={styles.videoInfo}>
                <p className={styles.videoTitle}>{video.title}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ScholarsRecommendation;
