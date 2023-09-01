const Partner = () => {
    const partnerLogos = [
        { alt: "sungadiman-serenity-logo.svg", link: "https://serenityindonesia.com/kontak", src: "/serenity-logo.svg" },
        { alt: "sungadiman-megapratama-logo.svg", link: "https://geamedical.com/contact-us/", src: "/megapratama-logo.svg" },
        { alt: "sungadiman-buma-logo.svg", link: "https://bartec.id/", src: "/buma-logo.svg" },
        { alt: "sungadiman-grahapratama-logo.svg", link: "https://www.grameindo.co.id/", src: "/grahapratama-logo.svg" },
        { alt: "sungadiman-imedin-logo.svg", link: "https://imedin.id/", src: "/imedin-logo.svg" },
        { alt: "sungadiman-kalmed-logo.svg", link: "https://www.kalmed.co.id/", src: "/kalmed-logo.svg" },
        { alt: "sungadiman-safelock-logo.svg", link: "https://www.safelockmedical.com/", src: "/safelock-logo.svg" },
        { alt: "sungadiman-lkpi-logo.svg", link: "https://likuid.co.id/", src: "/lkpi-logo.svg" },
        { alt: "sungadiman-rei-logo.svg", link: "https://rajaerba.id/", src: "/rei-logo.svg" },
        { alt: "sungadiman-karya-logo.svg", link: "https://karyapratama.co.id/", src: "/karya-logo.svg" },
        { alt: "sungadiman-babad-logo.svg", link: "https://e-katalog.lkpp.go.id/info/penyedia/257310", src: "/babad-logo.svg" },
        { alt: "sungadiman-prima-logo.svg", link: "https://pci-tech.co.id/", src: "/prima-logo.svg" },
        { alt: "sungadiman-fesco-logo.svg", link: "https://e-katalog.lkpp.go.id/info/distributor/9511", src: "/fesco-logo.svg" },
        { alt: "sungadiman-innovation-logo.svg", link: "https://www.innovationindo.com/", src: "/innovation-logo.svg" },
        { alt: "sungadiman-usm-logo.svg", link: "https://usmberkahindonesia.com/", src: "/usm-logo.svg" },
        { alt: "sungadiman-swayasa-logo.svg", link: "https://www.swayasaprakarsa.com/", src: "/swayasa-logo.svg" },
        { alt: "sungadiman-anugrah-logo.svg", link: "http://www.anugrah-yaden.com/in/main.php", src: "/anugrah-logo.svg" },       
        { alt: "sungadiman-samudra-logo.svg", src: "/samudra-logo.png" },       
        { alt: "sungadiman-nuritek-logo.svg", link: "http://nuritek.com", src: "/nuritek-logo.png" },       
      ];

    return (
        <section id="partner" className="partner">
            <div className="partner-container">
                <p data-aos="fade-up">Partner</p>
                <div className="partner-logo">
                    {/* <img alt="sungadiman-serenity-logo.svg" data-aos="zoom-in-up" data-aos-duration="1200" src="/serenity-logo.svg"></img>
                    <img alt="sungadiman-megapratama-logo.svg" data-aos="zoom-in-up" data-aos-duration="1200" src="/megapratama-logo.svg"></img>
                    <img alt="sungadiman-buma-logo.svg" data-aos="zoom-in-up" data-aos-duration="1200" src="/buma-logo.svg"></img>
                    <img alt="sungadiman-grahapratama-logo.svg" data-aos="zoom-in-up" data-aos-duration="1200" src="/grahapratama-logo.svg"></img>
                    <img alt="sungadiman-imedin-logo.svg" data-aos="zoom-in-up" data-aos-duration="1200" src="/imedin-logo.svg"></img>
                    <img alt="sungadiman-kalmed-logo.svg" data-aos="zoom-in-up" data-aos-duration="1200" src="/kalmed-logo.svg"></img>
                    <img alt="sungadiman-safelock-logo.svg" data-aos="zoom-in-up" data-aos-duration="1200" src="/safelock-logo.svg"></img>
                    <img alt="sungadiman-lkpi-logo.svg" data-aos="zoom-in-up" data-aos-duration="1200" src="/lkpi-logo.svg"></img>
                    <img alt="sungadiman-rei-logo.svg" data-aos="zoom-in-up" data-aos-duration="1200" src="/rei-logo.svg"></img>
                    <img alt="sungadiman-karya-logo.svg" data-aos="zoom-in-up" data-aos-duration="1200" src="/karya-logo.svg"></img>
                    <img alt="sungadiman-babad-logo.svg" data-aos="zoom-in-up" data-aos-duration="1200" src="/babad-logo.svg"></img>
                    <img alt="sungadiman-prima-logo.svg" data-aos="zoom-in-up" data-aos-duration="1200" src="/prima-logo.svg"></img>
                    <img alt="sungadiman-fesco-logo.svg" data-aos="zoom-in-up" data-aos-duration="1200" src="/fesco-logo.svg"></img>
                    <img alt="sungadiman-innovation-logo.svg" data-aos="zoom-in-up" data-aos-duration="1200" src="/innovation-logo.svg"></img>
                    <img alt="sungadiman-usm-logo.svg" data-aos="zoom-in-up" data-aos-duration="1200" src="/usm-logo.svg"></img>
                    <img alt="sungadiman-swayasa-logo.svg" data-aos="zoom-in-up" data-aos-duration="1200" src="/swayasa-logo.svg"></img>
                    <img alt="sungadiman-anugrah-logo.svg" data-aos="zoom-in-up" data-aos-duration="1200" src="/anugrah-logo.svg"></img> */}
                    {partnerLogos.map((logo) => (
                        <a
                        key={logo.alt}
                        href={logo.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <img
                            alt={logo.alt}
                            data-aos="zoom-in-up"
                            data-aos-duration="1200"
                            src={logo.src}
                        />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partner;
