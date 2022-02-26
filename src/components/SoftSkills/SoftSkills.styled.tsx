import styled from "styled-components";

export const SoftSkillsWrapper = styled.article`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    img {
        width: 30px;
        height: auto;
    }
    p {
        display: flex;
        width: 100%;
        margin: 0px;
        align-items: center;
        justify-content: space-between;
    }
    @media (min-width: 992px) {
        p{
            width: 327px;
        }
    }
`;
