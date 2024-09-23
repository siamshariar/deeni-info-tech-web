import { server } from '../../lib/config';
import Meta from '../../components/core/Meta';
import Banner from '../../components/utils/BannerPrimary';
import PageContent from '../../components/utils/PageContent';
import ContactContent from '../../components/pages/Contact';
import ContactOld from '../../components/pages/About/ContactCa';

export default function ContactPage() {
  return (
    <>
      <Meta
        title="Contact - Canada | DeeniInfoTech.com"
        description="A non-profit Software Development organization to spread the message of Islam worldwide"
        url={`${server}/contact`}
        image={`${server}/img/logo/share-preview.png`}
        type="website"
        noindex={true}
      />

      <Banner
        bgImage="img/banner/banner-about.jpg"
        title="Contact - Canada"
        subTitle="Feel free to contact with us at your convenience"
      />

      <PageContent>
        {/*<ContactContent />*/}
        <ContactOld />
      </PageContent>
    </>
  );
}
