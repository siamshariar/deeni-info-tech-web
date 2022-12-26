import Meta from '../../components/core/Meta';
import Banner from '../../components/utils/BannerPrimary';
import PageContent from '../../components/utils/PageContent';
import PageDetail from '../../components/pages/ProjectList/DevelopIslamicApplications';
import HomeImageSliderSecondary from "../../components/pages/Home/ImageSliderSecondary";
import {server} from "../../lib/config";

export default function Page() {
  return (
    <>
      <Meta
        title="Develop Islamic applications | DeeniInfoTech.com"
        description="One of our primary goals is to create more promising Islamic applications. We are focusing more on application Performance & UI."
        url={`${server}/develop-islamic-applications`}
        image={`${server}/img/logo/share-preview.png`}
        type="website"
      />

      <Banner
        bgImage="img/banner/banner-about.jpg"
        title="Develop Islamic applications"
        subTitle=""
      />

      <PageContent>
        <HomeImageSliderSecondary displayButton={true} />
        <PageDetail />
      </PageContent>
    </>
  );
}
