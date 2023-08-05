import React, { useState } from "react";
import './NilaiPerusahaan.css';
import { useTranslation } from "react-i18next";

const NilaiPerusahaan = () => {
    const { t, i18n } = useTranslation();
    const arrayNilai = [
        {
            "no": "1. ",
            "title": t('nilaiTitle1'),
            "description": t('nilaiDesc1'),
            "img_path": "\inovatif.svg"
        },
        {
            "no": "2. ",
            "title": t('nilaiTitle2'),
            "description": t('nilaiDesc2'),
            "img_path": "\kolaboratif.svg"
        },
        {
            "no": "3. ",
            "title": t('nilaiTitle3'),
            "description": t('nilaiDesc3'),
            "img_path": "\harmonis.svg"
        },
        {
            "no": "4. ",
            "title": t('nilaiTitle4'),
            "description": t('nilaiDesc4'),
            "img_path": "\loyalitas.svg"
        },
        {
            "no": "5. ",
            "title": t('nilaiTitle5'),
            "description": t('nilaiDesc5'),
            "img_path": "\amanah.svg"
        },
        {
            "no": "6. ",
            "title": t('nilaiTitle6'),
            "description": t('nilaiDesc6'),
            "img_path": "\solutif.svg"
        },
    ]

    const [currentArray, setCurrentArray] = useState(0);
    const [slideIn, setSlideIn] = useState(false);
    const [slideOut, setSlideOut] = useState(false);

    const next = () => {
        setSlideIn(true);

        setTimeout(() => {
            setSlideIn(false);
            if (currentArray !== arrayNilai.length - 1) {
                setCurrentArray(currentArray + 1);
            } else if (currentArray === arrayNilai.length - 1) {
                setCurrentArray(0);
            }
        }, 500);
    };

    const prev = () => {
        setSlideOut(true);

        setTimeout(() => {
            setSlideOut(false);
            if (currentArray !== 0) {
                setCurrentArray(currentArray - 1);
            } else if (currentArray === 0) {
                setCurrentArray(arrayNilai.length - 1);
            }
        }, 500);
    };

    return (
        <section id="nilai-perusahaan" className="nilai-perusahaan">
            <div className="nilai-perusahaan-container">
                <div className="nilai-perusahaan-left">
                    <p data-aos="fade-right" className="font-nilai-perusahaan">{t('nilaiTitle')}</p>
                    <div className={`content-nilai ${slideIn ? "slide-in" : slideOut ? "slide-out" : ""}`}>
                        <p data-aos="fade-right" data-aos-delay="200" className="title-nilai">
                            {arrayNilai[currentArray].title}
                        </p>
                        <p data-aos="fade-right" data-aos-delay="200">
                            {arrayNilai[currentArray].description}
                        </p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="1000" className="arrow-container">
                        <svg onClick={prev} style={{ cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" width="17" height="26" viewBox="0 0 17 26" fill="none">
                            <path d="M16.0551 3.055L6.13172 13L16.0551 22.945L13.0001 26L5.34058e-05 13L13.0001 0L16.0551 3.055Z" fill="#222325" />
                        </svg>
                        <svg onClick={next} style={{ cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" width="17" height="26" viewBox="0 0 17 26" fill="none">
                            <path d="M0.0550537 3.055L9.97839 13L0.0550537 22.945L3.11005 26L16.1101 13L3.11005 0L0.0550537 3.055Z" fill="#222325" />
                        </svg>
                    </div>
                </div>
                <div className={`nilai-perusahaan-right ${slideIn ? "slide-in" : slideOut ? "slide-out" : ""}`}>
                    <div data-aos="fade-right" data-aos-duration="1200">
                        <img alt="storyset-img" src={arrayNilai[currentArray].img_path} title="https://storyset.com/work"></img>
                    </div>
                </div>
            </div>
            <div className="nilai-perusahaan-bottom">
                {arrayNilai.map((item, index) => (
                    <div data-aos="zoom-in-right" data-aos-duration={(index + 1) * 300} className="indicator" key={index}>
                        {
                            currentArray == index ? <div className="indicator-blue-bg"></div> :
                                <div className="indicator-blue-bright"></div>
                        }
                        <div className="indicator-container">
                            <div className="indicator-number">
                                <p>{item.no}</p>
                            </div>
                            <div className="indicator-text">
                                <p>{item.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default NilaiPerusahaan;