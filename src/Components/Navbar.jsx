import { useEffect, useState } from "react";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

const Navbar = () => {
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [showMenu, setShowMenu] = useState(false)

    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }

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
                    <p>PT. Sumandingan Makmur Sentosa</p>
                </div>
                <div className="navbar-links-container">
                    <a href="#beranda">Beranda</a>
                    <a href="#sejarah">Sejarah</a>
                    <a href="#misi-visi">Misi & Visi</a>
                    <a href="#nilai-perusahaan">Nilai Perusahaan</a>
                    <a href="#penghargaan">Penghargaan</a>
                    <a href="#partner">Partner</a>
                </div>
                <svg onClick={handleShowMenu} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>

            </div>
            <div className="progress-container">
                <div className="progress-bar" style={{ width: `${scrollPercentage}%` }}></div>
            </div>
            <Drawer className="mobile-nav" open={showMenu} onClose={handleShowMenu} direction="top">
                <a href="#beranda" onClick={handleShowMenu}>Beranda</a>
                <a href="#sejarah" onClick={handleShowMenu}>Sejarah</a>
                <a href="#misi-visi" onClick={handleShowMenu}>Misi & Visi</a>
                <a href="#nilai-perusahaan" onClick={handleShowMenu}>Nilai Perusahaan</a>
                <a href="#penghargaan" onClick={handleShowMenu}>Penghargaan</a>
                <a href="#partner" onClick={handleShowMenu}>Partner</a>
            </Drawer>
        </nav>
    );
};

export default Navbar;
