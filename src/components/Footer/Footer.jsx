import React from 'react';
import './Footer.css';

/* Multi idioma */
import {FormattedMessage} from 'react-intl';


const Footer = () =>{
    // Fecha
    let fecha = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="site-footer">
                <div className="copyright">
                    <p>
                        <FormattedMessage
                            id='footer-info'
                            defaultMessage='Page created by Abiboe'
                        />
                    </p>
                    <p>&copy; {fecha}. All Rights Reserved.</p>
                </div>
                <div className="redes-sociales">
                    <a href="https://www.linkedin.com/in/abiboe-p-vince-b02062143/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/Abiboe/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    <a href="mailto:abiboevince@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope"></i></a>
                </div>
            </div>
        </footer>
    )
};

export default React.memo(Footer);