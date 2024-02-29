import React from 'react';
import '../../pages/About/AboutPage.css'
import { Link } from 'react-router-dom';
import cv from '../../cv/cv.pdf';
import { ButtomGet } from '../ButtomGet/ButtomGet';
/*import { motion } from 'framer-motion';

import { HiOutlineArrowNarrowDown } from 'react-icons/hi';

 Multi idioma */
import { FormattedMessage } from 'react-intl';


const About = () => (
    <section className="sobre-mi" id="sobre-mi">
        <h2 className="heading">
            <FormattedMessage
                id='about'
                defaultMessage='About me'
            />
        </h2>

        <div className="row container">
            <div className="columns" data-aos="fade-right" data-aos-delay="300">
                <h3>
                    <FormattedMessage
                        id = "hi_im" 
                        defaultMessage = "Hi, I'm Abiboe"
                        
                    />
                </h3>
                
        
                <ul>
                     <li>
                        <p>
                            <span>
                                <FormattedMessage
                                id="hob"
                                defaultMessage='Hobbies:'
                                />
                            </span>
                                Games
                        </p>
                    </li>
                    <li>
                        <p><span>Email:</span> abiboevince@gmail.com</p>
                    </li>
                    <li>
                        <p>
                            <span>
                                <FormattedMessage
                                    id='from'
                                    defaultMessage='From:'
                                />
                            </span>
                            India
                        </p>
                    </li>
                </ul>
                <div className="mas-info">
                    <a href={cv} target="_blank" rel="noopener noreferrer" download="cv.pdf" className="btn-codigo buttonDownload">
                        <FormattedMessage
                            id='btn-cv'
                            defaultMessage='Download CV'
                        />
                    </a>
                    <div className='mas-info-btn'>
                    <Link to="/about">
                        <ButtomGet/>
                    </Link>
                    </div>
                    
                </div>
            </div>
            <div className="columns col-skill" data-aos="fade-left" data-aos-delay="650">
                <h3>skills</h3>
                <div className="skill">
               
                    <div>
                        <img alt="Python" className="icons-skils" src="https://raw.githubusercontent.com/abiboe/proj/main/python.svg" />
                        <h5>Python</h5>
                    </div>
                    <div>
                        <img alt="C++" className="icons-skils" src="https://raw.githubusercontent.com/abiboe/proj/main/cpp_logo.svg" />
                        <h5>C++</h5>
                    </div>
                    

                    <div>
                        <img alt="HTML" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
                        <h5>HTML</h5>
                    </div>
                    <div>
                        <img alt="CSS" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
                        <h5>CSS</h5>
                    </div>
                    <div>
                        <img alt="Js" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
                        <h5>JavaScript</h5>
                    </div>
                    <div>
                        <img alt="Bash" className="icons-skils" src="https://raw.githubusercontent.com/abiboe/proj/main/full_colored_dark.svg" />
                        <h5>Bash</h5>
                    </div>
                    <div>
                        <img alt="React" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                        <h5>React</h5>
                    </div>
                    <div>
                        <img alt="PyTorch" className="icons-skils" src="https://raw.githubusercontent.com/abiboe/proj/main/pytorch-original.svg" />
                        <h5>PyTorch</h5>
                    </div>
                    <div>
                        <img alt="Tensorflow" className="icons-skils" src="https://raw.githubusercontent.com/abiboe/proj/main/tensorflow-original.svg" />
                        <h5>Tensorflow</h5>
                    </div>
                    <div>
                        <img alt="Unrealengine" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/unrealengine/unrealengine-original.svg" />
                        <h5>Unrealengine</h5>
                    </div>
                </div>
               
                <h3>
                    <FormattedMessage
                        id='tools'
                        defaultMessage='Tools'
                    />
                </h3>
                <div className="skill">
                <div>
                        <img alt="HTML" className="icons-skils" src="https://raw.githubusercontent.com/abiboe/proj/main/distributor-logo-kali.svg" />
                        <h5>Kali Linux</h5>
                    </div>
                    <div>
                        <img alt="figma" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" title="figma" />
                        <h5>Figma</h5>
                    </div>
                    <div>
                        <img alt="Anaconda" className="icons-skils" src="https://raw.githubusercontent.com/abiboe/proj/main/icons8-anaconda-240.svg" title="Anaconda" />
                        <h5>Anaconda</h5>
                    </div>
                    
                     <div>
                        <img alt="Visual Studio Code" className="icons-skils" src="https://raw.githubusercontent.com/abiboe/proj/main/visual-studio-code.svg" title="Visual Studio Code" />
                        <h5>VS Code</h5></div>
                    <div>
                        <img alt="git" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" title="git" />
                        <h5>Git</h5>
                    </div>
                    <div>
                        <img alt="Photoshop" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" title="Photoshop" />
                        <h5>Photoshop</h5>
                    </div>
                    <div>
                        <img alt="Burp Suite" className="icons-skils" src="https://raw.githubusercontent.com/abiboe/proj/main/burp.svg" title="Burp Suite" />
                        <h5>Burp Suite</h5>
                    </div>
                    <div>
                        <img alt="Metasploit" className="icons-skils" src="https://raw.githubusercontent.com/abiboe/proj/main/tool-logo-metasploit.svg" title="Metasploit" />
                        <h5>Metasploit</h5>
                    </div>
                    <div>
                        <img alt="Nessus" className="icons-skils" src="https://raw.githubusercontent.com/abiboe/proj/main/tenable-svgrepo-com.svg" title="Nessus" />
                        <h5>Nessus</h5>
                    </div>
                    <div>
                        <img alt="Wireshark" className="icons-skils" src="https://raw.githubusercontent.com/abiboe/proj/main/apps-wireshark.svg" title="Wireshark" />
                        <h5>Wireshark</h5>
                    </div>
                    </div>
                    
                </div>
            </div>
    
    </section>
);

export default React.memo(About);