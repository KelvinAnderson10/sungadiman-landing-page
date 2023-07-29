const Sejarah = () => {


    return (
        <section id="sejarah" className="sejarah">
            <div className="sekilas-container">
                <div className="sekilas-left">
                    <p data-aos="fade-right">Sekilas</p>
                    <p data-aos="fade-right" data-aos-delay="200">
                        "PT Sungadiman Makmur Sentosa merupakan perusahaan yang
                        berpengalaman selama belasan tahun dalam bidang distrubusi alat
                        kesehatan sebagai distributor resmi berbagai brand alat kesehatan
                        dan unggul dalam kualitas jasa pelayanan. "
                    </p>
                    <p data-aos="fade-right" data-aos-delay="400">
                        PT Sungadiman Makmur Sentosa berpergang teguh pada prinsip usaha
                        peningkatan kesehatan masyarakat melaui jasa pelayanan dengan
                        menjunjung tinggi kualitas produk yang di jual dan menjalin
                        kemitraan dengan perusahaan produksi alat kesehatan kelas nasional
                        yang memiliki reputasi dikancah internasional.
                    </p>
                </div>
                <div data-aos="fade-left" data-aos-duration="2000" data-aos-delay="300" className="sekilas-right">
                    <img src="/sekilas-dokter.png"></img>
                </div>
            </div>
            <div className="sejarah-container">
                <p data-aos="fade-up">Sejarah PT. Sungadiman Makmur Sentosa</p>
                <div data-aos="zoom-in" className="timeline">
                    <div className="timeline-line"></div>
                    <div className="timeline-dot-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <ellipse cx="12.8289" cy="13" rx="12.8289" ry="13" fill="#D5E8F1" />
                                <ellipse cx="12.8289" cy="13" rx="6.90786" ry="7" fill="#2D8BBA" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <ellipse cx="12.8289" cy="13" rx="12.8289" ry="13" fill="#D5E8F1" />
                                <ellipse cx="12.8289" cy="13" rx="6.90786" ry="7" fill="#2D8BBA" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <ellipse cx="12.8289" cy="13" rx="12.8289" ry="13" fill="#D5E8F1" />
                                <ellipse cx="12.8289" cy="13" rx="6.90786" ry="7" fill="#2D8BBA" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <ellipse cx="12.8289" cy="13" rx="12.8289" ry="13" fill="#D5E8F1" />
                                <ellipse cx="12.8289" cy="13" rx="6.90786" ry="7" fill="#2D8BBA" />
                            </svg>
                    </div>
                </div>
                <div className="timeline-card-container">
                    <div className="timeline-card" data-aos="fade-right" data-aos-delay="200">
                        <p>2008</p>
                        <p>Berawal dari toko retail alat kesehatan yang dijalankan dengan partner bisnis.</p>
                    </div>
                    <div className="timeline-card" data-aos="fade-right" data-aos-delay="400">
                        <p>2010</p>
                        <p>Memutuskan untuk menjadi toko retail alat kesehatan yang mandiri.</p>
                    </div>
                    <div className="timeline-card" data-aos="fade-right" data-aos-delay="600">
                        <p>2016</p>
                        <p>Beralih menjadi distributor alat kesehatan.</p>
                    </div>
                    <div className="timeline-card" data-aos="fade-right" data-aos-delay="800">
                        <p>2022</p>
                        <p>Menjadi distributor dengan standar Sertifikasi CDAKB.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sejarah;
