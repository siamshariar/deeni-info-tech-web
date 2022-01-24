import { getServicesInfo, getServiceDetails } from "../../lib/fetch";
import Meta from "../../components/core/Meta";
import Header from "../../components/core/Header";
import Footer from "../../components/core/Footer";
import PageContent from "../../components/utils/PageContent";
import HomeBanner from "../../components/pages/home/Banner";
import Detail from "../../components/pages/detail";

export default function Home({ services }) {
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
        <Detail services={services} />
      </PageContent>

      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  const slug = encodeURI(context.params.slug);
  const serviceDetails = await getServiceDetails(slug);

  return {
    props: {
      services: serviceDetails,
      key: serviceDetails.id,
    },
  };
}

export async function getStaticPaths() {
  const services = await getServicesInfo();
  let paths = [];

  services.map((item) => {
    let slug = encodeURI(item.slug);
    let obj = { params: { slug: slug } };
    paths.push(obj);
  });

  return {
    paths: paths,
    fallback: false,
  };
}
