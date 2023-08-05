import React from "react";
import './Penghargaan.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

const Penghargaan = () => {
    const { t, i18n } = useTranslation();
    const dataPenghargaan = [
        {
            "title": "BEST BUSINESS PARTNER 2018",
            "from": "dari Serenity",
            "img_path": "\serenity-2018.png"
        },
        {
            "title": "BEST BUSINESS PARTNER 2019",
            "from": "dari Serenity",
            "img_path": "\serenity-2019.png"
        },
        {
            "title": "BEST BUSINESS PARTNER 2020",
            "from": "dari Serenity",
            "img_path": "\serenity-2020.png"
        },
        {
            "title": "BEST BUSINESS PARTNER 2021",
            "from": "dari Serenity",
            "img_path": "\serenity-2021.png"
        },
        {
            "title": "BEST BUSINESS PARTNER 2022",
            "from": "dari Serenity",
            "img_path": "\serenity-2022.png"
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        autoplay: true,
        slidesToScroll: 3,
        autoplaySpeed: 4000,
        nextArrow: (
            <div >
            <img alt="next.svg" className="arrows" src="/next.svg"></img>
            </div>
        ),
        prevArrow: (<img alt="prev.svg" className="arrows" src="/prev.svg"></img>),
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section id='penghargaan' className="penghargaan">
            <div data-aos="fade-up" data-aos-duration="1200" className="penghargaan-title-container">
                <span className="visi-heading">{t('penghargaanTitle')}</span>
            </div>
            <div  data-aos="zoom-in" data-aos-duration="1500" className="penghargaan-container">
                <Slider {...settings}>
                    {dataPenghargaan.map((item, index) => (
                        <div className="box-penghargaan" key={index}>
                            <div className="tropy-container">
                                <img alt="trophy.png" src={item.img_path}></img>
                            </div>
                            <span className="title-penghargaan">{item.title}</span>
                            <span className="font-from-penghargaan">{item.from}</span>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default Penghargaan;