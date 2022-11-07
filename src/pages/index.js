import { server } from '../lib/config';
import Meta from '../components/core/Meta';
import Home from '../components/pages/Home';

export default function HomePage() {
  return (
    <>
      <Meta
        title="Deeni Info Tech"
        description="A non profitable software company for Deeni projects"
        url={server}
        image={`${server}/img/logo/logo.png`}
        type="website"
      />

      <Home />
    </>
  );
}
