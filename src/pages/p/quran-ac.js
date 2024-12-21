import {apps} from "../../data/apps-for-scholars";
import Meta from "../../components/core/Meta";
import {server} from "../../lib/config";
import Banner from "../../components/utils/BannerPrimary";
import PageContent from "../../components/utils/PageContent";
import PageDetail from '../../components/pages/ProjectDetail/QuranAc';

export default function Page() {
    return (
        <>
            <Meta
                title={`Quran.ac Apps | DeeniInfoTech.com`}
                description="Quran application. Some of the features are Multi translations, Reader friendly UI, Custom settings, Bookmarks, User login access."
                url={`${server}/p/quran-ac`}
                image={`${server}/img/our_apps/quran-radio/quran-radio-social.png`}
                type="website"
            />

            <Banner
                bgImage="img/banner/banner-about.jpg"
                title="Quran.ac"
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
