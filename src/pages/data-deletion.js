import { server } from '../lib/config';
import Meta from '../components/core/Meta';
import Banner from '../components/utils/BannerPrimary';
import PageContent from '../components/utils/PageContent';
import Container from '../components/utils/Container';

export default function DataDeletionPage() {
  return (
    <>
      <Meta
        title="Data Deletion Instructions | DeeniInfoTech.com"
        description="Instructions for requesting deletion of your data from DeeniInfoTech.com and its connected applications."
        url={`${server}/data-deletion`}
        image={`${server}/img/logo/share-preview.png`}
        type="website"
      />

      <Banner
        bgImage="img/banner/banner-about.jpg"
        title="Data Deletion Instructions"
        subTitle="How to request removal of your data"
      />

      <PageContent>
        <Container>
          <div style={{ padding: '40px 0', lineHeight: 1.7 }}>
            <p><em>Last updated: September 1, 2026</em></p>

            <p>
              DeeniInfoTech (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) respects your right
              to control your personal data. This page explains how you can request deletion of
              any personal information we may hold about you.
            </p>

            <h2>What Data We May Hold</h2>
            <p>
              We only collect limited personal information, such as the email address you provide
              when subscribing to our newsletter or contacting us through our website. We do not
              collect or store personal data from any third-party platform (such as Facebook or
              Instagram) accounts beyond what is required to operate our own official
              pages/channels.
            </p>

            <h2>How to Request Deletion</h2>
            <p>
              To request that we delete your personal information, please email us at{' '}
              <a href="mailto:info@deeniinfotech.com">info@deeniinfotech.com</a> with the subject
              line &quot;Data Deletion Request&quot;, including the email address or information
              you would like removed. We will process your request and confirm completion within
              30 days.
            </p>

            <h2>Revoking Third-Party Platform Access</h2>
            <p>
              If you have connected any DeeniInfoTech tool to your own Facebook, Instagram, or
              Google account, you can independently revoke that access at any time from the
              respective platform&apos;s settings:
            </p>
            <ul>
              <li>
                Facebook/Instagram:{' '}
                <a
                  href="https://www.facebook.com/settings?tab=business_tools"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Business Integrations settings
                </a>
              </li>
              <li>
                Google/YouTube:{' '}
                <a
                  href="https://myaccount.google.com/permissions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Account permissions
                </a>
              </li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              For any questions regarding data deletion, please contact us at{' '}
              <a href="mailto:info@deeniinfotech.com">info@deeniinfotech.com</a>.
            </p>
          </div>
        </Container>
      </PageContent>
    </>
  );
}
