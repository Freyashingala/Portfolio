import React, { useState, useEffect, useRef, useCallback } from "react";

const Achievements = () => {
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
        <div id="Achievements">
            <div className="layout">
                <main className="main-content">
                    <div className="heading">
                        <h1 ref={textRef1} className={`dynamic-text ${isVisible1 ? 'visible' : ''}`}>Achievements</h1>
                    </div>
                    <p ref={textRef1} className={`dynamic-text ${isVisible1 ? 'visible' : ''}`}>
                        During my career, I've crossed many milestones. Some of them are: 
                    </p>
                    <div className="tp">
                         <ul>
                              <br />
                              <li ref={textRef2} className={`dynamic-text ${isVisible2 ? 'visible' : ''}`}> Secured <b>AIR 1050</b> in <b>JEE Main</b> in which around 11lac students appeared</li>
                              <br />
                              <li ref={textRef3} className={`dynamic-text ${isVisible3 ? 'visible' : ''}`}> Secured <b>AIR 1907</b> in <b>JEE Advanced</b> in which around 2lac students appeared</li> 
                              <br />
                              <li ref={textRef4} className={`dynamic-text ${isVisible4 ? 'visible' : ''}`}> Secured <b>1st place</b> in the school category of <b>Smart City Hackathon</b> and became the youngest team to win. Listed in the <b>India Book of Records</b> for this achievement. </li>
                         </ul>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Achievements;
