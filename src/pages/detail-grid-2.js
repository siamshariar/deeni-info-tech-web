import Meta from '../components/core/Meta';
import PageContent from '../components/utils/PageContent';
import Banner from '../components/utils/BannerPrimary';
import DetailContent from '../components/pages/detail/Grid2';

export default function DetailPage() {
  return (
    <>
      <Meta
        title="Deeni Info Tech"
        description="A non profitable software company for Deeni projects"
        url="www.deeniinfotech.com"
        image="/img/logo/logo.png"
        type="website"
      />

      <Banner
        bgImage="img/banner/banner-about.jpg"
        title="Grid Detail Page"
        subTitle="A non profitable software company for Deeni projects"
      />

      <PageContent>
        <DetailContent />
      </PageContent>
    </>
  );
}
