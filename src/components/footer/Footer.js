import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "../Css/footer.css";

function Footer() {
    return (
        <>
            <div className='footer-container'>
                <div className='footer-title'>
                    <h2> Tous droits réservés © 2024 Édiclic.</h2>
                </div>
                <div className='footer-social'>
                    <a href='mailto:'>contact@ediclic.com</a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Footer