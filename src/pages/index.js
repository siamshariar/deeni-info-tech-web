import { server } from '../lib/config';
import Meta from '../components/core/Meta';
import Banner from '../components/utils/BannerSecondary';
import PageContent from '../components/utils/PageContent';
import HomeAbout from '../components/pages/Home/About';
import HomeServices from '../components/pages/Home/Services';
import AppsForScholars from '../components/pages/Home/AppsForScholars';
import OurApps from '../components/pages/Home/OurApps';
import HomeImageSliderSecondary from '../components/pages/Home/ImageSliderSecondary';
import HomeFaqs from '../components/pages/Home/Faqs';
import HomeSubscription from '../components/pages/Home/Subscription';

export default function HomePage() {
  return (
    <>
      <Meta
        title="Deeni Info Tech"
        description="A non profitable software company for Deeni projects"
        url={server}
        image={`${server}/img/logo/logo.png`}
        type="website"
      />

      <Banner
        image="/img/banner/banner-home.png"
        title="Deeni Info Tech"
        subTitle="A non profitable software company for Deeni projects"
      />

      <PageContent>
        <HomeAbout />
        <HomeServices />
        <AppsForScholars />
        <OurApps />
        <HomeImageSliderSecondary />
        <HomeFaqs />
        <HomeSubscription />
      </PageContent>
    </>
  );
}
