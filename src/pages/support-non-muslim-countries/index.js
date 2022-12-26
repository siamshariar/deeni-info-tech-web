import Meta from '../../components/core/Meta';
import Banner from '../../components/utils/BannerPrimary';
import PageContent from '../../components/utils/PageContent';
import PageDetail from '../../components/pages/ProjectList/SupportNonMuslimCountries';
import HomeSubscription from "../../components/pages/Home/Subscription";
import {server} from "../../lib/config";

export default function Page() {
  return (
    <>
        <Meta
            title="Support non-Muslim countries | DeeniInfoTech.com"
            description="Islam is the religion of peace. It is crucial to spread Dawah so that everyone can think and come to their own judgments based on the right path that Islam instructs us to follow."
            url={`${server}/support-non-muslim-countries`}
            image={`${server}/img/logo/share-preview.png`}
            type="website"
        />

      <Banner
        bgImage="img/banner/banner-about.jpg"
        title="Support non-Muslim countries"
        subTitle=""
      />

      <PageContent>
        <PageDetail />
      </PageContent>
    </>
  );
}
