import Footer from "../Footer/Footer";
import Skills from "../Skills/Skills";
import { useTranslation } from "react-i18next";
import { lazy, Suspense } from "react";
import { useInView } from "react-intersection-observer";
const PortfolioLazy = () => {
    const { t } = useTranslation();
    const LazyProjects = lazy(() => import("../Projects/Projects"));
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: "-200px 0px",
    });

    return (
        <>
            <h2 id="skills">{t("sections.skills.title")}</h2>
            <Skills />
            <h2 ref={ref} id="projects">
                {t("sections.projects.title")}
            </h2>
            <Suspense fallback={<div>{t("sections.projects.loading")}</div>}>
                {inView && <><LazyProjects />  <Footer /> </>}
            </Suspense>
            
        </>
    );
};
export default PortfolioLazy;
