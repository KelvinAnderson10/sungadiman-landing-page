import './ModalLogo.css'

const ModalLogo = ({type}) => {

    const dinKes = [
        {
            name: "Dinas Kesehatan Kab. Bantul",
            link: "https://dinkes.bantulkab.go.id/",
            logo: "https://dinkes.bantulkab.go.id/storage/dinkes/partner/yNJ1gx5YCzqXUbwlJZDcdNWz7WNeNE6eNS1Un8b9.png"
        },
        {
            name: "Dinas Kesehatan Kab. Blora",
            link: "https://dinkes.blorakab.go.id/",
            logo: "https://www.blorakab.go.id/resource/doc/page/200907163835blora.png"
        },
        {
            name: "Dinas Kesehatan Kab. Boyolali",
            link: "https://dinkes.boyolali.go.id/",
            logo: "https://dinkes.boyolali.go.id/img/logo.png"
        },
        {
            name: "Dinas Kesehatan Kab. Demak",
            link: "https://dinkes.demakkab.go.id/",
            logo: "https://dinkes.demakkab.go.id/wp-content/uploads/2017/09/logo-kabupaten-demak.svg.png"
        },
        {
            name: "Dinas Kesehatan Kab. Grobogan",
            link: "https://www.dinkes.grobogan.go.id/",
            logo: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Lambang_Grobogan.png"
        },
        {
            name: "Dinas Kesehatan Kab. Gunung Kidul",
            link: "https://dinkes.gunungkidulkab.go.id/",
            logo: "https://dinkes.gunungkidulkab.go.id/wp-content/uploads/2021/05/Lambang_Kabupaten_Gunungkidul-e1623220943204.png"
        },
        {
            name: "Dinas Kesehatan Kab. Karanganyar",
            link: "https://dinkes.karanganyarkab.go.id/",
            logo: "https://opendata.karanganyarkab.go.id/dataset/54494760-6bab-4a5e-9a9e-82e21f40dc69/resource/c1b2a630-bb4b-4946-aee8-ae51280bf7f8/download/seal_of_karanganyar_regency.svg.png"
        },
        {
            name: "Dinas Kesehatan Kab. Kebumen",
            link: "https://kesehatanppkb.kebumenkab.go.id/",
            logo: "https://upload.wikimedia.org/wikipedia/commons/c/c2/LOGO_KABUPATEN_KEBUMEN.png"
        },
        {
            name: "Dinas Kesehatan Kab. Kendal",
            link: "https://dinkes.kendalkab.go.id/",
            logo: "https://www.kendalkab.go.id/assets/img/logo_kendal_med.png"
        },
        {
            name: "Dinas Kesehatan Kab. Klaten",
            link: "https://dinkes.klaten.go.id/",
            logo: "https://upload.wikimedia.org/wikipedia/commons/a/ac/LOGO_KABUPATEN_KLATEN.png"
        },
        {
            name: "Dinas Kesehatan Kab. Magelang",
            link: "https://dinkes.magelangkab.go.id/",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Lambang_Kabupaten_Magelang.jpg/1200px-Lambang_Kabupaten_Magelang.jpg"
        },
        {
            name: "Dinas Kesehatan Kab. Pati",
            link: "https://dinkes.patikab.go.id/",
            logo: "https://dinkes.patikab.go.id/logo.png"
        },
        {
            name: "Dinas Kesehatan Kab. Pekalongan",
            link: "https://dinkes.pekalongankab.go.id/",
            logo: "https://sippn.menpan.go.id/images/article/large/lo.png"
        },
        {
            name: "Dinas Kesehatan Kab. Purworejo",
            link: "http://dinkes.purworejokab.go.id/",
            logo: "https://disdukcapil.purworejokab.go.id/wp-content/uploads/2018/04/LOGO-KABUPATEN-PURWOREJO.png"
        },
        {
            name: "Dinas Kesehatan Kab. Semarang",
            link: "https://main.semarangkab.go.id/profile/program-unggulan/bidang-kesehatan/",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQomVPzscOk7iTXhMuonBxZdQV183dgjCMdTg&usqp=CAU"
        },
        {
            name: 'Dinas Kesehatan Kab. Sleman',
            link: 'https://dinkes.slemankab.go.id/',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Lambang_Kabupaten_Sleman.png'
        },
        {
            name: 'Dinas Kesehatan Kab. Sragen',
            link: 'https://dinkes.sragenkab.go.id/',
            logo: 'https://dinkes.sragenkab.go.id/img/logo2.png'
        },
        {
            name: 'Dinas Kesehatan Kab. Sukoharjo',
            link: 'https://dkk.sukoharjokab.go.id/',
            logo: 'https://portal.sukoharjokab.go.id/wp-content/uploads/2018/01/logo-fix.png'
        },
        {
            name: 'Dinas Kesehatan Kab. Temanggung',
            link: 'https://dinkes.temanggungkab.go.id/',
            logo: 'https://sippn.menpan.go.id/images/article/large/lambang_kabupaten_temanggung-20220728084818.png'
        },
        {
            name: 'Dinas Kesehatan Kab. Wonogiri',
            link: 'https://dinkes.wonogirikab.go.id/',
            logo: 'https://elhkpn.kpk.go.id/uploads/api/logo/pemerintah-kabupaten-wonogiri-1593664804.png'
        },
        {
            name: 'Dinas Kesehatan Kab. Wonosobo',
            link: 'https://dinkes.wonosobokab.go.id/postings/detail/1866/Profil.HTML',
            logo: 'https://dinkes.wonosobokab.go.id/media/logo%20kabupaten%20wonosobo.png'
        },
        {
            name: 'Dinas Kesehatan Kota Magelang',
            link: 'http://dinkes.magelangkota.go.id/',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROu_IobLuX-Iwjro7AHgjOSrCwEuBsQGclbw&usqp=CAU'
        },
        {
            name: 'Dinas Kesehatan Kota Salatiga',
            link: 'https://dinkes.salatiga.go.id/',
            logo: 'https://dinkes.salatiga.go.id/wp-content/uploads/2018/07/Kota-Salatiga.png'
        },
        {
            name: 'Dinas Kesehatan Kota Surakarta',
            link: 'https://dinkes.surakarta.go.id/',
            logo: 'https://dinkes.surakarta.go.id/wp-content/uploads/2018/05/Logo-web.png'
        },
        {
            name: 'Dinas Kesehatan Kota Yogyakarta',
            link: 'https://kesehatan.jogjakota.go.id/beranda',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqXC-kLQgVzfF97Fb1p7WDmINDQ_Idet2jBA&usqp=CAU'
        },
        {
            name: 'Dinas Kesehatan Propinsi DIY',
            link: 'https://dinkes.jogjaprov.go.id/',
            logo: 'https://dinkes.jogjaprov.go.id/static/images/client-logo.png'
        },
        {
            name: 'Dinas Sosial Kab. Blora',
            link: 'https://dinsos.blorakab.go.id/',
            logo: 'https://dinsos.blorakab.go.id/assets_frontend/images/blora%20kab.png'
        },
        {
            name: 'Dinas Sosial Kab. Sragen',
            link: 'http://dinsos.sragenkab.go.id/',
            logo: 'https://sippn.menpan.go.id/images/article/large/logo-sragen-20230327111034.png'
        },
        {
            name: 'Dinas Kab. Gunung Kidul',
            link: 'https://gunungkidulkab.go.id/',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Logo_Kabupaten_GunungKidul.jpg/471px-Logo_Kabupaten_GunungKidul.jpg'
        },
        {
            name: 'Dinas Kesehatan Kab. Pacitan',
            link: 'http://dinkes.pacitankab.go.id/',
            logo: 'https://pacitankab.go.id/wp-content/uploads/lambang-pacitan.png'
        },
        {
            name: 'Dinas Pemuda dan Olahraga Kab. Sragen',
            link: 'http://pariwisata.sragenkab.go.id/',
            logo: 'https://sitagen.sragenkab.go.id/images/logo-sragen.png'
        },
        {
            name: 'Dinas Pertanian Kab. Pati',
            link: 'https://dispertan.patikab.go.id/',
            logo: 'https://rekreartive.com/wp-content/uploads/2019/03/Logo-Pati-Kabupaten-Pati-Warna-scaled.jpg'
        },
        {
            name: 'Dinas Kesehatan Kab. Jepara',
            link: 'https://dinkes.jepara.go.id/',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM3MY2KEBAXwU_apRDuoKVAGEW9mmjPBDqYQ&usqp=CAU'
        },
        {
            name: 'Dinas Kesehatan Kab. Kudus',
            link: 'https://dinkes.kuduskab.go.id/',
            logo: 'https://dinkes.kuduskab.go.id/wp-content/uploads/2019/11/logo-kudus-kecil.png'
        },
        {
            name: 'Dinas Kesehatan Kab. Kulon Progo',
            link: 'https://dinkes.kulonprogokab.go.id/',
            logo: 'https://kulonprogokab.go.id/corona/aset/assets/img/logo_kp.png'
        },
        {
            name: 'Dinas Kesehatan Kab. Rembang',
            link: 'https://dinkes.rembangkab.go.id/',
            logo: 'https://rembangkab.go.id/haribawana/uploads/2017/01/logorembang.png'
        },
        {
            name: 'Dinas Kesehatan Kota Semarang',
            link: 'https://dinkes.semarangkota.go.id/',
            logo: 'https://dinkes.semarangkota.go.id/asset/img/logo_pemkot_semarang.png'
        }
    ]

    const rumahSakit = [
        {
            name: "Rumah Sakit Dr Oen Surakarta",
            link: "https://www.droenska.com/",
            logo: "https://www.droenska.com/templates/corporate_response/images/s5_lg.png"
        },
        {
            name: "Rumah Sakit Umum Daerah Dr Moewardi",
            link: "https://rsmoewardi.com/",
            logo: "https://rsmoewardi.com/wp-content/uploads/2020/10/logo.png"
        },
        {
            name: "Rumah Sakit Umum Islam Kustati",
            link: "http://rskustatisolo.com/",
            logo: "http://rskustatisolo.com/wp-content/uploads/2022/06/35-2048x389.png"
        },
        {
            name: "Rumah Sakit Universitas Sebelas Maret",
            link: "https://rs.uns.ac.id/",
            logo: "https://i0.wp.com/rs.uns.ac.id/wp-content/uploads/2020/03/cropped-LOGO3cSNARS-1.png?w=793&ssl=1"
        },
        {
            name: "Rumah Sakit Jiwa Daerah Surakarta",
            link: "https://rsjd-surakarta.jatengprov.go.id/",
            logo: "https://rsjd-surakarta.jatengprov.go.id/wp-content/uploads/2023/07/cropped-banner-web-utama.png"
        },
        {
            name: "Rumah Sakit Paru Dr. Ario Wirawan",
            link: "https://rspaw.or.id/#/",
            logo: "https://rspaw.or.id/images/logo.png"
        },
        {
            name: "Rumah Sakit Umum Pusat Dr. Soeradji Tirtonegoro",
            link: "https://rsupsoeradji.id/",
            logo: "https://rsupsoeradji.id/wp-content/uploads/2017/04/logo-rsst3.png"
        },
        {
            name: "Rumah Sakit Jiwa Prof. Dr. Soeroyo",
            link: "https://soerojohospital.co.id/",
            logo: "https://soerojohospital.co.id/img/logo/soerojoHopita4.png"
        },
        {
            name: "Rumah Sakit Jiwa Daerah Dr Amino Gondohutomo",
            link: "https://rs-amino.jatengprov.go.id/",
            logo: "https://rs-amino.jatengprov.go.id/wp-content/uploads/2019/09/logoNew2019.png"
        },
        {
            name: "Rumah Sakit Orthopedi Prof. Dr. R. Soeharso",
            link: "https://pendaftaran.rso.go.id/",
            logo: "https://pendaftaran.rso.go.id/assets/images/logo.png"
        },
    ]

    const openPdf = () => {
        const pdfUrl = 'https://drive.google.com/file/d/1h2zEHdgHOdGjdK9-L7Ojlpu7mNoHpBKv/view';
        window.open(pdfUrl, '_blank');
    };

    return (
        <>
{type == 'dinkes' ? 
            <div className="modal-logo">
                {dinKes.map((data) => (
                    <div className='logo-item'>
                        <a
                        key={data.name}
                        href={data.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            <img className="logo"
                                src={data.logo}
                            />
                        </a>
                        <a className='text-modal' href={data.link} rel="noopener noreferrer" target="_blank">{data.name}</a>
                    </div>
                ))}
                </div>:
                (
                    <div className='rs_container'>
                        <div className="modal-logo">
                            {rumahSakit.map((data) => (
                                <div className='logo-item'>
                                    <a
                                    className="logo-container"
                                    key={data.name}
                                    href={data.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                        <img className="logo"
                                            src={data.logo}
                                        />
                                    </a>
                                    <a className='text-modal' href={data.link} rel="noopener noreferrer" target="_blank">{data.name}</a>
                                </div>
                            ))}
                        </div>
                        <button className="text-next" onClick={openPdf}>
                            Selengkapnya
                        </button>
                    </div>
                )
            }
        </>   
    )
}

export default ModalLogo;