import React from 'react'
import '../CSS/Bonecare.css'

const Bone_care = () => {
  return (
    <div className="bone-care-container">
    <h1 className="title">Bone Care Instructions and Precautions</h1>
    <div className="instructions">
        <h2>General Bone Health Tips:</h2>
        <ul>
            <li>Consume a diet rich in calcium and vitamin D to strengthen bones.</li>
            <li>Engage in weight-bearing exercises regularly to promote bone density.</li>
            <li>Avoid smoking and excessive alcohol consumption as they can weaken bones.</li>
            <li>Maintain a healthy body weight to reduce strain on bones and joints.</li>
        </ul>
    </div>
    <div className="precautions">
        <h2>Precautions for Bone Fractures:</h2>
        <ul>
            <li>Avoid activities that increase the risk of falls, especially for the elderly.</li>
            <li>Use appropriate protective gear during sports and physical activities.</li>
            <li>Follow proper safety protocols in workplaces to prevent accidents.</li>
            <li>Seek medical attention immediately in case of suspected fractures.</li>
        </ul>
    </div>
</div>
  )
}

export default Bone_care
