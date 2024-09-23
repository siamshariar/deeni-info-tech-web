import { server } from '../lib/config';
import Meta from '../components/core/Meta';
import Banner from '../components/utils/BannerPrimary';
import PageContent from '../components/utils/PageContent';
import HomeFaqs from "../components/pages/Home/Faqs";
import HomeSubscription from "../components/pages/Home/Subscription";
import ScholarsRecommendation from "../components/pages/Home/ScholarsRecommendation";

export default function AboutPage() {
  return (
    <>
      <Meta
        title="Scholars Recommendation | DeeniInfoTech.com"
        description="Scholars sharing about Deeni Info Tech."
        url={`${server}/about`}
        image={`${server}/img/logo/share-preview.png`}
        type="website"
      />

      <Banner
        bgImage="img/banner/banner-about.jpg"
        title="Scholars Recommendation"
        subTitle="Scholars sharing about Deeni Info Tech"
      />

        <PageContent>
            <ScholarsRecommendation />
            <HomeSubscription />
        </PageContent>
    </>
  );
}
