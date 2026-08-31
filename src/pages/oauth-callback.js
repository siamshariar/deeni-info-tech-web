import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Meta from '../components/core/Meta';
import { server } from '../lib/config';
import Banner from '../components/utils/BannerPrimary';
import PageContent from '../components/utils/PageContent';
import Container from '../components/utils/Container';

const FIELDS = ['code', 'state', 'error', 'error_description'];

function CopyableField({ label, value }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Clipboard API unavailable (e.g. insecure context) — user can still select/copy manually.
    }
  };

  return (
    <div style={{ marginBottom: '16px' }}>
      <div style={{ fontWeight: 600, marginBottom: '4px' }}>{label}</div>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
        <textarea
          readOnly
          value={value}
          rows={label === 'code' ? 3 : 1}
          style={{ flex: 1, fontFamily: 'monospace', padding: '8px', wordBreak: 'break-all' }}
        />
        <button type="button" onClick={handleCopy} style={{ padding: '8px 12px' }}>
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
}

export default function OAuthCallback() {
  const router = useRouter();
  const { query } = router;

  // Always render the same "Loading…" markup on the server and on the client's
  // first hydration pass — router.query can already be populated server-side in
  // dev mode, which would otherwise mismatch the client's pre-hydration state.
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const presentFields = mounted
    ? FIELDS.filter((key) => typeof query[key] === 'string' && query[key])
    : [];

  return (
    <>
      <Meta
        title="OAuth Callback | DeeniInfoTech.com"
        description="OAuth redirect landing page."
        url={`${server}/oauth-callback`}
        type="website"
        noindex={true}
      />

      <Banner bgImage="img/banner/banner-about.jpg" title="OAuth Callback" subTitle="" />

      <PageContent>
        <Container>
          <div style={{ padding: '40px 0' }}>
            {!mounted ? (
              <p>Loading…</p>
            ) : presentFields.length === 0 ? (
              <p>No authorization parameters were found in the URL.</p>
            ) : (
              presentFields.map((key) => (
                <CopyableField key={key} label={key} value={query[key]} />
              ))
            )}
          </div>
        </Container>
      </PageContent>
    </>
  );
}
