import styled from "styled-components";

export const PortfolioWrapper = styled.div`
    cursor:initial;
    text-align: center;

    background-color: #0f171e;
    min-height: 100vh;
    font-size: calc(10px + 2vmin);
    color: white;
    padding: 35px;
    .categories {
        width: 100%;
        margin-bottom: 15px;
    }

    .d-none {
        display: none;
    }

  

    #about, #skills, #projects {
        padding-top: 125px;
        margin-top: 0;
    }
`;
