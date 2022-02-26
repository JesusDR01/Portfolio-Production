import styled from "styled-components";

export const AboutWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 66%;
    
    p {
        text-align: justify;
        margin-left: 10px;
    }
    img {
        width: 80%;
        border: 3px solid #c2e4ff;
        border-radius: 20%;
        height: auto;
    }

    @media (min-width: 524px) {
        img {
            max-width: 45%;
        }
    }

    @media (min-width: 992px) {
        p {
            font-size: 1.5rem;
            max-width: 55%;
        }
        img {
            max-width: 35%;
        }
    }

    @media (min-width: 1650px) {
        p {
            font-size: 1.7rem;
            width: 55%;
        }
        img {
            width: 25%;
        }
    }
`;
