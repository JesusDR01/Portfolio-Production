import styled from "styled-components";

type ScrollToTopBtnProps = {
    show: boolean;
};
export const StyledScrollToTopBtn = styled.div<ScrollToTopBtnProps>`
    pointer-events: ${({ show }) => (show ? "all" : "none")};
    opacity: ${({ show }) => (show ? 1 : 0)};
    cursor: pointer;
    transition: all 0.2s;
    z-index: 2;
    position: fixed;
    bottom: 30px;
    width: 11vw;
    max-width: 34px;
    height: 11vw;
    right: 0;
    max-height: 34px;
    background-color: #57ffff;
    color: black;
    border-radius: 50%;
    &:hover {
        background-color: #00e0e0;
    }
    svg {
        height: 23px;
        top: 5px;
        position: relative;
        vertical-align: middle;
        width: 100%;
    }
`;
