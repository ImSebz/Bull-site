import React from 'react'
import './footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-line'></div>
            <div className='footer-content'>
                <div className='footer-contacto'>
                    <h1>CONTACTO</h1>
                    <h2>Dirección</h2>
                    <p>Oficina principal: Bogotá, carrera 53 c #127 d 23
                        Oficina Administrativa: Calle 127 D 53 A 36
                        CEDI: Bogotá, carrera 104 A #23 H-8</p>
                    <h2>Teléfono</h2>
                    <p>(+57) 601 432 2700
                        - (+57) 318 3723773</p>
                    <h2>Correo</h2>
                    <p>info@bullmarketing.com.co</p>
                </div>
                <div className='footer-politicas'>
                    <h1>POLÍTICAS AGENCIA BULL MARKETING</h1>
                    <ul>
                        <li>Habeas Data</li>
                        <li>Política ambiental</li>
                        <li>Política de calidad</li>
                        <li>Polítca de alcohol y drogas</li>
                        <li>Política de tratamiento de datos</li>
                        <li>Política anticorrupción y soborno</li>
                        <li>Política código de ética y conducta</li>
                    </ul>
                </div>
                <div className='footer-acerca'>
                    <h1>ACERCA DE</h1>
                    <ul>
                        <li>Nosotros</li>
                        <li>Nuestro trabajo</li>
                        <li>Contáctanos: Preguntas, quejas, reclamos, sugerencias</li>
                        <li>Trabaje con nosotros</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;