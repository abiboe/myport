import React from 'react';
import './ServicesPage.css'

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
//import Accordion from './Accordion'


/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const Services = () => {
  return (
    <div>

      <HeaderPage />

      <ParticleBackground />

      <main className="service-page">
      <section className="servicios" id="servicios">
        <h2 className="heading">
            <FormattedMessage
                id='services'
                defaultMessage='Services'
            />
        </h2>
        <div className="row">
            <div className="columns" data-aos="fade-up" data-aos-delay="200">
                <i className="fas fa-drafting-compass"></i>
                <h3>
                    <FormattedMessage
                        id='Security'
                        defaultMessage='Security Consulting'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='design-info'
                        defaultMessage="Providing comprehensive risk assessments for web and mobile applications, identifying potential vulnerabilities, and offering tailored mitigation strategies to enhance the security posture of the client's digital assets."
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="300">
                <i className="fas fa-laptop"></i>
                <h3>
                    <FormattedMessage
                        id='development'
                        defaultMessage='Web development'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='development-info'
                        defaultMessage='Creation of well-structured web pages, good responsive design, attractive color palette, with interactions that give the user satisfaction when browsing the website.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="400">
                <i className="fas fa-chart-line"></i>
                <h3>
                    <FormattedMessage
                        id='marketing'
                        defaultMessage='Custom Security Research'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='marketing-info'
                        defaultMessage='Offering tailored security research services to navigate the complexities of cybersecurity. Specializing in emerging threats, secure technology practices, and innovative defense strategies. Empowering businesses and individuals with actionable insights for robust digital protection.'
                    />
                </p>
            </div>
          
          
        </div>
    </section>



  
      </main>


      <ScrollToTop />

      <Footer />

    </div>
  )
}
export default Services;