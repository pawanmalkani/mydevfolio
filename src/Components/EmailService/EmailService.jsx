import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import CustomNotify from "../CustomNotify/CustomNotify";
import { toast } from "react-toastify";
import EmailIcon from "../../Images/phone.png";
import BgImage from "../../Images/bgimg.jpg";

const EmailService = () => {
  const form = useRef();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const showNotification = (heading, body) => {
    toast.error(<CustomNotify body={body} heading={heading} />, {
      position: "bottom-right",
      autoClose: 5000,
      theme: "dark",
    });
  };

  const showSuccess = (heading, body) => {
    toast.success(<CustomNotify body={body} heading={heading} />, {
      position: "bottom-right",
      autoClose: 5000,
      theme: "dark",
    });
  };

  const validateField = (field, value) => {
    switch (field) {
      case "name":
        if (!value) return "Name is required.";
        if (!/^[a-zA-Z\s]+$/.test(value)) return "Name must contain only alphabets.";
        return "";
      case "email":
        if (!value) return "Email is required.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Invalid email format.";
        return "";
      case "number":
        if (!value) {
          return "Mobile number is required.";
        }
        for (let i = 0; i < value.length; i++) {
          const charCode = value.charCodeAt(i);
          if (charCode < 48 || charCode > 57) { // ASCII for '0' to '9'
            return "Mobile number must contain only digits.";
          }
        }
        if (value.length !== 10) {
          return "Mobile number must be of 10 digits.";
        }

        return "";
      case "message":
        if (!value) return "Message is required.";
        const wordCount = value.trim().split(/\s+/).filter(Boolean).length;
        if (wordCount > 200) return "Message cannot exceed 200 words.";
        return "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    const errorMsg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const validateAllFields = () => {
    const newErrors = {};
    for (const field in formValues) {
      const errorMsg = validateField(field, formValues[field]);
      if (errorMsg) newErrors[field] = errorMsg;
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      showNotification("Form Error", "Please correct the errors and try again.");
      return false;
    }
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateAllFields()) return;

    emailjs
      .sendForm(
        "service_vsa7bjj",
        "template_4fgmkql",
        form.current,
        "LMtXrnVevlAPuJAKh"
      )
      .then(
        () => {
          form.current.reset();
          setFormValues({ name: "", email: "", number: "", message: "" });
          showSuccess("Message Sent Successfully");
          setErrors({});
        },
        (error) => {
          showNotification("Failed to send message", "Please try again later.");
          console.error(error.text);
        }
      );
  };

  return (
    <div
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-40 z-0" />

      <div className="relative z-10 flex flex-col md:flex-row bg-white bg-opacity-90 rounded-lg shadow-lg max-w-5xl w-full overflow-hidden">
        <div className="hidden md:flex items-center justify-center w-full md:w-1/3 p-8 bg-blue-500">
          <img src={EmailIcon} alt="Email Icon" className="w-32 h-32 object-contain" />
        </div>

        <div className="w-full md:w-2/3 p-8">
          <h2 className="text-2xl font-bold mb-6 text-center md:text-left text-blue-700">Contact Me</h2>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            {/* Name */}
            <div className="flex flex-col md:flex-row md:items-start text-left md:gap-4">
              <label htmlFor="name" className="w-full md:w-1/4 font-medium mt-2">
                Name
              </label>
              <div className="w-full md:w-3/4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formValues.name}
                  onChange={handleChange}
                  className="p-2 rounded text-black w-full border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 shadow-sm"
                />
                {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col md:flex-row md:items-start text-left md:gap-4">
              <label htmlFor="email" className="w-full md:w-1/4 font-medium mt-2">
                Email
              </label>
              <div className="w-full md:w-3/4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value={formValues.email}
                  onChange={handleChange}
                  className="p-2 rounded text-black w-full border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 shadow-sm"
                />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>

            {/* Mobile */}
            <div className="flex flex-col md:flex-row md:items-start text-left md:gap-4">
              <label htmlFor="number" className="w-full md:w-1/4 font-medium mt-2">
                Mobile
              </label>
              <div className="w-full md:w-3/4">
                <input
                  type="number"
                  id="number"
                  name="number"
                  placeholder="Your Mobile No"
                  value={formValues.number}
                  onChange={handleChange}
                  className="p-2 rounded text-black w-full border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 shadow-sm"
                />
                {errors.number && <p className="text-red-600 text-sm mt-1">{errors.number}</p>}
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col md:flex-row md:items-start text-left md:gap-4">
              <label htmlFor="message" className="w-full md:w-1/4 font-medium mt-2">
                Message
              </label>
              <div className="w-full md:w-3/4">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formValues.message}
                  onChange={handleChange}
                  className="p-2 rounded text-black w-full border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 shadow-sm"
                />
                {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-start mt-2">
              <button
                type="submit"
                className="bg-blue-500 py-2 px-6 rounded hover:bg-blue-600 text-white"
              >
                Send Message
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default EmailService;
