import React from "react";
import { useTranslation } from "react-i18next";

const MisiVisi = () => {
    const { t, i18n } = useTranslation();

    return (
        <section id="misi-visi" className="misi-visi">
            <div className="visi-container">
                <p data-aos="fade-up" className="visi-heading">
                {t('visiTitle')}
                </p>
                <div className="visi-card-container">
                    <div
                        data-aos="zoom-in"
                        data-aos-duration="1200"
                        className="visi-card"
                    >
                        <div
                            data-aos="zoom-in-down"
                            data-aos-duration="1200"
                            className="visi-icon"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 28 28"
                                fill="none"
                            >
                                <path
                                    d="M13.9883 2.3335C7.54832 2.3335 2.32166 7.56016 2.32166 14.0002C2.32166 20.4402 7.54832 25.6668 13.9883 25.6668C20.4283 25.6668 25.655 20.4402 25.655 14.0002C25.655 7.56016 20.4283 2.3335 13.9883 2.3335ZM18.2 9.73016C19.4483 9.73016 20.4517 10.7335 20.4517 11.9818C20.4517 13.2302 19.4483 14.2335 18.2 14.2335C16.9517 14.2335 15.9483 13.2302 15.9483 11.9818C15.9367 10.7335 16.9517 9.73016 18.2 9.73016ZM11.2 7.88683C12.7167 7.88683 13.9533 9.1235 13.9533 10.6402C13.9533 12.1568 12.7167 13.3935 11.2 13.3935C9.68332 13.3935 8.44666 12.1568 8.44666 10.6402C8.44666 9.11183 9.67166 7.88683 11.2 7.88683ZM11.2 18.5385V22.9135C8.39999 22.0385 6.18332 19.8802 5.20332 17.1268C6.42832 15.8202 9.48499 15.1552 11.2 15.1552C11.8183 15.1552 12.6 15.2485 13.4167 15.4118C11.5033 16.4268 11.2 17.7685 11.2 18.5385ZM13.9883 23.3335C13.6733 23.3335 13.37 23.3218 13.0667 23.2868V18.5385C13.0667 16.8818 16.4967 16.0535 18.2 16.0535C19.4483 16.0535 21.6067 16.5085 22.68 17.3952C21.315 20.8602 17.9433 23.3335 13.9883 23.3335Z"
                                    fill="#16B1FF"
                                />
                            </svg>
                        </div>
                        <p className="visi-title">{t('visi1')}</p>
                        <p className="visi-text">
                        {t('visi1Desc')}
                        </p>
                    </div>
                    <div
                        data-aos="zoom-in"
                        data-aos-duration="1200"
                        data-aos-delay="200"
                        className="visi-card"
                    >
                        <div
                            data-aos="zoom-in-down"
                            data-aos-duration="1200"
                            data-aos-delay="200"
                            className="visi-icon"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 28 28"
                                fill="none"
                            >
                                <path
                                    d="M23.3334 7.00016H18.6667V4.66683C18.6667 3.3835 17.6167 2.3335 16.3334 2.3335H11.6667C10.3834 2.3335 9.33337 3.3835 9.33337 4.66683V7.00016H4.66671C3.38337 7.00016 2.33337 8.05016 2.33337 9.3335V23.3335C2.33337 24.6168 3.38337 25.6668 4.66671 25.6668H23.3334C24.6167 25.6668 25.6667 24.6168 25.6667 23.3335V9.3335C25.6667 8.05016 24.6167 7.00016 23.3334 7.00016ZM11.6667 4.66683H16.3334V7.00016H11.6667V4.66683ZM18.6667 17.5002H15.1667V21.0002H12.8334V17.5002H9.33337V15.1668H12.8334V11.6668H15.1667V15.1668H18.6667V17.5002Z"
                                    fill="#FF4C51"
                                />
                            </svg>
                        </div>
                        <p className="visi-title">{t('visi2')}</p>
                        <p className="visi-text">
                        {t('visi2Desc')}
                        </p>
                    </div>
                    <div
                        data-aos="zoom-in"
                        data-aos-duration="1200"
                        data-aos-delay="400"
                        className="visi-card"
                    >
                        <div
                            data-aos="zoom-in-down"
                            data-aos-duration="1200"
                            data-aos-delay="400"
                            className="visi-icon"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 28 28"
                                fill="none"
                            >
                                <path
                                    d="M19.8333 1.1665H8.16665C6.88331 1.1665 5.83331 2.2165 5.83331 3.49984V24.4998C5.83331 25.7832 6.88331 26.8332 8.16665 26.8332H19.8333C21.1166 26.8332 22.1666 25.7832 22.1666 24.4998V3.49984C22.1666 2.2165 21.1166 1.1665 19.8333 1.1665ZM19.8333 20.9998H8.16665V6.99984H19.8333V20.9998ZM18.6666 11.7248L17.0216 10.0798L12.8916 14.2098L11.2466 12.5648L9.60165 14.2098L12.8916 17.4998L18.6666 11.7248Z"
                                    fill="#56CA00"
                                />
                                <path
                                    d="M19.8333 1.1665H8.16665C6.88331 1.1665 5.83331 2.2165 5.83331 3.49984V24.4998C5.83331 25.7832 6.88331 26.8332 8.16665 26.8332H19.8333C21.1166 26.8332 22.1666 25.7832 22.1666 24.4998V3.49984C22.1666 2.2165 21.1166 1.1665 19.8333 1.1665ZM19.8333 20.9998H8.16665V6.99984H19.8333V20.9998ZM18.6666 11.7248L17.0216 10.0798L12.8916 14.2098L11.2466 12.5648L9.60165 14.2098L12.8916 17.4998L18.6666 11.7248Z"
                                    fill="black"
                                    fillOpacity="0.1"
                                />
                            </svg>
                        </div>
                        <p className="visi-title">{t('visi3')}</p>
                        <p className="visi-text">
                        {t('visi3Desc')}
                        </p>
                    </div>
                </div>
            </div>
            <div className="misi-container">
                <p data-aos="fade-up">{t('misiTitle')}</p>
                <p data-aos="fade-up" data-aos-delay="300">
                {t('misiDesc')}
                </p>
            </div>
        </section>
    );
};

export default MisiVisi;
