import styled from "styled-components";


let width = 48;
export const ProjectWrapper = styled.section`
scroll-snap-align: center;
    margin: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    min-width: 100%;
    flex: 1;
    @media (min-width: 768px) {
        flex-basis: 44% !important;
        margin: 38px;
        flex-grow: 1 !important;
        flex-shrink: 0.2 !important;
        -webkit-flex-direction: row;
        display: flex;
        justify-content: center;
        min-width: auto;
        img {
            max-width: 44% !important;
            object-fit: contain !important;
        }
    }
    .project-technologies {
        width: 100%;
        padding: 3px;
        flex-wrap: wrap;
        top: 0;
        display: flex;
        flex-direction: row;
        img {
            margin: 8px 2px;
            /* height: 8vh; */
            vertical-align: top;
        }
        .badge {
            width: auto;
            min-width: 20%;
            padding: 3px;
        }
    }

    .project-img {
        object-fit: cover;
        width: 100%;
        height: auto;
    }
    .project-info {
        transition: all 0.5s;
        top: 0;
        flex-direction: column-reverse;
        justify-content: flex-end;

        a {
            color: #79b8f3;
        }
        .project-description {
            margin: 10px;
        }
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
            }
        }
    }
`;
