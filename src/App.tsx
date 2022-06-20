import { useEffect, useState } from "react";

import { Portfolio } from "./components/Portfolio/Portfolio";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles

import SwiperCore, { Autoplay, Navigation, Lazy, Keyboard } from "swiper/core";

import Navbar from "./components/Navbar/Navbar";

import { AppWrapper } from "./App.styled";
import FrontPage from "./components/FrontPage/FrontPage";
import { GlobalStyles } from "./themes";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "src/themes";
import { ScrollToTopBtn } from "./components/ScrollToTopBtn/ScrollToTopBtn";

// install Swiper modules
SwiperCore.use([Autoplay, Navigation, Lazy, Keyboard]);

const App: React.FC = () => {
    const [theme, setTheme] = useState("dark");
    const [showNav, setShowNav] = useState(false);
    const setThumbsSwiper = (e: any) => {
        setShowNav(e.isEnd);
        const mainArrowNext = document.querySelector<HTMLElement>(".swiper-button-next");
        if (mainArrowNext) {
            mainArrowNext.style.display = e.isEnd ? "none" : "block";
        }
    };
    useEffect(() => {
        const mainArrowPrev = document.querySelector<HTMLElement>(".swiper-button-prev");
        if (mainArrowPrev) {
            mainArrowPrev.style.display = showNav ? "block" : "none";
            mainArrowPrev.classList.add("arrow-custom");
        }
        document.body.style.overflow = showNav ? "auto" : "hidden";
    }, [showNav]);

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <AppWrapper className="animate__animated animate__fadeIn">
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
                    lazy={true}
                    observer={true}
                    keyboard={{
                        enabled: true,
                    }}
                >
                    <SwiperSlide tabIndex={0} className="front-component">
                        <FrontPage />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Portfolio />
                    </SwiperSlide>
                    <ScrollToTopBtn showBelow={250} />
                </Swiper>
            </AppWrapper>
        </ThemeProvider>
    );
};

export default App;
