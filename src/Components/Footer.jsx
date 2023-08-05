import React from "react";
import { useTranslation } from "react-i18next";
const Footer = () => {
    const { t, i18n } = useTranslation();
    return (
        <section id="footer" className="footer">
            <div className="footer-container">
                <img alt="sungadiman-masker.svg" src="/marker.svg"></img>
                <p>{t('alamat')}</p>
                <p>Jl. Petoran No.09 RT.001 / Rw.009 Jebres, Surakarta</p>
            </div>
            <div className="footer-container">
                <img alt="sungadiman-email.svg" src="/email.svg"></img>
                <p>Email</p>
                <p>Sungadimanpt@yahoo.com</p>
            </div>
            <div className="footer-container">
                <img alt="sungadiman-phone.svg" src="/phone.svg"></img>
                <p>{t('telepon')}</p>
                <p>0271-679380</p>
            </div>
            <div className="footer-logo-container">
                <img alt="sungadiman-footer-logo.svg" src="/footer-logo.svg"></img>
                <p>PT Sungadiman Makmur Sentosa</p>
                <p>PT Sungadiman Makmur Sentosa</p>
            </div>
        </section>
    );
};
export default Footer;
