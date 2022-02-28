import { LanguageTogglerWrapper } from "./LanguageToggler.styled";
import { useTranslation } from 'react-i18next';
import { t } from "i18next";

export const LanguageToggler = () => {
    const {i18n} = useTranslation();
    const changeLanguage = (lng:string) => {
      i18n.changeLanguage(lng);
    };

    return (
        <LanguageTogglerWrapper>
            <button onClick={() => changeLanguage('en')}>
                <img title={t("languageToggler.EN")} width="60" height="60" alt="UK flag" src="assets/svg/countries/united-kingdom.svg" />
            </button>
            <button onClick={() => changeLanguage('es-ES')}>
                <img title={t("languageToggler.ES")} width="60" height="60" alt="Spain flag" src="assets/svg/countries/spain.svg" />
            </button>
        </LanguageTogglerWrapper>
    );
};

export default LanguageToggler;
