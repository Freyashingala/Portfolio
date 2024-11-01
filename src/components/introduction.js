import React, { useState, useEffect } from "react";
import profilePic from '../images/profile.jpg'; 
import '../css/introduction.css';

const Introduction = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Set a timer to update the state after 1 second
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        // Cleanup the timer
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="App">
            <div className="layout">
                <main className="main-content">
                    <div className="name">
                         <h1 className={`dynamic-text ${isVisible ? 'visible' : ''}`}>Freya Shingala</h1>
                    </div>
                    <p className={`dynamic-text ${isVisible ? 'visible' : ''}`}>
                         <div className="intro">
                         I am a sophomore at IIT Guwahati, pursuing a degree in Computer Science and Engineering. I am passionate about embracing new challenges and pushing the boundaries of what is possible, continually striving to achieve my best self!
                         </div>
                    </p>
                </main>
                <div className="image-container">
                    <div className={`dynamic-pic ${isVisible ? 'visible' : ''}`}><img src={profilePic} alt="Profile" className="profile-pic" /></div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
