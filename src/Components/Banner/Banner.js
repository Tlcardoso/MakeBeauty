import React, { useRef } from 'react'
import './Banner.css'

const Banner = () => {
    const carousel = useRef(null)

    const HandleLeftClick = (e) =>{
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }

    const HandleRightClick = (e) =>{
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth}
  

    return (
        <div className="container1">
            <div ref={carousel} className="carousel">
                <div className="item">
                    <div className="image">
                        <img src="images/banner_salao.jpg"/>
                        <img src="images/banner_salao2.jpg"/>
                        <img src="images/banner_salao3.jpg"/>
                    </div>
                </div>
            </div>
            <button onClick={HandleLeftClick} className="botao1">jj</button>
            <button onClick={HandleRightClick} className="botao2">kk</button>
        </div>
    )
}

export default Banner
