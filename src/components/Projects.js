import React, { useState, useEffect, useRef, useCallback } from "react";
import '../css/projects.css';
import yc from '../images/youtube-clone.jpg';
import chatbot from '../images/chatbot.jpg';
import portfolio from '../images/portfolio.jpg'

const Projects = () => {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);

    const textRef1 = useRef(null);
    const textRef2 = useRef(null);
    const textRef3 = useRef(null);
    const textRef4 = useRef(null);

    const checkVisibility = (ref, setVisible) => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
            setVisible(isInView);
        }
    };

    const handleScroll = useCallback(() => {
        checkVisibility(textRef1, setIsVisible1);
        checkVisibility(textRef2, setIsVisible2);
        checkVisibility(textRef3, setIsVisible3);
        checkVisibility(textRef4, setIsVisible4);
    }, []);

    useEffect(() => {
          window.addEventListener('scroll', handleScroll);
          handleScroll();

          return () => {
               window.removeEventListener('scroll', handleScroll);
          };
    }, [handleScroll]);

    return (
        <div id="Projects">
            <div className="layout">
               <main className="main-content">
                    <div className="heading">
                        <h1 ref={textRef1} className={`dynamic-text ${isVisible1 ? 'visible' : ''}`}>Projects</h1>
                    </div>
                    <div className="tp-h">
                         <div className="project-content">
                              <div className="content-box  left-shift">
                                   <div ref={textRef2} className={`dynamic-text ${isVisible2 ? 'visible' : ''}`}>
                                        <img src= {yc} alt="Youtube Clone" className="project-image" />
                                        <h2><a href="https://freyashingala.github.io/youtube-clone">Youtube Clone</a></h2>
                                        <p className="project-details">Developed a fully responsive YouTube Clone using React, Tailwind CSS, and Axios, with data fetched through YouTube API, via Rapid API.
                                        Implemented key features like video search, playback, and more to replicate YouTube's core functionality.</p>
                                   </div>
                              </div>

                              <div className="content-box  right-shift second">
                                   <div ref={textRef3} className={`dynamic-text ${isVisible3 ? 'visible' : ''}`}>
                                        <img src={chatbot} alt="Chatbot" className="project-image" />
                                        <h2><a href="https://inter-iit-bootcamp-dev-task-frontend.vercel.app/">Chatbot</a></h2>
                                        <p className="project-details">Created a fully functional mernstack website with chatbot functionality. It also has user registration and login function along with text-to-speech and speech-to-text functionality.</p>
                                   </div>
                              </div>

                              <div className="content-box  left-shift second">
                                   <div ref={textRef4} className={`dynamic-text ${isVisible4 ? 'visible' : ''}`}>
                                        <img src={portfolio} alt="Portfolio Website" className="project-image" />
                                        <h2><a href="#home">Personal Portfolio Website</a></h2>
                                        <p className="project-details">Created a personal portfolio website that highlights all my personal bio, skills, achievements and Extracurriculars</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </main>
            </div>
        </div>
    );
};

export default Projects;
