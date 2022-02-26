import { LanguageTogglerWrapper } from "./LanguageToggler.styled";
import { useTranslation } from 'react-i18next';

export const LanguageToggler = () => {
    const {i18n} = useTranslation();
    const changeLanguage = (lng:string) => {
      i18n.changeLanguage(lng);
    };

    return (
        <LanguageTogglerWrapper>
            <button onClick={() => changeLanguage('en')}>
                <img width="60" height="60" alt="UK flag" src="assets/svg/countries/united-kingdom.svg" />
            </button>
            <button>
                <img width="60" height="60" onClick={() => changeLanguage('es-ES')} alt="Spain flag" src="assets/svg/countries/spain.svg" />
            </button>
        </LanguageTogglerWrapper>
    );
};

export default LanguageToggler;
