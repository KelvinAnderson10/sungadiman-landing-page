import React from "react";
import './Penghargaan.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Penghargaan = () => {

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
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        nextArrow: <img src="\next.svg"></img>,
        prevArrow: <img src="\prev.svg"></img>,
        responsive: [
            {
              breakpoint: 1050,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 960,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 625,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

    return (
        <section id='penghargaan' className="penghargaan">
            <div className="penghargaan-title-container">
                <span className="visi-heading">Penghargaan</span>
            </div>
            <div className="penghargaan-container">
                <Slider {...settings}>
                    {dataPenghargaan.map((item, index) => (
                        <div className="box-penghargaan" key={index}>
                            <div className="tropy-container">
                                <img src={item.img_path}></img>
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