import { useTranslation } from "react-i18next";

const Sejarah = () => {
    const { t, i18n } = useTranslation();

    return (
        <section id="sejarah" className="sejarah">
            <div className="sekilas-container">
                <div className="sekilas-left">
                    <p data-aos="fade-right">{t('sekilasTitle')}</p>
                    <p data-aos="fade-right" data-aos-delay="200">
                    {t('sekilas1')}
                    </p>
                    <p data-aos="fade-right" data-aos-delay="400">
                    {t('sekilas2')}
                    </p>
                </div>
                <div
                    data-aos="fade-left"
                    data-aos-duration="2000"
                    data-aos-delay="300"
                    className="sekilas-right"
                >
                    <img alt="sekilas-dokter.png" src="/sekilas-dokter.png"></img>
                </div>
            </div>
            <div className="sejarah-container">
                <p data-aos="fade-up">{t('sejarahTitle')}</p>
                <div className="timeline">
                    <div data-aos="zoom-in" className="timeline-line"></div>
                    <div className="timeline-dot-container">
                        <div data-aos="zoom-in" data-aos-delay="200">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                viewBox="0 0 26 26"
                                fill="none"
                            >
                                <ellipse
                                    cx="12.8289"
                                    cy="13"
                                    rx="12.8289"
                                    ry="13"
                                    fill="#D5E8F1"
                                />
                                <ellipse
                                    cx="12.8289"
                                    cy="13"
                                    rx="6.90786"
                                    ry="7"
                                    fill="#2D8BBA"
                                />
                            </svg>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                viewBox="0 0 26 26"
                                fill="none"
                            >
                                <ellipse
                                    cx="12.8289"
                                    cy="13"
                                    rx="12.8289"
                                    ry="13"
                                    fill="#D5E8F1"
                                />
                                <ellipse
                                    cx="12.8289"
                                    cy="13"
                                    rx="6.90786"
                                    ry="7"
                                    fill="#2D8BBA"
                                />
                            </svg>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                viewBox="0 0 26 26"
                                fill="none"
                            >
                                <ellipse
                                    cx="12.8289"
                                    cy="13"
                                    rx="12.8289"
                                    ry="13"
                                    fill="#D5E8F1"
                                />
                                <ellipse
                                    cx="12.8289"
                                    cy="13"
                                    rx="6.90786"
                                    ry="7"
                                    fill="#2D8BBA"
                                />
                            </svg>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="800">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                viewBox="0 0 26 26"
                                fill="none"
                            >
                                <ellipse
                                    cx="12.8289"
                                    cy="13"
                                    rx="12.8289"
                                    ry="13"
                                    fill="#D5E8F1"
                                />
                                <ellipse
                                    cx="12.8289"
                                    cy="13"
                                    rx="6.90786"
                                    ry="7"
                                    fill="#2D8BBA"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="timeline-card-container">
                    <div
                        className="timeline-card"
                        data-aos="fade-right"
                        data-aos-delay="200"
                    >
                        <p>2008</p>
                        <p>
                        {t('sejarah1')}
                        </p>
                    </div>
                    <div
                        className="timeline-card"
                        data-aos="fade-right"
                        data-aos-delay="400"
                    >
                        <p>2010</p>
                        <p>
                        {t('sejarah2')}
                        </p>
                    </div>
                    <div
                        className="timeline-card"
                        data-aos="fade-right"
                        data-aos-delay="600"
                    >
                        <p>2016</p>
                        <p>{t('sejarah3')}</p>
                    </div>
                    <div
                        className="timeline-card"
                        data-aos="fade-right"
                        data-aos-delay="800"
                    >
                        <p>2022</p>
                        <p>{t('sejarah4')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sejarah;
