import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: "#fff",
    fontColor: "#000",
    switchWrapperColor: "#000",
    switchBallColor: "#fff",
    switchTranslate: "150%"
};

export const darkTheme = {
    body: "#0f171e",
    fontColor: "#fff",

    switchWrapperColor: "#fff",
    switchBallColor: "#000",
};
type ThemeProviderProps = {
    theme: {
        body: string;
        fontColor: string;
        switchWrapperColor: string;
        switchBallColor: string;
        switchTranslate: string;
    };
};

export const GlobalStyles = createGlobalStyle<ThemeProviderProps>`
    
	#portfolio, body, ::-webkit-scrollbar-track,p,h1,nav, nav a, nav li, .mainSwiper > .swiper-button-next, .mainSwiper > .swiper-button-prev,#theme-switch, #ball {
        background-color: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.fontColor};
	}

    #theme-switch{
        background-color: ${({ theme }) => theme.switchWrapperColor};
    }
    #ball{
        transform: translateX(${({ theme }) => (theme.switchTranslate)});
    }
    
`;
