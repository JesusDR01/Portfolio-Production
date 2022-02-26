import styled from "styled-components";

export const SecondarySkillsWrapper = styled.article`
    .swiper-wrapper {
        align-items: center;
    }
    img{
        width: 70%;
        height: auto;
    }
    @media (min-width: 992px) {
        width: 30%;
        display: flex;
        flex-direction: column;
        .swiper-wrapper {
            img {
                width: 57%;
            }
        }
        .swiper-container {
            width: 100%;
        }
    }
`;
