import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTiktok, faLinkedinIn, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './floatingIcons.css';

const FloatingIcons = () => {
    return (
        <div className="floating-icons">
            <a href="https://www.facebook.com/bullmarketing/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://www.instagram.com/bull_marketing/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.tiktok.com/@bullmarketing" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTiktok} />
            </a>
            <a href="https://www.linkedin.com/company/bull-marketing-s-a-s/mycompany/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://www.youtube.com/@BullMarketing" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://api.whatsapp.com/send?phone=+573183723773&text=Hola%20%F0%9F%91%8B%20me%20remito%20de%20la%20p%C3%A1gina%20web%20de%20Bull%20Marketing,%20deseo%20hablar%20con%20alguien!%20%F0%9F%93%B2" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} />
            </a>
        </div>
    )
}

export default FloatingIcons;