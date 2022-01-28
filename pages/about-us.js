import Meta from "../components/core/Meta";
import Header from "../components/core/Header";
import Footer from "../components/core/Footer";
import Banner from "../components/utils/BannerPrimary";
import PageContent from "../components/utils/PageContent";
import AboutContent from "../components/pages/about";

export default function AboutPage() {
  return (
    <>
      <Meta
        title="About Us | Deeni Info Tech"
        description="A non profitable software company for Deeni projects"
        url="www.deeniinfotech.com"
        image="/img/logo/logo.png"
        type="website"
      />

      <Header />

      <Banner
        bgImage="img/banner/banner-about.jpg"
        title="About Us"
        subTitle="A non profitable software company for Deeni projects"
      />

      <PageContent>
        <AboutContent />
      </PageContent>

      <Footer />
    </>
  );
}
