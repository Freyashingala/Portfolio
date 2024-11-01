import React, { useState, useEffect, useRef, useCallback } from "react";
import '../css/about.css';
import Box from "./Box";
import c from '../images/c.jpg';
import cpp from '../images/c++.jpg';
import css from '../images/css.jpg';
import js from '../images/javascript.jpg';
import react from '../images/react.jpg';
import python from '../images/python.jpg';

const About = () => {
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

    const boxData = [
        { imageSrc: c, text: 'C' },
        { imageSrc: cpp, text: 'C++' },
        { imageSrc: css, text: 'CSS' },
        { imageSrc: js, text: 'JavaScript' },
        { imageSrc: react, text: 'React' },
        { imageSrc: python, text: 'Python' }
    ];

    return (
        <div id="About">
            <div className="layout">
                <main className="main-content">
                    <div className="heading">
                        <h1 ref={textRef1} className={`dynamic-text ${isVisible1 ? 'visible' : ''}`}>About</h1>
                    </div>
                    <p ref={textRef1} className={`dynamic-text ${isVisible1 ? 'visible' : ''}`}>
                        Hey I'm Freya. I am a budding software engineer currently in the 2nd year of my B.Tech CSE degree at the Indian Institute of Technology, Guwahati.
                    </p>
                    <div className="tp-h">
                        <div ref={textRef2} className={`dynamic-text ${isVisible2 ? 'visible' : ''}`}>Personal Background</div>
                    </div>
                    <div className="tp">
                        <div ref={textRef2} className={`dynamic-text ${isVisible2 ? 'visible' : ''}`}>
                            I am a dedicated professional who embodies the principles of hard work and creativity. My commitment to personal and professional growth drives me to continuously refine my skills and knowledge. Whether in a leadership role or as part of a collaborative team, I consistently invest my full effort to ensure that projects are executed with excellence.
                            <br /><br />
                            In addition to my professional pursuits, I am passionate about writing poetry, anchoring events, and immersing myself in novels. These interests not only provide a creative outlet but also serve as vital tools for rejuvenation and stress management, enriching my personal growth and enhancing my effectiveness in my work.
                            <br /><br />
                            I have completed my secondary schooling from Saint Paul's School, Rajkot and higher secondary from B.H. Rathod School, Rajkot.
                        </div>
                    </div>
                    <div className="tp-h">
                        <div ref={textRef3} className={`dynamic-text ${isVisible3 ? 'visible' : ''}`}>Technical Proficiencies</div>
                    </div>
                    <div className="tp">
                        <div ref={textRef3} className={`dynamic-text ${isVisible3 ? 'visible' : ''}`}>
                            I am proficient in Web Development where I use the languages HTML, CSS, and JavaScript along with frameworks such as React and Axios for Front-end Development.
                            <br /><br />
                            I am also proficient in C, C++, and Python basics for competitive programming and constantly try to solve challenging questions regarding various algorithms to improve myself.
                        </div>
                    </div>

                    <div ref={textRef4} className={`dynamic-text ${isVisible4 ? 'visible' : ''}`}>
                    <div className="box-container">
                        {boxData.map((box, index) => (
                            <Box 
                                key={index}
                                imageSrc={box.imageSrc}
                                text={box.text} 
                            />
                        ))}
                    </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default About;
