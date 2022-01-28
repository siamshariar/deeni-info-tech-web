import Meta from "../components/core/Meta";
import Header from "../components/core/Header";
import Footer from "../components/core/Footer";
import PageContent from "../components/utils/PageContent";
import Banner from "../components/utils/BannerPrimary";
import HomeAbout from "../components/pages/home/About";
import HomeServices from "../components/pages/home/Services";

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

      <Banner
        bgImage="img/banner/banner-about.jpg"
        title="Deeni Info Tech"
        subTitle="A non profitable software company for Deeni projects"
      />

      <PageContent>
        <HomeAbout />
        <HomeServices />
      </PageContent>

      <Footer />
    </>
  );
}
