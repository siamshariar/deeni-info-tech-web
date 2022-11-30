import { server } from '../lib/config';
import Meta from '../components/core/Meta';
import Banner from '../components/utils/BannerPrimary';
import PageContent from '../components/utils/PageContent';
import HomeAbout from '../components/pages/Home/About';
import HomeServices from '../components/pages/Home/Services';
import AboutAccountInfo from '../components/pages/About/AccountInfo';

export default function ContentDetailPage() {
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
        <AboutAccountInfo />
      </PageContent>
    </>
  );
}
