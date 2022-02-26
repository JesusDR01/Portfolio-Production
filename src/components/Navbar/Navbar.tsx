import { Dispatch, SetStateAction, useEffect, useState } from "react";
import LanguageToggler from "../LanguageToggler/LanguageToggler";
import { NavbarWrapper } from "./Navbar.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faBars } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

export const Navbar = ({
    show = false,
    setTheme,
}: {
    show: boolean;
    setTheme: Dispatch<SetStateAction<string>>;
}) => {
    const { t } = useTranslation();
    const [expandNav, setExpandNav] = useState(false);
    const liList = [
        { content: t("sections.skills.title"), href: "#root" },
        { content:  t("sections.projects.title"), href: "#projects" },
    ];
    const toggle = () => {
        setExpandNav(!expandNav);
    };

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
        <NavbarWrapper show={show && showOnScroll} showOnScroll={showOnScroll} expand={expandNav}>
            <div id="navActions">
                <div id="extraBtnsWrapper">
                    <LanguageToggler />
                    <div id="switch-wrapper">
                        <FontAwesomeIcon icon={faMoon} />
                        <button
                            id="theme-switch"
                            aria-label="Switch dark/light theme"
                            onClick={() =>
                                setTheme((theme) => (theme === "light" ? "dark" : "light"))
                            }
                        >
                            <div id="ball"></div>
                        </button>
                        <FontAwesomeIcon icon={faSun} />
                    </div>
                </div>
                <button id="nav-toggle" aria-label="Show menu" onClick={toggle}>
                <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
            <ul>
                {liList.map((li, idx) => (
                    <a key={idx} href={li.href}>
                        <li onClick={toggle}>{li.content}</li>
                    </a>
                ))}
            </ul>
        </NavbarWrapper>
    );
};

export default Navbar;
