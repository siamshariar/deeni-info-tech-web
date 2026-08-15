import { server } from '../lib/config';
import Meta from '../components/core/Meta';
import Banner from '../components/utils/BannerPrimary';
import PageContent from '../components/utils/PageContent';
import AppsForScholars from "../components/pages/Home/AppsForScholars";
import DawahInCountries from "../components/pages/Home/DawahInCountries";
import HomeImageSliderSecondary from "../components/pages/Home/ImageSliderSecondary";
import HomeFaqs from "../components/pages/Home/Faqs";
import HomeSubscription from "../components/pages/Home/Subscription";
import HomeAbout from "../components/pages/Home/About";

export default function AboutPage() {
  return (
    <>
      <Meta
        title="About Us | DeeniInfoTech.com"
        description="Deen means religion Islam. Our entire lives and everything we do are for Deen Islam. There are three sets of goals."
        url={`${server}/about`}
        image={`${server}/img/logo/share-preview.png`}
        type="website"
      />

      <Banner
        bgImage="img/banner/banner-about.jpg"
        title="About Us"
        subTitle="A non-profit Software Development organization to spread the message of Islam worldwide"
      />

        <PageContent>
            <HomeAbout />
            {/* <OurApps /> */}
            <HomeImageSliderSecondary />
            <DawahInCountries />
            <AppsForScholars />
            <HomeFaqs />
            <HomeSubscription />
        </PageContent>
    </>
  );
}
