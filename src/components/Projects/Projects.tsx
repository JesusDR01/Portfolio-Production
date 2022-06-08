import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Scrollbar, Lazy } from "swiper/core";
import { SwiperDataProject } from "src/models/SwiperDataProject";
import { ProjectsWrapper } from "./Projects.styled";
import data from "src/models/data.json";

import { useTranslation, TFunction } from "react-i18next";
SwiperCore.use([Autoplay, Navigation, Scrollbar, Lazy]);
let swiperSlides: SwiperDataProject[] = data.projects;

const Projects = () => {
    const { t } = useTranslation();
    const expandState = useState(false);
    return (
        <ProjectsWrapper expand={expandState[0]}>
            <Swiper
                lazy={true}
          
                centeredSlides={true}
                loop={true}
                navigation={true}
                slidesPerColumnFill={0 ? "row" : undefined}
                autoHeight={true}
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
                    <div className="project-technologies">
                        {project.technologies.map((tech, idx) => (
                            <img title={tech.name} width="80" height="80" key={idx} alt={tech.name} src={tech.img} />
                        ))}
                    </div>
                    <div className="project">
                        {
                            <img
                                title={project.name}
                                className="project-img"
                                loading="lazy"
                                alt={project.name}
                                src={project.img}
                                width="350"
                                height="400"
                            />
                        }
                        <img
                            title={`${t("sections.projects.expandTitle")} ${project.name}`}
                            role="button"
                            width="44"
                            height="44"
                            className="arrow-expand"
                            src="assets/svg/arrowExpand.svg"
                            alt="arrowExpand"
                            onClick={() => setExpand(!expand)}
                            tabIndex={0}
                        />
                        <div className="project-info">
                            <p className="project-title">{project.name}</p>
                            <p className="project-description">
                                {t("sections.projects.descriptions")[idx]}
                            </p>
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
                    </div>
                </SwiperSlide>
            );
        });
        return swiperSlides;
    }
}
