import React, { useState, useEffect, useRef, useCallback } from "react";
import '../css/contact.css'

function ContactMe() {
     const [isVisible1, setIsVisible1] = useState(false);
     const [submit, setSubmit] = useState(false);
      
     const textRef1 = useRef(null);
      
     const checkVisibility = (ref, setVisible) => {
     if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
          setVisible(isInView);
          }
     };
      
     const handleScroll = useCallback(() => {
          checkVisibility(textRef1, setIsVisible1);
     }, []);
      
     useEffect(() => {
          window.addEventListener('scroll', handleScroll);
          handleScroll();
      
          return () => {
               window.removeEventListener('scroll', handleScroll);
               };
          }, [handleScroll]);
      
     const [formData, setFormData] = useState({
          name: '',
          email: '',
          message: ''
     });

     const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData((prevData) => ({
          ...prevData,
          [name]: value
          }));
     };

     const handleSubmit = (e) => {
          e.preventDefault();
          console.log('Form submitted:', formData);
          setSubmit(true);
          setFormData({
               name: '',
               email: '',
               message: ''
          });

          setTimeout(() => {
               setSubmit(false);
          }, 2000);
     };

     return (
     <div className="contact">
     <div className="layout">
          <main className="main-content">
               <div className="heading">
               <h1 ref={textRef1} className={`dynamic-text ${isVisible1 ? 'visible' : ''}`} style={{marginBottom: '-10px'}}>Contact me</h1>
               </div>
      <form onSubmit={handleSubmit}>
      <p ref={textRef1} className={`dynamic-text ${isVisible1 ? 'visible' : ''}`} style={{fontSize: '2rem'}}>
          <label htmlFor="name">Name:  </label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </p>

        <p ref={textRef1} className={`dynamic-text ${isVisible1 ? 'visible' : ''}`} style={{fontSize: '2rem'}}>
          <label htmlFor="email">Email:  </label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </p>

        <p ref={textRef1} className={`dynamic-text ${isVisible1 ? 'visible' : ''}`} style={{fontSize: '2rem'}}>
          <label htmlFor="message">Message:  </label>
          <br />
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </p>
        {submit && <div className="ss">Thank you for your interest!</div>}
        <button type="submit">Submit</button>
      </form>
      </main>
    </div>
     </div>
  );
}

export default ContactMe;
