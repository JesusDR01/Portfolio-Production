import styled from "styled-components";

export const FooterWrapper = styled.footer`
    padding: 24px;
    font-size: 13px;
    font-weight: bold;
    flex-direction: column;
    margin-top: 150px;
    &,
    .information {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
    }

    .information {
        width: 100%;
    }

    span {
        color: #79b8f3;
        :not(.credits) {
            cursor: pointer;
        }
        &.credits {
            color: #8197a4;
            margin-top: 10px;
        }
    }

    div {
        margin-top: 10px;
        width: 70%;
        display: flex;
        justify-content: space-between;
    }

    ul {
        margin-left: 0%;
        padding-left: 0;
    }

    @media (min-width: 992px) {
        padding-left: 0;
        margin-right: 25px;
        .information {
            flex-flow: row;
            justify-content: space-evenly;
            margin-top: 0;
            div {
                margin-top: 0;
                width: unset;
                justify-content: space-between;
                width: 200px;
            }
        }
        ul {
            margin-left: 45px;
        }
        span {
            &.credits {
                margin-top: 0;
            }
        }
    }
`;
