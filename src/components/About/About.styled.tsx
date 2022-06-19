import styled from "styled-components";

export const AboutWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    p {
        text-align: justify;
        margin-left: 10px;
    }
    img {
        border: 3px solid #c2e4ff;
        border-radius: 20%;
        height: auto;
        width: 95%;
        max-width: 350px;
    }

    @media screen and (min-width: 992px) {
        > div {
            flex: 1;
        }
        p {
            margin-right: 3vw;
            font-size: 4rem;
            flex: 0.6;
        }
    }

    /* @media (min-width: 524px) {
        img {
            max-width: 90%;
        }
    }

    @media (min-width: 992px) {
        p {
            font-size: 1.5rem;
            max-width: 18%;
        }
        img {
            max-width: 70%;
        }
    }

    @media (min-width: 1650px) {
        p {
            font-size: 1.7rem;
            width: 18%;
        }
        img {
            width: 90%;
        }
    } */
`;
