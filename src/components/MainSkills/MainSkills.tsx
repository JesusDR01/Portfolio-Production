import { MainSkillsWrapper } from "./MainSkills.styled";
import * as data from "src/models/data.json";
import { useTranslation } from "react-i18next";
export const MainSkills = () => {
const { t } = useTranslation();

    return (
        <MainSkillsWrapper>
            <h2>{t("sections.skills.articles.main.title")}</h2>
            {data.primarySkills.map((skill, idx) => {
                return <img title={skill.name} key={idx} src={skill.img} alt={skill.name} width="250" height="250"/>;
            })}
        </MainSkillsWrapper>
    );
};
