import {apps} from "../../data/apps-for-scholars";
import Meta from "../../components/core/Meta";
import {server} from "../../lib/config";
import Banner from "../../components/utils/BannerPrimary";
import PageContent from "../../components/utils/PageContent";
import PageDetail from '../../components/pages/ProjectDetail/DeeniTube';

export default function Page() {
    return (
        <>
            <Meta
                title={`DeeniTube Apps | DeeniInfoTech.com`}
                description="An authentic Islamic video platform featuring content from renowned scholars, available in multiple languages to cater to diverse audiences."
                url={`${server}/p/deeni-tube`}
                image={`${server}/img/our_apps/quran-radio/quran-radio-social.png`}
                type="website"
            />

            <Banner
                bgImage="img/banner/banner-about.jpg"
                title="DeeniTube"
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
