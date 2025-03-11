"use client"

import { useState } from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa"; // Importing icons from react-icons
import { FaPhoneAlt, FaLock, FaTruck, FaThumbsUp } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for your message! We’ll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-green-700 text-center">
          Contact Us
        </h2>
        <p className="text-lg text-gray-600 mt-4 text-center">
          Have questions? Reach out to our friendly team — we’re here to help!
        </p>

      
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-4 bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto"
        >
          {/* Name Input */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-green-700 font-medium text-sm">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 mt-1 text-sm w-full"
              required
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-green-700 font-medium text-sm">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 mt-1 text-sm w-full"
              required
            />
          </div>

          {/* Message Input */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-green-700 font-medium text-sm">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 mt-1 text-sm w-full"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-500 text-white font-medium py-2 rounded-lg transition text-sm"
          >
            Send Message
          </button>
        </form>

        {/* Social Media Links */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-green-700">Follow Us</h3>
          <div className="flex justify-center space-x-6 mt-4">
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-500 transition"
              aria-label="Instagram"
            >
              <FaInstagram className="text-3xl" />
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-500 transition"
              aria-label="Facebook"
            >
              <FaFacebook className="text-3xl" />
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-500 transition"
              aria-label="Twitter"
            >
              <FaTwitter className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
