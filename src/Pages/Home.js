import React from 'react'
import Banner from '../Components/Banner/Banner'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import './Home.css'

const Home = () => {
    return (
        <div className="home-container">
            <Header/>
            <Banner/>
            <Footer/>
        </div>
    )
}

export default Home
