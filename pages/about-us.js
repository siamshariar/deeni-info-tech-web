import Meta from "../components/core/Meta";
import Header from "../components/core/Header";
import Footer from "../components/core/Footer";
import PageContent from "../components/utils/PageContent";
import HomeBanner from "../components/pages/home/Banner";
import About from "../components/pages/about";

export default function Home() {
  return (
    <>
      <Meta
        title="Deeni Info Tech"
        description="A non profitable software company for Deeni projects"
        url="www.deeniinfotech.com"
        image="/img/logo/logo.png"
        type="website"
      />

      <Header />
      <HomeBanner />

      <PageContent>
        <About />
      </PageContent>

      <Footer />
    </>
  );
}
