import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Keyboard,
    Autoplay,
    Pagination,
    Navigation,
    Scrollbar,
    Lazy,
} from "swiper/core";
import { SwiperDataProject } from "src/models/SwiperDataProject";
import { ProjectsWrapper } from "./Projects.styled";
import * as data from "src/models/data.json";

import { useTranslation, TFunction } from "react-i18next";
SwiperCore.use([Autoplay, Pagination, Navigation, Scrollbar, Keyboard, Lazy]);
let swiperSlides: SwiperDataProject[] = data.projects;

export const Projects = () => {
    const { t } = useTranslation();
    const expandState = useState(false);
    return (
        <ProjectsWrapper expand={expandState[0]}>
            <Swiper
                lazy={true}
                keyboard={{
                    enabled: true,
                }}
                centeredSlides={true}
                loop={true}
                navigation={true}
                slidesPerColumnFill={0 ? "row" : undefined}
                autoHeight={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    768: {
                        slidesPerView: 1,
                    },
                    992: {
                        slidesPerView: 1,
                    },
                    1200: {
                        slidesPerView: 2,
                    },
                }}
            >
                {getSlides(swiperSlides, expandState, t)}
            </Swiper>
        </ProjectsWrapper>
    );
};

export default Projects;

function getSlides(
    data: SwiperDataProject[] | undefined,
    expandState: [boolean, React.Dispatch<React.SetStateAction<boolean>>],
    t: TFunction<"translation", undefined>
) {
    const [expand, setExpand] = expandState;
    let swiperSlides: JSX.Element[] = [];
    if (data) {
        data.forEach((project, idx) => {
            swiperSlides.push(
                <SwiperSlide key={idx}>
                    {<img alt={project.name} src={project.img} width="350" height="400" />}
                    <img
                        width="44"
                        height="44"
                        className="arrow-expand"
                        src="assets/svg/arrowExpand.svg"
                        alt="arrowExpand"
                        onClick={() => setExpand(!expand)}
                    />
                    <div className="project-info">
                        <div className="project-title">
                            <p>{project.name}</p>
                        </div>
                        <div className="project-description">
                            <p>{t("sections.projects.descriptions")[idx]}</p>
                        </div>
                        <p>
                            <a href={project.repo} target="_blank" rel="noopener noreferrer">
                                {t("sections.projects.repository")}
                            </a>
                        </p>
                        {project.web && (
                            <p>
                                <a href={project.web} target="_blank" rel="noopener noreferrer">
                                    Web
                                </a>
                            </p>
                        )}
                    </div>
                </SwiperSlide>
            );
        });
        return swiperSlides;
    }
}
