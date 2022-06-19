import Media from "../Media/Media";
import { FooterWrapper } from "./Footer.styled";
import { useTranslation } from "next-i18next";

const Footer = () => {
    const { t } = useTranslation(['projectsPage']);
    return (
        <FooterWrapper>
            <Media />
            <div className="information">
                <span>{t("footer.terms")}</span>
                <div>
                    <span>{t("footer.comments")}</span>
                    <span>{t("footer.help")}</span>
                </div>
                <span className="credits">©2022 Jesús Diaz Rivas</span>
            </div>
        </FooterWrapper>
    );
};

export default Footer;
