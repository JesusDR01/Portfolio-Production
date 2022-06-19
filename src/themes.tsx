import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: "#fff",
    fontColor: "#000",
    switchWrapperColor: "#000",
    switchBallColor: "#fff",
    switchTranslate: "150%",
    githubFilter: "",
    border: "black"
};

export const darkTheme = {
    body: "#0f171e",
    fontColor: "#fff",

    switchWrapperColor: "#fff",
    switchBallColor: "#000",
    githubFilter:
        "invert(100%) sepia(0%) saturate(7494%) hue-rotate(44deg) brightness(112%) contrast(105%)",
        border: "white"
};
type ThemeProviderProps = {
    theme: {
        body: string;
        fontColor: string;
        switchWrapperColor: string;
        switchBallColor: string;
        switchTranslate: string;
        githubFilter: string;
        border: string;
    };
};

export const GlobalStyles = createGlobalStyle<ThemeProviderProps>`
    html{
        scroll-snap-type: y mandatory;
    }
	#portfolio, body, ::-webkit-scrollbar-track,p,h1,nav, nav a, nav li,#theme-switch, #ball, .cv, .badges a, #swipe-advise {
        background-color: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.fontColor};
	}
    .mainSwiper > .swiper-button-next, .mainSwiper > .swiper-button-prev{
        color: ${({ theme }) => theme.fontColor};
    }

    #theme-switch{
        background-color: ${({ theme }) => theme.switchWrapperColor};
    }
    #ball{
        transform: translateX(${({ theme }) => theme.switchTranslate});
    }

    .media-github img, #soft-skills img{
            filter: ${({ theme }) => theme.githubFilter};
    }

    .badge{
        border: 1px solid ${({ theme }) => theme.border};
    }

    /* .swiper-wrapper{
        height: auto !important;
    } */
    
`;
