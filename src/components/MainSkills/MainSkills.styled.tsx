import styled from "styled-components";

export const MainSkillsWrapper = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 0.5;

    img {
        box-sizing: border-box;
        width: 100%;
        height: auto;
    }
    @media (min-width: 992px) {
        flex: 1;
        img {
            width: 64%;
        }
    }
`;
