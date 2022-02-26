import styled from "styled-components";

type LanguageTogglerProps = {
    show?: boolean;
};

export const LanguageTogglerWrapper = styled.div<LanguageTogglerProps>`
    display: flex;
    flex: 0.5;
    caret-color: transparent;
    button {
        background: transparent;
        border: none;
        flex: 0.5;

        img {
            width: 100%;
            height: auto;
        }
    }
    @media (min-width: 564px) {
        flex: 0.2;
    }
`;
