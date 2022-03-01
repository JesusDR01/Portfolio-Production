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
            width: 30px;
            height: auto;
            cursor: pointer;
        }
    }
`;
