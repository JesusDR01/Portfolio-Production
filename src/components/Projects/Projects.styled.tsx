import styled from "styled-components";

type ProjectsProps = {
    expand: boolean;
};
let width = 48;
export const ProjectsWrapper = styled.section<ProjectsProps>`
    .swiper-wrapper {
        height: auto !important;
        align-items: center;
        img {
            width: 69%;
            height: auto;
        }
        .arrow-expand {
            transition: all 0.5s;
            width: 40px;
            position: absolute;
            height: 40px;
            right: 15.5%;
            filter: invert(40%) sepia(47%) saturate(2646%) hue-rotate(166deg) brightness(101%)
                contrast(101%);
            background: #2745148f;
            border-radius: 17%;
            border: 2px solid white;
            transform: ${({ expand }) => (expand ? "rotate(180deg)" : "initial")};
            bottom: ${({ expand }) => (expand ? "0.1%" : "initial")};
            left: ${({ expand }) => (expand ? "15.5%" : "initial")};
            z-index: 1;
        }
    }
    .swiperSlide {
        display: flex;
        padding: 10px;
        align-items: center;
        justify-content: center;
    }
    .project-info {
        overflow-y: auto;
        transition: all 0.5s;
        opacity: ${({ expand }) => (expand ? "1" : "0")};
        width: 69%;
        position: absolute;
        top: 0;
        font-size: 14px;
        right: 15.5%;
        flex-direction: column-reverse;
        height: 100%;
        background: #0f1520ab;
        color: white;
        justify-content: flex-end;

        a {
            color: #79b8f3;
        }
        p {
            background-color: initial;
            color: white;
        }
    }

    @media (min-width: 992px) {
        .swiper-wrapper {
            height: auto !important;
            align-items: center;
            img {
                width: ${width}%;
            }
            .arrow-expand {
                right: 26%;
                left: ${({ expand }) => (expand ? `26%` : "initial")};
                bottom: ${({ expand }) => (expand ? "2.5%" : "initial")};
            }
        }
        .project-info {
            width: 48%;
            right: 26%;
            height: 97.7%;
            p {
                font-size: 1.1rem;
                margin: 10px;
            }
            a {
                font-size: 2rem;
            }
        }
    }
`;
