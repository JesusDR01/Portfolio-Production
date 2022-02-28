import { AboutWrapper } from "./About.styled";
import { useTranslation } from "react-i18next";

export const About = () => {
    const { t } = useTranslation();
    return (
        <AboutWrapper>
            <img title="Jesús Díaz Rivas" id="my-img" alt="My face" src="assets/img/me.webp" width="640" height="360" />
            <p>
                {t('about')}
            </p>
        </AboutWrapper>
    );
};
