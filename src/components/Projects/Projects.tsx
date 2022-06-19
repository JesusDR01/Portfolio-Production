import { SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Scrollbar, Lazy } from "swiper/core";
import { SwiperDataProject } from "src/models/SwiperDataProject";
import { ProjectsWrapper } from "./Projects.styled";
import data from "src/models/data.json";

import Project from "../Project/Project";
SwiperCore.use([Autoplay, Navigation, Scrollbar, Lazy]);
let swiperSlides: SwiperDataProject[] = data.projects;

const Projects = () => {
    return (
        <ProjectsWrapper >
            {swiperSlides.map((project, idx) => (
                <Project idx={idx} data={project} />
            ))}
     </ProjectsWrapper>
    );
};

export default Projects;
