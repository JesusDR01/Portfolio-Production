import styled from "styled-components";

export const PortfolioWrapper = styled.main`
    cursor:initial;
    text-align: center;

    background-color: #0f171e;
    min-height: 100vh;
    font-size: calc(10px + 2vmin);
    color: white;
    padding: 58px;
    .categories {
        width: 100%;
        margin-bottom: 15px;
    }

    .d-none {
        display: none;
    }

    #about, #skills, #projects {
        padding-top: 0px;
        margin-top: 0;
    }
`;
