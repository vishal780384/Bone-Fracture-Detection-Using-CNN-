import React from 'react'
import '../CSS/Contact.css'

const Contact = () => {
  return (
        <div className="contact-container">
            <h1 className="title">Contact Us</h1>
            <div className="social-media">
                <h2>Social Media</h2>
                <ul>
                    <li>Facebook: <a href="https://www.facebook.com/example">Example Page</a></li>
                    <li>Twitter: <a href="https://twitter.com/example">Example Account</a></li>
                    <li>Instagram: <a href="https://www.instagram.com/example">Example Profile</a></li>
                </ul>
            </div>
            <div className="developer-details">
                <h2>Developer Details</h2>
                <p>Name: Vishal Kushwaha</p>
                <p>Email: vishal780384@email.com</p>
            </div>
            <div className="about-project">
                <h2>About the Project</h2>
                <p>This project aims to provide bone fracture detection using advanced AI algorithms.</p>
            </div>
        </div>
  )
}

export default Contact
