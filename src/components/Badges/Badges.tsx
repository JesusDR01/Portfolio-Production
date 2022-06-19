import React, { useState, MouseEvent, useEffect } from "react";
import { Badge } from "../Badge/Badge";
import { StyledBadges } from "./Badges.styled";
import data from "src/models/data.json";
import { useTranslation } from "next-i18next";
import { useMediaQuery } from "react-responsive";
export const Badges = () => {
    const { t } = useTranslation(["frontPage"]);
    const [viewMore, setViewMore] = useState(false);
    const isBiggerThanMobile = useMediaQuery({ query: "(min-width: 994px)" });
    useEffect(() => {
        if (isBiggerThanMobile) {
            setViewMore(true);
        }
    }, [isBiggerThanMobile]);

    useEffect(() => {
        if (viewMore) {
            if (typeof window !== "undefined") {
                const { swiper } = window as any;
                swiper.updateAutoHeight();
                // console.log(window.swiper);
            }
        }
    }, [viewMore]);

    return (
        <StyledBadges className="badges">
            {data.primarySkills.map((data, i) => (
                <Badge key={i} variant="primary" data={data} />
            ))}
            {viewMore ? (
                data.secondarySkills.map((data, i) => (
                    <Badge key={i} variant="outlined" data={data} />
                ))
            ) : (
                <a
                    href="/"
                    onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                        e.preventDefault();
                        setViewMore(true);
                    }}
                >
                    {t("more")}
                </a>
            )}
        </StyledBadges>
    );
};
