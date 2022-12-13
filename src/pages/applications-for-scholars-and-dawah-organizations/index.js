import Meta from '../../components/core/Meta';
import Banner from '../../components/utils/BannerPrimary';
import PageContent from '../../components/utils/PageContent';
import PageDetail from '../../components/pages/ProjectList/AppsForScholarsAndDawahOrganizations';

export default function Page() {
  return (
    <>
      <Meta
        title="Apps for Scholars & Da'wah organizations | Deeni Info Tech"
        description="A non-profitable Software Development organization to spread Deen Islam worldwide"
        url="www.deeniinfotech.com"
        image="/img/logo/logo.png"
        type="website"
      />

      <Banner
        bgImage="img/banner/banner-about.jpg"
        title="Apps for Scholars & Da'wah organizations"
        subTitle=""
      />

      <PageContent>
        <PageDetail />
      </PageContent>
    </>
  );
}
