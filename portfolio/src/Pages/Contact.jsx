import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm('service_hcy88ct', 'template_0m9fiqb', form.current, 'AdsYXH2qzwUOGFjBt')
      .then(
        (result) => {
          alert('Message sent successfully!');
          console.log('SUCCESS!', result.status, result.text);
          e.target.reset(); // Clear the form on success
        },
        (error) => {
          alert('Failed to send the message. Please try again later.');
          console.log('FAILED...', error);
        }
      );
  };
  

  return (
    <div className=" text-white p-10 rounded-lg max-w-md mx-auto mt-10 shadow-lg">
      <div className="mb-5">
        <h1 className="text-2xl font-bold mb-3">Contact Me</h1>
        <p>Submit the form below to get in touch with me</p>
      </div>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <label className="font-medium">Name</label>
        <input
          type="text"
          name="user_name"
          className="p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
        />

        <label className="font-medium">Email</label>
        <input
          type="email"
          name="from_name"
          className="p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
        />

        <label className="font-medium">Message</label>
        <textarea
          name="message"
          className="p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
        />

        <input
          type="submit"
          value="Send"
          className="bg-blue-500 text-white p-2 rounded cursor-pointer hover:bg-blue-600"
        />
      </form>
    </div>
  );
};

export default Contact;
