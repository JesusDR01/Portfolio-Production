import Footer from "../Footer/Footer";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import  {PortfolioWrapper}  from "./Portfolio.styled";
import { useTranslation } from "react-i18next";

export const Portfolio = () => {
const { t } = useTranslation();
    return (
        <PortfolioWrapper id="portfolio" tabIndex={0}>
            <h2 id="skills">{t("sections.skills.title")}</h2>
            <Skills />
            <h2 id="projects">{t("sections.projects.title")}</h2>
            <Projects />
            <Footer />
        </PortfolioWrapper>
    );
};
