import { SoftSkillsWrapper } from "./SoftSkills.styled";
import { useTranslation } from "next-i18next";
import data from "src/models/data.json";
export const SoftSkills = () => {
    const { t } = useTranslation(['projectsPage']);
    const skills: string[] = Array.from(t("sections.skills.articles.soft.content", {returnObjects:true}));
    return (
        <SoftSkillsWrapper id="soft-skills">
            <h2>{t("sections.skills.articles.soft.title")}</h2>
            {data.softSkills.map((skill, idx) => (
                <p key={idx}>
                    <span>{skills[idx]}</span>
                    <img title={skill.name} src={skill.img} alt={skills[idx]} height="10" width="10" />
                </p>
            ))}
        </SoftSkillsWrapper>
    );
};
