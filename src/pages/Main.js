// Main.js

import React, { useState } from 'react';
import '../CSS/Main.css';
import Bone_care from './Bonecare';
import Contact from './Contact';

const Main = () => {

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      setSelectedImage(file);
    };

  return (
    <>
    <div className='box'>
      <h1>ResNet CNN Model Result</h1>
      <p className='text'>
          Our Bone Fracture Detection website leverages cutting-edge technology to analyze medical images swiftly and accurately, 
          aiding in the diagnosis of bone fractures. Experience rapid and efficient fracture identification, reducing diagnostic time 
          and enhancing patient care through our advanced image processing algorithms. Navigate seamlessly through our user-friendly interface, 
          designed for both healthcare professionals and patients, ensuring accessibility and ease of use. Harness the power of artificial intelligence 
          for precise fracture detection, assisting medical professionals in making informed decisions with confidence. Rest easy knowing that your medical 
          data is handled with the utmost security and confidentiality, complying with industry standards and regulations.
      </p>

      <h2>Select X-Rays image </h2>
    
      <div className='container'>
          <h1>Bone Fracture Detection</h1>
          <div className="image-uploader">
            <label htmlFor="upload">choose x-ray image:</label>
            <input
              type="file"
              id="upload"
              accept="image/*"
              onChange={handleImageChange}
              />
            {selectedImage && (
              <div className='output_img'>
                <p>Selected Image:</p>
                <img className="selected-image" src={URL.createObjectURL(selectedImage)} alt="Selected" />
              </div>
            )}
          </div>
      </div>
    </div>
  
    <Bone_care/>
    <Contact/>
    </>
  );
};

export default Main;
