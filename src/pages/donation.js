import Meta from '../components/core/Meta';
import Banner from '../components/utils/BannerPrimary';
import PageContent from '../components/utils/PageContent';
import DonationContent from '../components/pages/donation';

export default function Donation() {
  return (
    <>
      <Meta
        title="Donation | Deeni Info Tech"
        description="A non profitable software company for Deeni projects"
        url="www.deeniinfotech.com"
        image="/img/logo/logo.png"
        type="website"
      />

      <Banner
        bgImage="img/banner/banner-about.jpg"
        title="Donation Page"
        subTitle="A non profitable software company for Deeni projects"
      />

      <PageContent>
        <DonationContent />
      </PageContent>
    </>
  );
}
