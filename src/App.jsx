import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css'
import Sejarah from './Components/Sejarah'
import Beranda from './Components/Beranda'
import Navbar from './Components/Navbar'
import MisiVisi from "./Components/MisiVisi";
import Partner from "./Components/Partner";
import Footer from "./Components/Footer";
import NilaiPerusahaan from "./Components/NilaiPerusahaan/NilaiPerusahaan";
import Penghargaan from "./Components/Penghargaan/Penghargaan";
import ModalGoogleForm from "./Components/GoogleForm/ModalGoogleForm";

function App() {
  useEffect(() => {
      AOS.init({once: true});
      AOS.refresh();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
      setIsModalOpen(true);
  };

  const closeModal = () => {
      setIsModalOpen(false);
  };
  return (
    <div className='App'>
      <Navbar modal={openModal}/>
      <ModalGoogleForm isOpen={isModalOpen} onClose={closeModal}/>
      <Beranda/>
      <Sejarah/>
      <MisiVisi/>
      <NilaiPerusahaan/>
      <Penghargaan/>
      <Partner/>
      <Footer/>
    </div>
  )
}

export default App
