import React from "react";
import './Contact.css';
function Contact() {
  return (
    <>
      <div className="product-card">   
        <h3>Open Hours</h3>
        <ul className="contact-list">
          <li>Mon-sat: 9.30 AM - 9.30 PM</li>
          <li>Kovai Main Road, Power Office Medu, Nambiyur - 638 458</li>
          <li>Mobile:86673 52052</li>
        </ul>
      </div>
      <br></br>
      <h2>Our location</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1920.2721556822553!2d77.31126197278198!3d11.345361677000767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x3ba9192a7facda7f%3A0xf2568b1989edb07d!2sBannari%20Amman%20Tractor%20Workshop!3m2!1d11.3459554!2d77.31065219999999!4m3!3m2!1d11.346013899999999!2d77.31057!5e1!3m2!1sen!2sin!4v1679584666587!5m2!1sen!2sin" 
      width="800" 
      height="600"
      title="Google Maps location">loc</iframe>
    </>
  )
}

export default Contact
