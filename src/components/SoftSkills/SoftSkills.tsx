import { SoftSkillsWrapper } from "./SoftSkills.styled";
import { useTranslation } from "react-i18next";
export const SoftSkills = () => {
    const { t } = useTranslation();
    const skills:string[] = Array.from(t("sections.skills.articles.soft.content"));
    return (
        <SoftSkillsWrapper>
            <h2>{t("sections.skills.articles.soft.title")}</h2>
            {skills.map((skill, idx) => (
                <p key={idx}>{skill}</p>
            ))}
               {
                <p>{}</p>
            }
        </SoftSkillsWrapper>
    );
};
