// Box.jsx
import React from 'react';
import '../css/Box.css'

const Box = ({ imageSrc, text }) => (
  <div>
  <div className="box">
    <img src={imageSrc} alt="Box" className="box-image" />
  </div>
  <p className="box-text">{text}</p>
  </div>
);

export default Box;
