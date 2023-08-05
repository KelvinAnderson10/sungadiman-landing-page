import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Navbar = () => {
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRefId.current &&
                !dropdownRefId.current.contains(event.target) &&
                dropdownRefEn.current &&
                !dropdownRefEn.current.contains(event.target)
            ) {
                setShowDropdown(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [showMenu, setShowMenu] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRefId = useRef(null);
    const dropdownRefEn = useRef(null);
    const { t, i18n } = useTranslation();

    const handleTrans = (code) => {
        i18n.changeLanguage(code);
        console.log(i18n.language);
        setShowDropdown(!showDropdown)
    };

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleShowDropdown = () => {
        event.stopPropagation();
        setShowDropdown(!showDropdown)
    }

    const handleScroll = () => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        setScrollPercentage(scrolled);
    };
    return (
        <nav>
            <div className="nav-container">
                <div className="nav-logo-container">
                    <img alt="logo.png" src="/logo.png"></img>
                    <p>PT. Sumandingan Makmur Sentosa</p>
                </div>
                <div className="navbar-links-container">
                    <a href="#beranda">{t('navbar1')}</a>
                    <a href="#sejarah">{t('navbar2')}</a>
                    <a href="#misi-visi">{t('navbar3')}</a>
                    <a href="#nilai-perusahaan">{t('navbar4')}</a>
                    <a href="#penghargaan">{t('navbar5')}</a>
                    <a href="#partner">{t('navbar6')}</a>
                </div>
                <div className="nav-right">
                    <div className="language-container">
                        {i18n.language == "en" ? <div className="language-nav" onClick={handleShowDropdown}>
                            <img alt="sungadiman-en.png" className="language-container-img" src="/en.png"></img>
                            <p>EN</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                <path d="M8.74999 2.08341L1.24999 2.08341C1.17406 2.08365 1.09963 2.10459 1.03471 2.14399C0.969796 2.18338 0.916853 2.23973 0.88158 2.30697C0.846308 2.37422 0.830043 2.44981 0.834536 2.52561C0.839028 2.60141 0.864109 2.67455 0.907079 2.73716L4.65708 8.15383C4.81249 8.37841 5.18666 8.37841 5.34249 8.15383L9.09249 2.73716C9.1359 2.67469 9.16136 2.60151 9.16609 2.52558C9.17083 2.44965 9.15467 2.37388 9.11936 2.30649C9.08406 2.2391 9.03096 2.18268 8.96584 2.14335C8.90072 2.10402 8.82607 2.08329 8.74999 2.08341Z" fill="#484848" />
                            </svg>
                        </div> :
                            <div className="language-nav" onClick={handleShowDropdown}>
                                <img alt="sungadiman-id.png" className="language-container-img" src="/id.png"></img>
                                <p>ID</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <path d="M8.74999 2.08341L1.24999 2.08341C1.17406 2.08365 1.09963 2.10459 1.03471 2.14399C0.969796 2.18338 0.916853 2.23973 0.88158 2.30697C0.846308 2.37422 0.830043 2.44981 0.834536 2.52561C0.839028 2.60141 0.864109 2.67455 0.907079 2.73716L4.65708 8.15383C4.81249 8.37841 5.18666 8.37841 5.34249 8.15383L9.09249 2.73716C9.1359 2.67469 9.16136 2.60151 9.16609 2.52558C9.17083 2.44965 9.15467 2.37388 9.11936 2.30649C9.08406 2.2391 9.03096 2.18268 8.96584 2.14335C8.90072 2.10402 8.82607 2.08329 8.74999 2.08341Z" fill="#484848" />
                                </svg>
                            </div>
                        }
                        {showDropdown && <div className="language-dropdown">
                            <div ref={dropdownRefId} className="language-option" onClick={() => { handleTrans("id") }}>
                                <div className="flag">
                                    <img alt="sungadiman-id.png" className="language-container-img" src="/id.png"></img>
                                    <p>Indonesia</p>
                                </div>
                                {i18n.language == "id" && <img alt="sungadiman-check.png" className="check-btn" src="/check.png"></img>}
                            </div>
                            <div ref={dropdownRefEn} className="language-option" onClick={() => { handleTrans("en") }}>
                                <div className="flag">
                                    <img alt="sungadiman-eng.png" className="language-container-img" src="/en.png"></img>
                                    <p>English</p>
                                </div>
                                {i18n.language == "en" && <img alt="sungadiman-check.png" className="check-btn" src="/check.png"></img>}
                            </div>
                        </div>}
                    </div>
                    <svg
                        onClick={handleShowMenu}
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 512 512"
                    >
                        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                    </svg>
                </div>
            </div>
            <div className="progress-container">
                <div
                    className="progress-bar"
                    style={{ width: `${scrollPercentage}%` }}
                ></div>
            </div>
            <Drawer
                className="mobile-nav"
                open={showMenu}
                onClose={handleShowMenu}
                direction="top"
            >
                <a href="#beranda" onClick={handleShowMenu}>
                    Beranda
                </a>
                <a href="#sejarah" onClick={handleShowMenu}>
                    Sejarah
                </a>
                <a href="#misi-visi" onClick={handleShowMenu}>
                    Misi & Visi
                </a>
                <a href="#nilai-perusahaan" onClick={handleShowMenu}>
                    Nilai Perusahaan
                </a>
                <a href="#penghargaan" onClick={handleShowMenu}>
                    Penghargaan
                </a>
                <a href="#partner" onClick={handleShowMenu}>
                    Partner
                </a>
            </Drawer>
        </nav>
    );
};

export default Navbar;
