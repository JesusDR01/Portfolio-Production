import { CvWrapper } from "./Cv.styled";
import { useTranslation } from "react-i18next";

const Cv = () => {
    const { t } = useTranslation();
    return (<a href={t("cv.url")} download>
        <CvWrapper className="cv">
            {t("cv.title")}
        </CvWrapper>
    </a>);
};

export default Cv;
