import styled from "styled-components";

type StyledBadgeProps = {
    variant: "primary" | "outlined";
};
export const StyledBadge = styled.div<StyledBadgeProps>`
    width: 30%;
    border-radius: 10px;
    padding: 10px;
    margin: 5px;
    border: 1px solid white;
    color: black;
    font-weight: bold;
    text-align: center;
    background-color: ${({ variant }) => (variant === "primary" ? "#83cd29" : "#01b2ff")};

    @media screen and (min-width: 992px) {
        width: 100px;
    }
`;
