import SwiperCore, { Autoplay, Pagination, Navigation, Lazy } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperDataSkill } from "src/models/SwiperDataSkill";
import * as data from "src/models/data.json";
import { SecondarySkillsWrapper } from "./SecondarySkills.styled";
import { useTranslation } from "react-i18next";
SwiperCore.use([Autoplay, Pagination, Navigation, Lazy]);

let swiperSlides: SwiperDataSkill[] = data.secondarySkills;

export const SecondarySkills = () => {
    const { t } = useTranslation();
    return (
        <SecondarySkillsWrapper id="secondary-skills">
            <h2>{t("sections.skills.articles.secondary.title")}</h2>
            <Swiper
                lazy={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                loop={false}
                slidesPerView={1}
                slidesPerColumn={2}
                slidesPerColumnFill={"row"}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
            >
                {getSlides(swiperSlides)}
            </Swiper>
        </SecondarySkillsWrapper>
    );
};

function getSlides(data: SwiperDataSkill[] | undefined) {
    let swiperSlides: JSX.Element[] = [];
    if (data) {
        data.forEach((skill, idx) => {
            swiperSlides.push(
                <SwiperSlide key={idx}>
                    {<img loading='lazy' alt={skill.name} src={skill.img} height="250" width="250" />}
                </SwiperSlide>
            );
        });
        return swiperSlides;
    }
}
