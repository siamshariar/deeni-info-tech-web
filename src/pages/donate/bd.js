import Meta from '../../components/core/Meta';
import Banner from '../../components/utils/BannerPrimary';
import PageContent from '../../components/utils/PageContent';
import DonateBDContent from '../../components/pages/Donate/Bd';
import {server} from "../../lib/config";
import HomeFaqs from "../../components/pages/Home/Faqs";
import HomeSubscription from "../../components/pages/Home/Subscription";

export default function Donation() {
  return (
    <>
      <Meta
        title="Donation - Bangladesh | DeeniInfoTech.com"
        description="Sadaqah Jariyah means a continuous, flowing, and ongoing charity. In order to succeed, we need your help to go forward on this journey."
        url={`${server}/donate`}
        image={`${server}/img/logo/share-preview.png`}
        type="website"
      />

      <Banner
        bgImage="img/banner/banner-about.jpg"
        title="Donation - Bangladesh"
        subTitle="Let's move forward together In'Sha Allah"
      />

      <PageContent>
        {/*<VerseSlider />*/}
        {/*<DonationAbout />*/}
        <DonateBDContent />
        <HomeFaqs />
        <HomeSubscription />
      </PageContent>
    </>
  );
}
