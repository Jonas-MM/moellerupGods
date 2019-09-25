import React from 'react';
import Footercss from './Footercss.css'

const Footer = () => {
    return (
        <footer>
            <div className="container d-flex text-left">

                <div>
                    <ul>
                        <li>Møllerup Gods</li>
                        <li>Møllerupvej 26</li>
                        <li className="text-left">8410 Rønde</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <p>Telefon 87 58 69 00</p>
                        <a href="mailto: info@moellerup.dk">info@moellerup.dk</a>
                    </ul>
                </div>

                <div>
                    <a href="http://www.lonerubin.dk/">Text Lone Rubin</a>
                </div>

            </div>
        </footer>

    );
}

export default Footer;