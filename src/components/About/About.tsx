import { AboutWrapper } from "./About.styled";
import { useTranslation } from "next-i18next";
import Badges from "../Badges";
export const About = () => {
    const { t } = useTranslation(["frontPage"]);
    return (
        <AboutWrapper>
            <div>
                <img
                    title="Jesús Díaz Rivas"
                    id="my-img"
                    alt="My face"
                    src="assets/img/me.webp"
                    width="640"
                    height="360"
                />
                <Badges />
            </div>
            <p>{t("about")}</p>
        </AboutWrapper>
    );
};
