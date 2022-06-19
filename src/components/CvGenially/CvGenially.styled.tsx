import styled from "styled-components";

export const StyledCvGenially = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: -1;
    pointer-events: none;

    iframe{
        margin: 10px;
        pointer-events: all;
    }
`;
