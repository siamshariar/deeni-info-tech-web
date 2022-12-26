import { server } from '../lib/config';
import Meta from '../components/core/Meta';
import Banner from '../components/utils/BannerPrimary';
import PageContent from '../components/utils/PageContent';
import GratefulInfo from '../components/pages/Grateful/Info';
import HomeSubscription from "../components/pages/Home/Subscription";

export default function GratefulPage() {
    return (
        <>
            <Meta
                title="Grateful | DeeniInfoTech.com"
                description="First and foremost , we want to express our sincere gratitude to Allah Subhanahu Wa Ta'ala. We are grateful to everyone who is connected to us."
                url={`${server}/grateful`}
                image={`${server}/img/logo/share-preview.png`}
                type="website"
            />

            <Banner
                bgImage="img/banner/banner-about.jpg"
                title="Grateful"
                subTitle="BarakAllahu Feekum"
            />

            <PageContent>
                <GratefulInfo />
                <HomeSubscription />
            </PageContent>
        </>
    );
}
