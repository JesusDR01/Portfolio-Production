import { useState, memo } from "react";

import { Portfolio } from "./components/Portfolio/Portfolio";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/navigation/navigation.scss";

import SwiperCore, { Autoplay, Navigation } from "swiper/core";

import Navbar from "./components/Navbar/Navbar";

import { AppWrapper } from "./App.styled";
import FrontPage from "./components/FrontPage/FrontPage";
import { GlobalStyles } from "./themes";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "src/themes";

// install Swiper modules
SwiperCore.use([Autoplay, Navigation]);

const App: React.FC = () => {
    const [theme, setTheme] = useState("dark");

    const [showNav, setShowNav] = useState(false);
    const setThumbsSwiper = (e: any) => {
        setShowNav(e.isEnd);
        const mainArrowPrev = document.querySelector<HTMLElement>(".swiper-button-prev");
        if (mainArrowPrev) {
            mainArrowPrev.style.display = e.isEnd ? "block" : "none";
            mainArrowPrev.classList.add("arrow-custom");
        }
        const mainArrowNext = document.querySelector<HTMLElement>(".swiper-button-next");
        if (mainArrowNext) {
            mainArrowNext.style.display = e.isEnd ? "none" : "block";
        }
    };
    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <AppWrapper>
                <GlobalStyles />
                {<Navbar setTheme={setTheme} show={showNav} />}
                <Swiper
                    loop={false}
                    navigation={true}
                    slidesPerColumnFill={0 ? "row" : undefined}
                    slidesPerView={"auto"}
                    autoHeight={true}
                    className="mainSwiper"
                    onSlideChange={setThumbsSwiper}
                    grabCursor={true}
                >
                    <SwiperSlide className="front-component">
                        <FrontPage />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Portfolio />
                    </SwiperSlide>
                </Swiper>
            </AppWrapper>
        </ThemeProvider>
    );
};

export default App;
