import styled from "styled-components";

export const SoftSkillsWrapper = styled.article`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    img {
        width: 3rem;
        height: auto;
    }
    p {
        display: flex;
        flex-wrap: wrap;
        min-width: 246px;
        margin: 0px;
        align-items: center;
        justify-content: space-between;
        flex-direction: row-reverse;
        margin: 13px 0px;
    }
    span {
        font-size: 1rem;
    }
    @media (min-width: 992px) {
        p {
            width: 373px;
            margin: 14px;
            flex-wrap: nowrap;
            span {
                font-size: 1.5rem;
            }
            img {
                width: 42px;
            }
        }
    }
`;
