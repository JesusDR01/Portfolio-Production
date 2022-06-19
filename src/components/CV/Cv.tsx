import { useTranslation } from "next-i18next";
import CvGenially from "../CvGenially";
import { CvWrapper, StyledCvModal, StyledOverlay } from "./Cv.styled";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const Cv = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { t } = useTranslation(["frontPage"]);
    const isBiggerThanMobile = useMediaQuery({ query: "(min-width: 994px)" });
    useEffect(() => {
        document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    }, [isModalOpen]);

    return isBiggerThanMobile ? (
        <>
            <CvWrapper onClick={() => setIsModalOpen(true)}>{t("cv.title")}</CvWrapper>
            <StyledCvModal
                overlayElement={(props, contentElement) => (
                    <StyledOverlay id="overlay" onClick={() => setIsModalOpen(false)} {...props}>
                        {contentElement}
                    </StyledOverlay>
                )}
                shouldCloseOnOverlayClick={true}
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
            >
                <CvGenially />
            </StyledCvModal>
        </>
    ) : (
        <a href={t("cv.url")} target="_blank" rel="noreferrer">
            <CvWrapper className="cv">{t("cv.title")}</CvWrapper>
        </a>
    );
};

export default Cv;
