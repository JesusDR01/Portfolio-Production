import styled from "styled-components";

type NavbarProps = {
    show: boolean;
    showOnScroll: boolean;
    expand: boolean;
};

export const NavbarWrapper = styled.nav<NavbarProps>`
    position: fixed;
    display: flex;
    padding: 35px 45px;
    width: 100%;
    box-sizing: border-box;
    z-index: 2;
    flex-direction: column;
    transition: opacity 0.3s, height 0.3s;
    opacity: ${({ showOnScroll, expand }) => (showOnScroll || expand ? 1 : 0)};

    #nav-toggle {
        display: ${({ show }) => (show ? "flex" : "none")};
    }
    #navActions {
        justify-content: space-between;

        display: flex;
    }
    #extraBtnsWrapper {
        display: flex;
    }

    #nav-toggle {
        color: #01b2ff;
        background: none;
        align-self: center;
        border: none;
        font-size: 30px;
        padding: 0 20px;
        cursor: pointer;
        caret-color: transparent;
    }

    ul {
        display: ${({ show }) => (show ? "flex" : "none")};
        height: ${({ show, expand }) => (expand ? "100vh" : "0vh")};
        transition: all 0.3s;
        transform: translateX(${({ show, expand }) => (show && expand ? "0%" : "200%")});
        padding-left: 0px;
        list-style-type: none;
        flex-direction: column;
        align-items: center;

        a {
            text-decoration: none;
        }
        li {
            display: flex;
            cursor: pointer;
            font-weight: 700;
            margin: 7px;

            &:hover {
                color: #79b8f3;
            }
        }
    }
    #switch-wrapper {
        flex: 0.8;
        margin: 10px;
        display: flex;
        align-items: center;
        #light-icon {
            margin-left: 2px;
        }
        #theme-switch {
            cursor: pointer;
            width: 43px;
            height: 19px;

            border-radius: 50px;
            position: relative;

            #ball {
                caret-color: transparent;
                width: 13px;
                height: 13px;

                border-radius: 100%;
                position: absolute;
                top: 1px;
                left: 4px;
                transition: 0.5s all ease;
            }
        }
    }

    @media (min-width: 992px) {
        flex-direction: row;
        justify-content: space-between;
        height: initial;
        ul,
        #nav-toggle {
            opacity: ${({ showOnScroll }) => (showOnScroll ? 1 : 0)};
        }
        #nav-toggle {
            display: none;
        }
        ul {
            display: ${({ show }) => (show ? "flex" : "none")};
            flex-direction: row;
            justify-content: flex-end;
            margin: 0;
            transform: translateX(${({ show }) => (show ? "0%" : "200%")});
            height: initial;
        }
        #theme-switch {
            width: 70px;
            height: 30px;
            #ball {
                width: 24px;
                height: 24px;
            }
        }
    }
`;
