import styled from "styled-components";

type NavbarProps = {
    show: boolean;
    showOnScroll: boolean;
    expand: boolean;
};

export const NavbarWrapper = styled.nav<NavbarProps>`

    opacity: ${({ showOnScroll }) => (showOnScroll ? 1 : 0)};
    position: fixed;
    display: flex;
    padding: 35px 45px;
    width: 100%;
    box-sizing: border-box;
    z-index: 2;
    flex-direction: column;
    transition: opacity 0.3s, height 0.3s;
    #nav-toggle {
        display: ${({ show }) => (show ? "flex" : "none")};
    }
    #navActions {
        justify-content: space-between;
        display: ${({ showOnScroll, show }) => (showOnScroll || !show ? "flex" : "none")};
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
        display: ${({ show }) => (show  ? "flex" : "none")};
        height: ${({ show, expand }) => (show && expand ? "100vh" : "0vh")};
        transition: all 0.3s;
        transform: translateX(${({ show, expand }) => (show && expand ? "0%" : "200%")});
        padding-left: 0px;
        list-style-type: none;
        flex-direction: column;
        align-items: center;

        a {
            display: ${({ showOnScroll }) => (showOnScroll ? "flex" : "none")};
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
        flex:0.8;
        margin: 10px;
        display: flex;
        align-items: center;
        

        #theme-switch {
            width: 70px;
            height: 30px;
            border-radius: 50px;
            position: relative;

            #ball {
                caret-color: transparent;
                width: 24px;
                height: 24px;
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
    }
`;
