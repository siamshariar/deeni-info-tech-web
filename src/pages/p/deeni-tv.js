import Meta from "../../components/core/Meta";
import {server} from "../../lib/config";
import Banner from "../../components/utils/BannerPrimary";
import PageContent from "../../components/utils/PageContent";
import PageDetail from '../../components/pages/ProjectDetail/DeeniTV';

export default function Page() {
    return (
        <>
            <Meta
                title={`Deeni.tv | DeeniInfoTech.com`}
                description="Experience premium Islamic content in a revolutionary lean-back TV interface designed for modern audiences."
                url={`${server}/p/deeni-tv`}
                image={`${server}/img/our_apps/deeni-tv-card-logo.png`}
                type="website"
            />

            <Banner
                bgImage="img/banner/banner-about.jpg"
                title="Deeni.tv"
                subTitle=""
            />

            <PageContent>
                <PageDetail />
            </PageContent>
        </>
    );
}
