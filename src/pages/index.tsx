import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import App from "../App";

const Home = () => {
    return <App />;
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale || "", ["frontPage", "projectsPage", "common"])),
    },
});

export default Home;
