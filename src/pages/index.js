import { server } from '../lib/config';
import Meta from '../components/core/Meta';
import Banner from '../components/utils/BannerPrimary';
import PageContent from '../components/utils/PageContent';
import HomeAbout from '../components/pages/Home/About';
import HomeServices from '../components/pages/Home/Services';
import HomeScholars from '../components/pages/Home/Scholars';
import HomeApps from '../components/pages/Home/Apps';
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
        bgImage="img/banner/banner-about.jpg"
        title="Deeni Info Tech"
        subTitle="A non profitable software company for Deeni projects"
      />

      <PageContent>
        <HomeAbout />
        <HomeServices />
        <HomeScholars />
        <HomeApps />
        <HomeImageSliderSecondary />
        <HomeFaqs />
        <HomeSubscription />
      </PageContent>
    </>
  );
}
