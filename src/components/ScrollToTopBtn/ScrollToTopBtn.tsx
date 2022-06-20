import { StyledScrollToTopBtn } from "./ScrollToTopBtn.styled";
import React, { useState, useEffect } from "react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ScrollToTopBtn = ({ showBelow }: { showBelow: number }) => {
    const [show, setShow] = useState(showBelow ? false : true);

    const handleScroll = () => {
        if (window.pageYOffset > showBelow) {
            if (!show) setShow(true);
        } else {
            if (show) setShow(false);
        }
    };
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: `smooth` });
    };

    useEffect(() => {
        if (showBelow) {
            window.addEventListener(`scroll`, handleScroll);
            return () => window.removeEventListener(`scroll`, handleScroll);
        }
    });

    return (
        <StyledScrollToTopBtn show={show} id="scrollToTopBtn">
            <FontAwesomeIcon
                onClick={handleClick}
                aria-label="to top"
                icon={faArrowUp}
            />
        </StyledScrollToTopBtn>
    );
};
