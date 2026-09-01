import { server } from '../lib/config';
import Meta from '../components/core/Meta';
import Banner from '../components/utils/BannerPrimary';
import PageContent from '../components/utils/PageContent';
import Container from '../components/utils/Container';

export default function PrivacyPage() {
  return (
    <>
      <Meta
        title="Privacy Policy | DeeniInfoTech.com"
        description="Privacy Policy for DeeniInfoTech.com and its connected applications, including our use of Google/YouTube APIs."
        url={`${server}/privacy`}
        image={`${server}/img/logo/share-preview.png`}
        type="website"
      />

      <Banner
        bgImage="img/banner/banner-about.jpg"
        title="Privacy Policy"
        subTitle="How we collect, use, and protect your information"
      />

      <PageContent>
        <Container>
          <div style={{ padding: '40px 0', lineHeight: 1.7 }}>
            <p><em>Last updated: September 1, 2026</em></p>

            <p>
              DeeniInfoTech (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a non-profit
              organization that builds Islamic applications, including Quran.tube, Quran.radio,
              DeeniTube, Quran.ac, Hadith.ac, and Deeni.tv. This Privacy Policy explains how we
              collect, use, and protect information when you use our websites, applications, and
              related services (collectively, the &quot;Services&quot;).
            </p>

            <h2>Information We Collect</h2>
            <p>
              We may collect information you voluntarily provide to us, such as your name and
              email address when you subscribe to our newsletter or contact us. We do not collect
              sensitive personal information beyond what is necessary to operate our Services.
            </p>

            <h2>Use of Google/YouTube APIs</h2>
            <p>
              Some of our internal tools connect to the YouTube Data API and other Google APIs
              solely to publish and manage content on our own YouTube channels on our behalf. We
              only request the minimum scopes required to perform these actions. We do not use
              this access to read, collect, or share the personal data of YouTube users, and we do
              not sell or transfer any data obtained through Google APIs to third parties.
            </p>
            <p>
              Our use and transfer of information received from Google APIs adheres to the{' '}
              <a
                href="https://developers.google.com/terms/api-services-user-data-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google API Services User Data Policy
              </a>
              , including the Limited Use requirements.
            </p>

            <h2>How We Use Information</h2>
            <ul>
              <li>To operate, maintain, and improve our Services</li>
              <li>To send newsletters or updates you have opted into</li>
              <li>To respond to inquiries submitted through our contact forms</li>
              <li>To publish content to our own social/video accounts on our behalf</li>
            </ul>

            <h2>Data Sharing</h2>
            <p>
              We do not sell your personal information. We only share information with
              third-party service providers (such as our email delivery provider) to the extent
              necessary to operate our Services, and only under obligations consistent with this
              Privacy Policy.
            </p>

            <h2>Data Retention &amp; Security</h2>
            <p>
              We retain information only as long as necessary for the purposes described in this
              policy and take reasonable measures to protect it from unauthorized access,
              disclosure, or misuse.
            </p>

            <h2>Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of your personal information,
              or revoke previously granted access (including any Google account access) at any
              time by contacting us at the email below or via your{' '}
              <a
                href="https://myaccount.google.com/permissions"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Account permissions page
              </a>
              .
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on
              this page with an updated &quot;Last updated&quot; date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:info@deeniinfotech.com">info@deeniinfotech.com</a>.
            </p>
          </div>
        </Container>
      </PageContent>
    </>
  );
}
