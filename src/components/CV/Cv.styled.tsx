import styled from "styled-components";
import Modal from "react-modal";

export const CvWrapper = styled.button`
    border-radius: 20px;
    padding: 13px;
    border: 3px solid black;
    cursor: pointer;

    &:hover {
        filter: invert(100%) sepia(88%) saturate(0%) hue-rotate(116deg) brightness(108%)
            contrast(100%);
    }
`;

export const StyledCvModal = styled(Modal)`
    #close-btn {
        background: transparent;
        border-radius: 50%;
        font-size: 2rem;
        padding: 0 7px;
        margin: auto;
        position: absolute;
        top: 10px;
        z-index: 99;
        right: 3px;
    }
`;

export const StyledOverlay = styled.div`
    cursor: pointer;
    position: absolute !important;
    height: 100vh;
    width: 100vw;
    z-index: 999;
    background-color: rgba(0, 15, 51, 0.9) !important;
`;
