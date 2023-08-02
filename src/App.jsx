import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css'
import Sejarah from './Components/Sejarah'
import Beranda from './Components/Beranda'
import Navbar from './Components/Navbar'
import MisiVisi from "./Components/MisiVisi";
import NilaiPerusahaan from "./Components/NilaiPerusahaan/NilaiPerusahaan";
import Penghargaan from "./Components/Penghargaan/Penghargaan";

function App() {
  useEffect(() => {
    AOS.init({once: true});
    AOS.refresh();
}, []);
  return (
    <div className='App'>
      <Navbar/>
      <Beranda/>
      <Sejarah/>
      <MisiVisi/>
      <NilaiPerusahaan/>
      <Penghargaan/>
    </div>
  )
}

export default App
