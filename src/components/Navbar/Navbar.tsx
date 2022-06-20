import { Dispatch, SetStateAction, useEffect, useState, memo } from "react";
import LanguageToggler from "../LanguageToggler/LanguageToggler";
import { NavbarWrapper } from "./Navbar.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "next-i18next";

import Media from "../Media/Media";
export const Navbar = memo(
    ({ show = false, setTheme }: { show: boolean; setTheme: Dispatch<SetStateAction<string>> }) => {
        const { t } = useTranslation(["projectsPage", "common"]);
        const [expandNav] = useState(false);

        const [showOnScroll, setShowOnScroll] = useState(true);

        useEffect(() => {
            let lastScroll = 0;
            const controlNavbar = () => {
                if (window.scrollY >= lastScroll) {
                    setShowOnScroll(false);
                } else {
                    setShowOnScroll(true);
                }
                if (window.scrollY === 0) {
                    setShowOnScroll(true);
                }
                lastScroll = window.scrollY;
            };
            window.addEventListener("scroll", controlNavbar);
            return () => {
                window.removeEventListener("scroll", controlNavbar);
            };
        }, []);

        return (
            <NavbarWrapper show={show} showOnScroll={showOnScroll} expand={expandNav}>
                <div id="navActions">
                    <div id="extraBtnsWrapper">
                        <LanguageToggler />
                        <div id="switch-wrapper">
                            <FontAwesomeIcon title={t("common:themeToggler.dark")} icon={faMoon} />
                            <button
                                title={t("themeToggler.switch")}
                                id="theme-switch"
                                aria-label="Switch dark/light theme"
                                onClick={() =>
                                    setTheme((theme) => (theme === "light" ? "dark" : "light"))
                                }
                            >
                                <div id="ball"></div>
                            </button>
                            <FontAwesomeIcon
                                id="light-icon"
                                title={t("common:themeToggler.light")}
                                icon={faSun}
                            />
                        </div>
                        <div id="media">
                            <Media />
                        </div>
                    </div>
              
                </div>
                <div id="name">
                    <p>Jesús Díaz Rivas</p>
                </div>
            </NavbarWrapper>
        );
    }
);

export default Navbar;
