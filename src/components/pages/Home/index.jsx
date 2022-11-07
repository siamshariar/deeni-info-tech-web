import PageContent from '../../utils/PageContent';
import Banner from '../../utils/BannerPrimary';
import HomeAbout from './About';
import HomeServices from './Services';
import styles from './index.module.scss';

const Home = () => {
  return (
    <>
      <Banner
        bgImage="img/banner/banner-about.jpg"
        title="Deeni Info Tech"
        subTitle="A non profitable software company for Deeni projects"
      />

      <PageContent>
        <HomeAbout />
        <HomeServices />
      </PageContent>
    </>
  );
};

export default Home;
