import React, { useState } from "react";
import contact from './contact.svg'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission, e.g., send the data to a server

    // For now, let's just log the form data
    console.log("Form submitted:", formData);
  };

  return (
    <div id="contact" className="text-white sm:py-3 py-20 mb-10">
      <div className="text-white xl:ml-60 md:ml-[15vw] md:mr-8  md:mt-20 mt-[10vh] md:pb-[5vh]">
        <div className="lg:pt-5 pt-10 pl-10 lg:text-[25px] text-[20px]">
          MY WORK
        </div>
        <div className="heading pl-10 lg:text-[70px] md:text-[55px] text-[45px] font-[600]">
          CONTACT ME.
        </div>
        <div className="md:flex justify-between px-12 py-5">
          <img src={contact} alt="contact" className="w-1/2 md:block hidden pt-5"/>
          <form onSubmit={handleSubmit} className=" my-8 flex flex-col md:items-end items-center text-black">
          <div className="mb-4 md:w-[25vw] w-full">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full"
            />
          </div>
          <div className="mb-4  md:w-[25vw] w-full">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full "
            />
          </div>
          <div className="mb-4  md:w-[25vw] w-full">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="mt-1 p-2 w-full"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-3"
            >
              Let's connect
            </button>
          </div>
        </form>
        </div>
      
      </div>
    </div>
  );
};

export default Contact;