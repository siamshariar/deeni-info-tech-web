import Meta from '../../components/core/Meta';
import Banner from '../../components/utils/BannerPrimary';
import PageContent from '../../components/utils/PageContent';
import PageDetail from '../../components/pages/ProjectList/DevelopIslamicApplications';

export default function Page() {
  return (
    <>
      <Meta
        title="Develop Islamic applications | Deeni Info Tech"
        description="A non-profitable Software Development organization to spread Deen Islam worldwide"
        url="www.deeniinfotech.com"
        image="/img/logo/logo.png"
        type="website"
      />

      <Banner
        bgImage="img/banner/banner-about.jpg"
        title="Develop Islamic applications"
        subTitle=""
      />

      <PageContent>
        <PageDetail />
      </PageContent>
    </>
  );
}
