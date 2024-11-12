import {apps} from "../../data/apps-for-scholars";
import Meta from "../../components/core/Meta";
import {server} from "../../lib/config";
import Banner from "../../components/utils/BannerPrimary";
import PageContent from "../../components/utils/PageContent";
import PageDetail from '../../components/pages/ProjectDetail/QuranTube';

export default function Page() {
    return (
        <>
            <Meta
                title={`Quran.tube Apps | DeeniInfoTech.com`}
                description="Discover the beauty of Quranic recitations with Quran.radio, a platform that provides a diverse range of live radio and reciters."
                url={`${server}/p/quran-tube`}
                image={`${server}/img/our_apps/quran-tube/quran-tube-white-logo.png`}
                type="website"
            />

            <Banner
                bgImage="img/banner/banner-about.jpg"
                title="Quran.tube"
                subTitle=""
            />

            <PageContent>
                <PageDetail />
            </PageContent>
        </>
    );
}

// export async function getStaticProps({ params }) {
//     const slug = params.slug;
//     const app = apps.find((item) => item.isInProgress === 0 && item.slug === slug.toString());
//
//     return {
//         props: {
//             app,
//         },
//     };
// }
