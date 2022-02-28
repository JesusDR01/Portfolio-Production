import styled from "styled-components";

export const CvWrapper = styled.button`
    border-radius: 20px;
    padding: 13px;
    border: 3px solid black;
    cursor: pointer;

    &:hover {
        filter: invert(100%) sepia(88%) saturate(0%) hue-rotate(116deg) brightness(108%) contrast(100%);
    }
`;
