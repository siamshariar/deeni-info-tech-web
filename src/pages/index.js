import { server } from '../lib/config';
import Meta from '../components/core/Meta';
import Banner from '../components/utils/BannerSecondary';
import PageContent from '../components/utils/PageContent';
import HomeAbout from '../components/pages/Home/About';
// import HomeServices from '../components/pages/Home/Services';
import DawahInCountries from '../components/pages/Home/DawahInCountries';
import AppsForScholars from '../components/pages/Home/AppsForScholars';
// import OurApps from '../components/pages/Home/OurApps';
import HomeImageSliderSecondary from '../components/pages/Home/ImageSliderSecondary';
import HomeFaqs from '../components/pages/Home/Faqs';
import HomeSubscription from '../components/pages/Home/Subscription';
import VerseSlider from '../components/pages/Home/VerseSlider';

export default function HomePage() {
  return (
    <>
      <Meta
        title="DeeniInfoTech.com"
        description="A non-profit Software Development organization to spread Deen Islam worldwide. Our main objective is to spread Deen Islam through modern technology all around the world."
        url={server}
        image={`${server}/img/logo/logo.png`}
        type="website"
      />

      <Banner
        image="/img/banner/banner-home.png"
        title="Deeni Info Tech"
        subTitle="A non-profit Software Development organization to spread Deen Islam worldwide"
      />

      <PageContent>
        <VerseSlider />
        <HomeAbout />
        <AppsForScholars />
        <DawahInCountries />
        {/* <OurApps /> */}
        <HomeImageSliderSecondary />
        <HomeFaqs />
        <HomeSubscription />
      </PageContent>
    </>
  );
}
