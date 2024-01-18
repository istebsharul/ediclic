import React from 'react'
import "./Css/contact.css"
import Logo from '..//images/logo2.webp'
import contactBg from '..//images/contactbg.webp'
import Form from './Form'

function Contact() {
    return (
        <>
            <div className='contact-container-blank'></div>
            <div className='contact-container'>
                <div className='contact-container-column1'>
                    <img src={contactBg}></img>
                </div>
                <div className='contact-container-column2'>
                    <div className='contact-container-column2-title'>
                        <h2>Vous êtes un auteur, porteur d'un projet,<br />
                            Vous êtes un éditeur à la recherche d'une équipe dynamique et créative,<br />
                            Vous êtes une entreprise désirant réaliser un livre,</h2>
                        <h1>N'HÉSITEZ PAS À NOUS CONTACTER !</h1>
                    </div>
                    <div className='contact-container-column2-form'>
                        <div className='company-details'>
                            <div className="company-details-logo"><img src={Logo} alt="Logo"></img></div>
                            <div className='company-details-address'>
                                <h3>ÉDICLIC</h3>
                                <p> contact@ediclic.com</p>
                            </div>
                        </div>
                        <Form />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact