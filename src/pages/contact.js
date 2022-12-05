import { server } from '../lib/config';
import Meta from '../components/core/Meta';
import Banner from '../components/utils/BannerPrimary';
import PageContent from '../components/utils/PageContent';
import ContactContent from '../components/pages/Contact';
import ContactOld from '../components/pages/About/Contact';

export default function ContactPage() {
  return (
    <>
      <Meta
        title="Deeni Info Tech"
        description="A non profitable software company for Deeni projects"
        url={server}
        image={`${server}/img/logo/logo.png`}
        type="website"
      />

      <Banner
        bgImage="img/banner/banner-about.jpg"
        title="Deeni Info Tech"
        subTitle="A non profitable software company for Deeni projects"
      />

      <PageContent>
        <ContactContent />
        <ContactOld />
      </PageContent>
    </>
  );
}
