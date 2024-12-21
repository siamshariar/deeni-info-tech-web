import {apps} from "../../data/apps-for-scholars";
import Meta from "../../components/core/Meta";
import {server} from "../../lib/config";
import Banner from "../../components/utils/BannerPrimary";
import PageContent from "../../components/utils/PageContent";
import PageDetail from '../../components/pages/ProjectDetail/HadithAc';

export default function Page() {
    return (
        <>
            <Meta
                title={`Hadith.ac Apps | DeeniInfoTech.com`}
                description="Hadith application. Some of the features are Hadith books & categories, Reader friendly UI, Custom settings, Bookmarks, User login access."
                url={`${server}/p/hadith-ac`}
                image={`${server}/img/our_apps/quran-radio/quran-radio-social.png`}
                type="website"
            />

            <Banner
                bgImage="img/banner/banner-about.jpg"
                title="Hadith.ac"
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
