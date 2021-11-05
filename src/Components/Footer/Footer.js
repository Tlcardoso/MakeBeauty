import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="copy-container">Copyrights© - Todos os direitos reservados</div>
            <div className="logo-container">
                <a href="https://www.linkedin.com/in/thiago-cardoso-a97472222/"><img  src="Images/facebook.png"/></a>
                <a href="https://github.com/Tlcardoso"><img  src="Images/github.png"/></a>
                <a href="https://www.linkedin.com/in/thiago-cardoso-a97472222/"><img  src="Images/linkedin.png"/></a>
                <a href="https://www.youtube.com/watch?v=PZWVO2NME20"><img  src="Images/youtube.png"/></a>
            </div>
        </footer>
    )
}

export default Footer
