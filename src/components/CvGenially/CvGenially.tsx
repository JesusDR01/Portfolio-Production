import { useTranslation } from "next-i18next";
import React from "react";
import { StyledCvGenially } from "./CvGenially.styled";

export const CvGenially = () => {
    const {t} = useTranslation(['frontPage']);
    return (
        <StyledCvGenially>
                <iframe
                    title="cv"
                    frameBorder={0}
                    width={1200}
                    height={675}
                    src={t("cv.url")}
                    allowFullScreen={true}
                    scrolling="yes"
                />
        </StyledCvGenially>
    );
};
