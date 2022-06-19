import { useTranslation } from "next-i18next";
import { About } from "../About/About";
import Cv from "../CV/Cv";

import { FrontPageWrapper } from "./FrontPage.styled";

const FrontPage = () => {
    const { t } = useTranslation(["frontPage"]);
    return (
        <FrontPageWrapper>
            <h1>Jesús Díaz Rivas</h1>
            <About  />
            <h3 id="swipe-advise">{t("projects")}</h3>
            <Cv />
           
        </FrontPageWrapper>
    );
};

export default FrontPage;
