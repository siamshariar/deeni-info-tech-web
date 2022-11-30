import { server } from '../lib/config';
import Meta from '../components/core/Meta';
import Banner from '../components/utils/BannerPrimary';
import PageContent from '../components/utils/PageContent';
import AboutInfo from '../components/pages/About/Info';
import AboutAccountInfo from '../components/pages/About/AccountInfo';
import AboutService from '../components/pages/About/Service';
import AboutSubscription from '../components/pages/About/Subscription';

export default function AboutPage() {
  return (
    <>
      <Meta
        title="About Us | Deeni Info Tech"
        description="A non profitable software company for Deeni projects"
        url={`${server}/about-us`}
        image={`${server}/img/logo/logo.png`}
        type="website"
      />

      <Banner
        bgImage="img/banner/banner-about.jpg"
        title="About Us"
        subTitle="A non profitable software company for Deeni projects"
      />

      <PageContent>
        <AboutInfo />
        <AboutAccountInfo />
        <AboutService />
        <AboutSubscription />
      </PageContent>
    </>
  );
}
