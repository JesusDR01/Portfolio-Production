import { LanguageTogglerWrapper } from "./LanguageToggler.styled";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

export const LanguageToggler = () => {
    const { t } = useTranslation(["common"]);

    const { pathname } = useRouter();

    return (
        <LanguageTogglerWrapper>
            <Link href={pathname} locale="en">
                <img
                    title={t("languageToggler.EN")}
                    width="60"
                    height="60"
                    alt="UK flag"
                    src="assets/svg/countries/united-kingdom.svg"
                />
            </Link>
            <Link href={pathname} locale="es-ES">
                <img
                    title={t("languageToggler.ES")}
                    width="60"
                    height="60"
                    alt="Spain flag"
                    src="assets/svg/countries/spain.svg"
                />
            </Link>
        </LanguageTogglerWrapper>
    );
};

export default LanguageToggler;
