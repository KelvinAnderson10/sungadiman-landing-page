import React from "react";

const Beranda = () => {
    const moveToBottom = () => {
        const screenHeight = window.innerHeight;
        window.scrollTo(0, screenHeight - (screenHeight * 0.09));
    }
    return (
        <section id="beranda" className="beranda">
            <div className="beranda-section">
                <div className="beranda-container">
                    <div className="beranda-left">
                        <p data-aos="fade-right" data-aos-duration="1000">
                            PT. Sungadiman Makmur Sentosa
                        </p>
                        <p
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                        >
                            Distributor resmi berbagai brand alat kesehatan dan unggul dalam
                            kualitas jasa pelayanan.
                        </p>
                        <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" onClick={moveToBottom} className="start-btn">START</div>
                    </div>
                    <div
                        data-aos="zoom-in-right"
                        data-aos-duration="1500"
                        className="beranda-right"
                    >
                        <img src="/mask.png" alt="sungadiman-mask"></img>
                    </div>
                </div>
            </div>
            <div className="beranda-info-container">
                <div  data-aos="fade-right" data-aos-duration="1200"  className="beranda-info-left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 84 84" fill="none">
                        <path d="M84 42C84 65.1959 65.196 84 42 84C18.804 84 0 65.1959 0 42C0 42 0 42 42 42C84 42 84 42 84 42Z" fill="#FFB400" />
                        <circle cx="21" cy="20" r="20" fill="#FF6166" />
                        <circle cx="63" cy="20" r="20" fill="#56CA00" />
                        <circle cx="63" cy="20" r="20" fill="black" fillOpacity="0.1" />
                    </svg>
                    <div className="beranda-info-left-text">
                        <p>Customer</p>
                        <p>"Kami percaya jika kepuasan Anda adalah prioritas utama kami!"</p>
                    </div>
                </div>
                <div className="beranda-info-right">
                    <div className="beranda-info-right-container">
                        <div data-aos="zoom-in" data-aos-duration="1000" className="info-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                <circle cx="25" cy="25" r="25" fill="#FFB400" />
                            </svg>
                            <p className="info-number">25++</p>
                            <p className="info-text">Dinas Kesehatan</p>
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300" className="info-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                            <circle cx="25" cy="25" r="25" fill="#16B1FF"/>
                            </svg>
                            <p className="info-number">100++</p>
                            <p className="info-text">Rumah Sakit</p>
                        </div>
                    </div>
                    <div className="beranda-info-right-container">
                        <div  data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600"  className="info-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                            <circle cx="25" cy="25" r="25" fill="#56CA00"/>
                            </svg>
                            <p className="info-number">260++</p>
                            <p className="info-text">Puskesmas</p>
                        </div>
                        <div  data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="900"  className="info-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                            <circle cx="25" cy="25" r="25" fill="#FF4C51"/>
                            </svg>
                            <p className="info-number">120++</p>
                            <p className="info-text">Sekolah, Klinik, Dll</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Beranda;