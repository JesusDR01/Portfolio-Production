import styled from "styled-components";
import { Swiper } from "swiper/react";
export const ProjectsWrapper = styled.div`
    /* height: auto !important; */
    /* align-items: center; */
    display:flex;
    flex-wrap: wrap;
    flex-direction: column;

    @media screen and (min-width:768px) {
        flex-direction:row;
    }
`;
