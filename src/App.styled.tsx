import styled from "styled-components";

export const AppWrapper = styled.div`
    font-family: ember, Arial, sans-serif;

    .front-component {
        height: 100vh;
        /* overflow-y: auto; */

    }
    .mainSwiper > .swiper-button-next,
    .mainSwiper > .swiper-button-prev {
        font-weight: bolder;
    }

    @font-face {
        font-family: "ember";
        src: local("ember"), url("../../assets/fonts/ember.ttf") format("opentype");
        font-display: swap;
    }

    .arrow-custom {
        display: none;
        position: fixed;
        background-color: transparent;
        width: 18px;
        height: 28px;
        &::after {
            font-size: 22px;
        }
    }
`;
