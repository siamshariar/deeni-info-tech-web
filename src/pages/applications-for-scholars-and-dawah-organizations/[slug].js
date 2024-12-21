import Link from 'next/link';

export default function Page() {
  return (
    <>
      <h2>Sample page</h2>
      <Link href="/" legacyBehavior>
        <a>Back to Home</a>
      </Link>
    </>
  );
}
