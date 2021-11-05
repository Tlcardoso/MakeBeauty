import React, { useState, useRef, useEffect } from 'react'
import './Menu.css'
import Button from '../Button/Button'

const Menu = () => {
    const [classMenu, setClassMenu] = useState(true)
    const container = useRef(null)

    useEffect(() =>{
        container.current.style.transform = "translateX(100%)";
    }, [])

    const handleClick = (e) => {
        e.preventDefault()
        setClassMenu(!classMenu)
        if (classMenu === true){
            container.current.style.transition = "transform 0.3s ease-in";
            container.current.style.transform = "translateX(0)";
        }else{
            container.current.style.transition = "transform 0.3s ease-in";
            container.current.style.transform = "translateX(100%)";
        }
    }



    return (
        <div className="teste">
           <div onClick={handleClick} className="mobile-menu">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <section ref={container} className="button-container">
                <Button>Home</Button>
                <Button>Profissionais</Button>
                <Button>Contato</Button>
                <Button>Login</Button>
            </section>
        </div>
       
    )
}

export default Menu

