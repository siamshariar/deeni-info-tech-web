import {apps} from "../../data/apps-for-scholars";
import Meta from "../../components/core/Meta";
import {server} from "../../lib/config";
import Banner from "../../components/utils/BannerPrimary";
import PageContent from "../../components/utils/PageContent";
import PageDetail from '../../components/pages/ProjectDetail/OrgProject';

export default function Page({ app }) {
    return (
        <>
            <Meta
                title={`${app.organizationName} Apps | DeeniInfoTech.com`}
                description={app.detailPageText}
                url={`${server}/p/${app.slug}`}
                image={`${server}${app.imgPath}`}
                type="website"
            />

            <Banner
                bgImage="img/banner/banner-about.jpg"
                title={app.organizationName}
                subTitle=""
            />

            <PageContent>
                <PageDetail app={app} />
            </PageContent>
        </>
    );
}

export async function getStaticProps({ params }) {
    const slug = params.slug;
    const app = apps.find((item) => item.isInProgress === 0 && item.slug === slug.toString());

    return {
        props: {
            app,
        },
    };
}

export async function getStaticPaths() {
    const paths = apps.filter((item) => item.isInProgress === 0 ).map((app, index) => ({
        params: {
            slug: app.slug.toString(),
        },
    }))

    return {
        paths,
        fallback: "blocking",
    };
}
