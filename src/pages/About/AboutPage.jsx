import React from 'react';
import './AboutPage.css'

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import cv from '../../cv/cv.pdf';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Img */

const About = () => {

  function readMore() {
    let btnHide = document.querySelector("#btn-hide");
    let parrafoActive = document.querySelector(".parrafo-active");

    parrafoActive.classList.toggle("show");

    if (parrafoActive.classList.contains("show")) {
      btnHide.innerHTML = "↑";
    } else {
      btnHide.innerHTML = "Read more";
    }
  }

  return (
    <div>

      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="sobre-mi-seccion" id="sobre-mi">
          <div className="sobre-mi-container">
            <div className="sobre-mi-img-container">
              
              <a href={cv} target="_blank" rel="noopener noreferrer" download="cv.pdf" className="btn-codigo cv buttonDownload">
                  <FormattedMessage
                      id='btn-cv'
                      defaultMessage='Download CV'
                  />
              </a>
            </div>
            <div className="sobre-mi-info">

              <p>
                <FormattedMessage
                id='about-info-1'
                defaultMessage={"Hi, I'm Abiboe, a student at the Northumbria University London; With a deep understanding of systems and a knack for problem-solving, I found my calling."}/>
              </p>
              <p>
                <FormattedMessage
                id='about-info-2'
                defaultMessage={"The art of hacking goes beyond mere intrusion; it's about outthinking complex security measures and consistently pushing the boundaries of what's possible in cybersecurity. Every day presents a new puzzle, a system to understand, a code to decrypt, or a firewall to examine. This ongoing journey through the intricate landscape of networks and codes continues to fuel my passion for the craft of hacking"}/>
              </p>
              
              <div className="hide parrafo-active">
                <p>
                  <FormattedMessage
                    id='about-info-3'
                    defaultMessage='I consider myself a self-taught person since I like to be constantly learning day by day, both new technologies and new development methods that help me polish and raise my level of learning.'
                  />
                </p>
              </div>

              <div className="btn-info">
                <div className="custom-btn btn-codigo" id="btn-hide" onClick={readMore}><span>Read more</span></div>
              </div>
            </div>

          </div>

          <div className="skill-seccion">
            <h1 className="heading">Skills</h1>
            
                   
                   
            <div className="skill-container">
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="Python" className="skills-img icon-li" src="https://raw.githubusercontent.com/abiboe/proj/main/python.svg" title="Python" />
                <h2 className="skill-name">Python</h2>
              </div>
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="C++" className="skills-img icon-li" src="https://raw.githubusercontent.com/abiboe/proj/main/cpp_logo.svg" title="C++" />
                <h2 className="skill-name">C++</h2>
              </div>
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="Linux" className="skills-img icon-li" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" title="Linux" />
                <h2 className="skill-name">Linux</h2>
              </div>
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="Bash" className="skills-img icon-li" src="https://raw.githubusercontent.com/abiboe/proj/main/full_colored_dark.svg" title="Bash" />
                <h2 className="skill-name">Bash</h2>
              </div>
              
              
              
              
              
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="HTML" className="skills-img icon-li" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" title="HTML5" />
                <h2 className="skill-name">HTML</h2>
              </div>
              
              <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
                <img alt="CSS" className="skills-img icon-li" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" title="CSS3" />
                <h2 className="skill-name">CSS</h2>
              </div>
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="Js" className="skills-img icon-li" src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png" title="Java Script" />
                <h2 className="skill-name">Javascript</h2>
              </div>
                         
             
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="react" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" title="ReactJs" />
                <h2 className="skill-name">ReactJs</h2>
              </div>
              <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
                <img alt="nodejs" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" title="NodeJs" />
                <h2 className="skill-name">NodeJs</h2>
              </div>
              <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
                <img alt="Splunk" className="skills-img" src="https://raw.githubusercontent.com/abiboe/proj/main/splunk.svg" title="Splunk" />
                <h2 className="skill-name">Splunk</h2>
              </div>
              <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
                <img alt="Nginx" className="skills-img" src="https://raw.githubusercontent.com/abiboe/proj/main/nginx.svg" title="Nginx" />
                <h2 className="skill-name">Nginx</h2>
              </div>
              <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
                <img alt="Nmap" className="skills-img" src="https://raw.githubusercontent.com/abiboe/proj/main/nmap-logo.svg" title="Nmap" />
                <h2 className="skill-name">Nmap</h2>
              </div>
               <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
                <img alt="Nikto" className="skills-img" src="https://raw.githubusercontent.com/abiboe/proj/main/nikto-logo.svg" title="Nikto" />
                <h2 className="skill-name">Nikto</h2>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ScrollToTop />

      <Footer />

    </div>
  )
}
export default About;