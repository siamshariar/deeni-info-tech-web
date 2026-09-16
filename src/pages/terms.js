import { server } from '../lib/config';
import Meta from '../components/core/Meta';
import Banner from '../components/utils/BannerPrimary';
import PageContent from '../components/utils/PageContent';
import Container from '../components/utils/Container';

export default function TermsPage() {
  return (
    <>
      <Meta
        title="Terms of Service | DeeniInfoTech.com"
        description="Terms of Service for DeeniInfoTech.com and its connected applications."
        url={`${server}/terms`}
        image={`${server}/img/logo/share-preview.png`}
        type="website"
      />

      <Banner
        bgImage="img/banner/banner-about.jpg"
        title="Terms of Service"
        subTitle="Please read these terms carefully before using our Services"
      />

      <PageContent>
        <Container>
          <div style={{ padding: '40px 0', lineHeight: 1.7 }}>
            <p><em>Last updated: September 1, 2026</em></p>

            <p>
              These Terms of Service (&quot;Terms&quot;) govern your access to and use of the
              websites, applications, and related services (collectively, the
              &quot;Services&quot;) provided by DeeniInfoTech (&quot;we&quot;, &quot;us&quot;,
              &quot;our&quot;), a non-profit organization that builds Islamic applications,
              including Quran.tube, Quran.radio, DeeniTube, Quran.ac, Hadith.ac, and Deeni.tv. By
              using our Services, you agree to these Terms.
            </p>

            <h2>Use of Our Services</h2>
            <p>
              Our Services are provided free of charge to spread beneficial Islamic knowledge and
              content. You agree to use the Services only for lawful purposes and in a manner that
              does not infringe the rights of, or restrict or inhibit the use and enjoyment of the
              Services by, any third party.
            </p>

            <h2>Connected Third-Party Accounts</h2>
            <p>
              Some of our internal tools connect to third-party platforms (such as Facebook,
              Instagram, YouTube, LinkedIn, and TikTok) solely to publish and manage content on
              our own official accounts/channels on our behalf. These connections are authorized
              directly by us and are not intended to act on behalf of individual end users.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All content, trademarks, and logos displayed on our Services are the property of
              DeeniInfoTech or its content partners, unless otherwise noted, and may not be used
              without prior written permission.
            </p>

            <h2>No Warranty</h2>
            <p>
              Our Services are provided &quot;as is&quot; without warranties of any kind, express
              or implied. We do not guarantee that the Services will always be available,
              uninterrupted, or error-free.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, DeeniInfoTech shall not be liable for any
              indirect, incidental, or consequential damages arising from your use of the
              Services.
            </p>

            <h2>Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. Any changes will be posted on this
              page with an updated &quot;Last updated&quot; date. Continued use of the Services
              after changes constitutes acceptance of the revised Terms.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at{' '}
              <a href="mailto:info@deeniinfotech.com">info@deeniinfotech.com</a>.
            </p>
          </div>
        </Container>
      </PageContent>
    </>
  );
}
