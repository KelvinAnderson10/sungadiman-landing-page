import React from 'react'
import Navbar from './Navbar'

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <section id='home' className='home'>
                <div className='home-content'>
                    Home
                </div>
            </section>
        </div>
    )
}

export default Home