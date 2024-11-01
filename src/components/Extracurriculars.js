import React, { useState, useEffect, useRef, useCallback } from "react";
import '../css/extracurriculars.css';
import anchoring from '../images/anchoring.jpg';
import kathak from '../images/kathak.jpg';
import poetry from '../images/poetry.jpg'

const Extracurriculars = () => {
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
        <div id="Extracurriculars">
            <div className="layout">
               <main className="main-content">
                    <div className="heading">
                        <h1 ref={textRef1} className={`dynamic-text ${isVisible1 ? 'visible' : ''}`}>Extracurriculars</h1>
                    </div>
                    <div className="tp-h">
                         <div className="project-content">
                              <div className="extracurricular-box  left-shift">
                                   <div ref={textRef2} className={`dynamic-text ${isVisible2 ? 'visible' : ''}`}>
                                        <img src= {anchoring} alt="Youtube Clone" className="extracurricular-image" />
                                        <h2>Public Speaking and Debating</h2>
                                        <p className="project-details">Anchoring in Alcheringa - Largest cultural fest of North-East India</p>
                                   </div>
                              </div>

                              <div className="extracurricular-box second">
                                   <div ref={textRef3} className={`dynamic-text ${isVisible3 ? 'visible' : ''}`}>
                                        <img src={kathak} alt="Chatbot" className="extracurricular-image" />
                                        <h2>Kathak</h2>
                                        <p className="project-details">Qualification of Upantya Visharad (B.A. Part - 1)</p>
                                   </div>
                              </div>

                              <div className="extracurricular-box  right-shift second">
                                   <div ref={textRef4} className={`dynamic-text ${isVisible4 ? 'visible' : ''}`}>
                                        <img src={poetry} alt="Portfolio Website" className="extracurricular-image" />
                                        <h2>Poetry Writing</h2>
                                   </div>
                              </div>
                         </div>
                    </div>
               </main>
            </div>
        </div>
    );
};

export default Extracurriculars;
