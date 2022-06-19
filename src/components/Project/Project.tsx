// import { useEffect, useState } from "react";
import { SwiperDataProject } from "src/models/SwiperDataProject";
import { ProjectWrapper } from "./Project.styled";
import { useTranslation } from "next-i18next";
import Badge from "../Badge";

const Project = ({ idx, data }: { idx: number; data: SwiperDataProject }) => {
    const { t } = useTranslation(["projectsPage"]);

    return (
        <ProjectWrapper className="project">
            <img
                title={data.name}
                className="project-img"
                loading="lazy"
                alt={data.name}
                src={data.img}
                width="350"
                height="400"
            />

            <div className="project-info">
                <h2 className="project-title">{data.name}</h2>
                <p className="project-description">
                    {t("sections.projects.descriptions", { returnObjects: true })[idx]}
                </p>
                {data.repo && (
                    <p>
                        <a href={data.repo} target="_blank" rel="noopener noreferrer">
                            {t("sections.projects.repository")}
                        </a>
                    </p>
                )}
                {data.web && (
                    <p>
                        <a href={data.web} target="_blank" rel="noopener noreferrer">
                            Web
                        </a>
                    </p>
                )}
                <div className="project-technologies">
                    {data.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outlined" data={tech} />
                    ))}
                </div>
            </div>
        </ProjectWrapper>
    );
};

export default Project;
