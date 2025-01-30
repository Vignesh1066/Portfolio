import React, { useRef, useState } from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript } from "react-icons/si";
import axios from "axios";

const apikey = import.meta.env.VITE_ACCESS_KEY;

const ContactSection = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      access_key: apikey,
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    try {
      const response = await axios.post("https://api.web3forms.com/submit", formData);
      if (response.data.success) {
        setFeedbackMessage("Message sent successfully!");
      } else {
        setFeedbackMessage("Message sending failed. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setFeedbackMessage("An error occurred. Please try again later.");
    }

    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <div id="contact" className="py-16 flex flex-col items-center justify-center bg-gradient-to-b from-gray-800  to-gray-900 -mt-10 text-white">
      <div className="w-full text-center max-sm:mt-10">
        <h1 className="text-4xl sm:text-5xl font-semibold text-teal-400">Reach Me Anytime</h1>
      </div>
      <div className="max-w-7xl mt-10 w-full flex flex-col lg:flex-row items-stretch justify-between gap-10 p-6">
        <div className="lg:w-1/2 w-full flex items-stretch">
          <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-lg shadow-lg w-full flex flex-col">
            <input type="hidden" name="access_key" value={import.meta.env.VITE_ACCESS_KEY} />
            <h2 className="text-3xl font-semibold text-center mb-6 text-emerald-400">Contact Form</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Your Name</label>
              <input
                type="text"
                ref={nameRef}
                placeholder="What's your name?"
                className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Your Email</label>
              <input
                type="email"
                ref={emailRef}
                placeholder="What's your email address?"
                className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">Your Message</label>
              <textarea
                ref={messageRef}
                placeholder="What would you like to say?"
                rows="4"
                className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              ></textarea>
            </div>
            {feedbackMessage && (
              <div className={`mb-4 text-center ${feedbackMessage.includes('success') ? 'text-green-400' : 'text-red-400'}`}>
                <p>{feedbackMessage}</p>
              </div>
            )}
            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-teal-500 to-emerald-500 hover:bg-gradient-to-l transition-all duration-700 text-white font-bold rounded"
            >
              Send Message
            </button>
          </form>
        </div>

        <div
          className="lg:w-1/2 w-full sm:h-[500px] h-[400px] md:min-h-full bg-gray-900 p-6 rounded-lg shadow-lg flex items-center justify-center"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute p-5 bg-gray-700 rounded-full animate-spin-slow">
              <FaReact className="text-7xl text-cyan-400" />
            </div>

            <div className="absolute w-full h-full">
              <div className="absolute sm:left-10 left-5 top-5 animate-spin-slow">
                <SiJavascript className="text-5xl text-yellow-500" />
              </div>
              <div className="absolute sm:right-10 right-5 top-5 animate-spin-slow">
                <FaNodeJs className="text-5xl text-green-500" />
              </div>
              <div className="absolute left-5 bottom-10 animate-spin-slow">
                <SiMongodb className="text-5xl text-green-400" />
              </div>
              <div className="absolute right-5 bottom-10 animate-spin-slow">
                <SiExpress className="text-5xl text-teal-400" />
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-spin-slow">
                <FaHtml5 className="text-5xl text-orange-500" />
              </div>
              <div className="absolute top-1/2 left-10 sm:left-20  transform -translate-x-16 -translate-y-1/2 animate-spin-slow">
                <SiTailwindcss className="text-5xl text-cyan-500" />
              </div>
              <div className="absolute top-1/2 right-1 sm:right-10 animate-spin-slow">
                <FaBootstrap className="text-5xl text-purple-500" />
              </div>
              <div className="absolute top-10 left-1/2 transform -translate-x-1/2 animate-spin-slow">
                <FaCss3Alt className="text-5xl text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
