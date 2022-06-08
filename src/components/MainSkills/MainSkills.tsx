import { MainSkillsWrapper } from "./MainSkills.styled";
import data from "src/models/data.json";
import { useTranslation } from "react-i18next";
import { SwiperDataSkill } from "src/models/SwiperDataSkill";

export const MainSkills = () => {
    const { t } = useTranslation();
    const primarySkills: SwiperDataSkill[] = data.primarySkills;
    return (
        <MainSkillsWrapper>
            <h2>{t("sections.skills.articles.main.title")}</h2>
            {primarySkills.map((skill, idx) => {
                return (
                    <img
                        title={skill.name}
                        key={idx}
                        src={skill.img}
                        alt={skill.name}
                        width="250"
                        height="250"
                    />
                );
            })}
        </MainSkillsWrapper>
    );
};
