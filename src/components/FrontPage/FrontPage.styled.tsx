import styled from "styled-components";

export const FrontPageWrapper = styled.div`
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    list-style-type: none;
    overflow-y: auto;
    padding: 20px;
    height: 95vh;
    h1{
        margin: 0;
        @media screen and (min-width: 992px) {
            width: 38vw;
            font-size: 4rem;
            align-self: flex-end;
        }
    }
`;
