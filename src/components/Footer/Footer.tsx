import Media from "../Media/Media";
import { FooterWrapper } from "./Footer.styled";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
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
