"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div className="flex flex-col min-h-screen justify-between bg-white dark:bg-gradient-to-r from-gray-800 to-black">
      {/* Contact Form */}
      <div className="flex items-center justify-center flex-grow">
        <div className="dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md border border-black">
          <h1 className="text-2xl font-bold text-black mb-6 text-center dark:text-white transform hover:scale-105">Contact me</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              type="text" 
              name="name" 
              placeholder="Name" 
              value={formData.name} 
              onChange={handleChange}
              className="w-full p-3 border border-black dark:border-gray-300 rounded-md focus:ring-2 dark:focus:ring-gray-700 transition "
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              value={formData.email} 
              onChange={handleChange}
              className="w-full p-3 border border-black dark:border-gray-300 rounded-md focus:ring-2  dark:focus:ring-gray-700 transition "
            />
            <textarea 
              name="message" 
              placeholder="Your Message" 
              value={formData.message} 
              onChange={handleChange}
              rows="5"
              className="w-full p-3 border border-black dark:border-gray-300 rounded-md focus:ring-2  dark:focus:ring-gray-700 transition "
            />
            <button 
              type="submit" 
              className="w-full dark:bg-slate-200 dark:text-black  dark:hover:bg-slate-300 text-white p-3 rounded-md bg-gray-800 transition transform hover:scale-105  hover:bg-gray-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer with Social Icons */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <h3 className="text-lg mb-4">My Socials</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://www.facebook.com/profile.php?id=61556393203323" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition transform hover:scale-110">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.instagram.com/iamshayan40/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition transform hover:scale-110">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://pk.linkedin.com/in/iamshayan40" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition transform hover:scale-110">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://github.com/iamshayan40" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition transform hover:scale-110">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
