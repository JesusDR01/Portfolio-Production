import { SkillsWrapper } from "./Skills.styled";
import { MainSkills } from "../MainSkills/MainSkills";
import { SecondarySkills } from "../SecondarySkills/SecondarySkills";
import { SoftSkills } from "../SoftSkills/SoftSkills";

const Skills: React.FC = () => {
    
    return (
        <SkillsWrapper>
            <MainSkills />
            <SecondarySkills />
            <SoftSkills />
        </SkillsWrapper>
    );
};

export default Skills;
