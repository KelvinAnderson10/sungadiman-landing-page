import { useEffect, useState } from "react";

const Navbar = () => {
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [scrollPercentage, setScrollPercentage] = useState(0);

    const handleScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        setScrollPercentage(scrolled);
    };
    return (
        <nav>
            <div className="nav-container">
                <div className="nav-logo-container">
                    <img alt="logo.png" src="/logo.png"></img>
                </div>
                <div className="navbar-links-container">
                    <a href="#beranda">Beranda</a>
                    <a href="#sejarah">Sejarah</a>
                    <a href="#misi-visi">Misi & Visi</a>
                    <a href="#nilai-perusahaan">Nilai Perusahaan</a>
                    <a href="#partner">Partner</a>
                </div>
            </div>
            <div className="progress-container">
                <div className="progress-bar" style={{ width: `${scrollPercentage}%` }}></div>
            </div>
        </nav>
    );
};

export default Navbar;
