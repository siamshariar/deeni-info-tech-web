import Meta from '../../components/core/Meta';
import Banner from '../../components/utils/BannerPrimary';
import PageContent from '../../components/utils/PageContent';
import PageDetail from '../../components/pages/ProjectList/AppsForScholarsAndDawahOrganizations';
import {server} from "../../lib/config";

export default function Page() {
  return (
    <>
      <Meta
        title="Applications for Scholars & Da'wah organizations | DeeniInfoTech.com"
        description="Develop Islamic websites and mobile applications for Scholars, Da'wah organizations and Islamic applications under their supervision. Islamic scholars are our assets; they are themselves like an institute."
        url={`${server}/applications-for-scholars-and-dawah-organizations`}
        image="/img/logo/logo.png"
        type="website"
      />

      <Banner
        bgImage="img/banner/banner-about.jpg"
        title="Applications for Scholars & Da'wah organizations"
        subTitle=""
      />

      <PageContent>
        <PageDetail />
      </PageContent>
    </>
  );
}
