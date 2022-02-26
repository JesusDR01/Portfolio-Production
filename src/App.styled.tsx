import styled from "styled-components";

export const AppWrapper = styled.div`
    .front-component {
        height: 100vh;
    }
    .mainSwiper > .swiper-button-next,
    .mainSwiper > .swiper-button-prev {
        font-weight: bolder;
    }

    .mainSwiper > .swiper-button-prev {
        display: none;
        position: fixed !important;
    }

    font-family: ember, Arial, sans-serif !important;
    @font-face {
        font-family: "ember";
        src: local("ember"), url("../../assets/fonts/ember.ttf") format("opentype");
        font-display: swap;
    }
`;
