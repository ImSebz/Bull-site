import React from 'react'
import habeasData from '../../assets/legal/habeas-data.pdf';
import politicaAmbiental from '../../assets/legal/politica-ambiental.pdf';
import politicaCalidad from '../../assets/legal/politica-calidad.pdf';
import politicaAlcoholDrogas from '../../assets/legal/politica-alcohol-drogas.pdf';
import politicaTratamientoDatos from '../../assets/legal/politica-tratamiento-datos.pdf';
import politicaAntiCorrupcion from '../../assets/legal/politica-anticorrupcion-soborno.pdf';
import politicaCodigoEtica from '../../assets/legal/politica-codigo-etica-conducta.pdf';
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
                        <li><a href={habeasData} target='_blank'>Habeas Data</a></li>
                        <li><a href={politicaAmbiental} target='_blank'>Política ambiental</a></li>
                        <li><a href={politicaCalidad} target='_blank'></a>Política de calidad</li>
                        <li><a href={politicaAlcoholDrogas} target="_blank">Polítca de alcohol y drogas</a></li>
                        <li><a href={politicaTratamientoDatos} target="_blank">Política de tratamiento de datos</a></li>
                        <li><a href={politicaAntiCorrupcion} target='_blank'>Política anticorrupción y soborno</a></li>
                        <li><a href={politicaCodigoEtica} target="_blank">Política código de ética y conducta</a></li>
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