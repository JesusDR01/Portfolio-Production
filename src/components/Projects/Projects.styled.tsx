import styled from "styled-components";

type ProjectsProps = {
    expand: boolean;
};
let width = 48;
export const ProjectsWrapper = styled.section<ProjectsProps>`
    .swiper-wrapper {
        height: auto !important;
        align-items: center;
        .project-img {
            width: 55%;
            height: auto;
        }
        .arrow-expand {
            top: ${({ expand }) => (expand ? "initial" : "0")};
            transition: all 0.5s;
            width: 26px;
            position: absolute;
            height: 28px;
            right: 22.5%;
            filter: invert(40%) sepia(47%) saturate(2646%) hue-rotate(166deg) brightness(101%)
                contrast(101%);
            background: #2745148f;
            border-radius: 17%;
            border: 2px solid white;
            transform: ${({ expand }) => (expand ? "rotate(180deg)" : "initial")};
            bottom: ${({ expand }) => (expand ? "0.1%" : "initial")};
            left: ${({ expand }) => (expand ? "2.5%" : "initial")};
            z-index: 999;
        }
    }

    .project-info {
        overflow-y: auto;
        transition: all 0.5s;
        opacity: ${({ expand }) => (expand ? "1" : "0")};
        width: 55%;
        position: absolute;
        top: 0;
        font-size: 14px;
        right: 22.5%;
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
    .project-technologies {
        top: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        img {
            margin: 8px 2px;
            height: 8vh;
            vertical-align: top;
        }
    }
    .project {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        position: relative;
    }

    @media (min-width: 992px) {
        .swiper-wrapper {
            height: auto !important;
            align-items: center;
            .project-img {
                width: ${width}%;
            }
            .arrow-expand {
                right: 26%;
                left: ${({ expand }) => (expand ? `26%` : "initial")};
                bottom: ${({ expand }) => (expand ? "0%" : "initial")};
            }
        }
        .project-info {
            width: 48%;
            right: 26%;
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
