import styled from "styled-components";

type LanguageTogglerProps = {
    show?: boolean;
};

export const LanguageTogglerWrapper = styled.div<LanguageTogglerProps>`
    display: flex;
    flex: 0.5;
    caret-color: transparent;

    background: transparent;
    border: none;
    
    img {
        flex: 0.5;
        margin:0 5px;
        width: 30px;
        height: auto;
        cursor: pointer;
    }
`;
