import Meta from '../../components/core/Meta';
import Banner from '../../components/utils/BannerPrimary';
import PageContent from '../../components/utils/PageContent';
import PageDetail from '../../components/pages/ProjectList/SupportNonMuslimCountries';

export default function Page() {
  return (
    <>
      <Meta
        title="Support non-muslim countries | Deeni Info Tech"
        description="A non-profitable Software Development organization to spread Deen Islam worldwide"
        url="www.deeniinfotech.com"
        image="/img/logo/logo.png"
        type="website"
      />

      <Banner
        bgImage="img/banner/banner-about.jpg"
        title="Support non-muslim countries"
        subTitle="A non-profitable Software Development organization to spread Deen Islam worldwide"
      />

      <PageContent>
        <PageDetail />
      </PageContent>
    </>
  );
}
