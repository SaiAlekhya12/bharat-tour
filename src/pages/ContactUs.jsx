import React, { useRef } from "react";

export const ContactUs = () => {
  const name = useRef("");
  const email = useRef("");
  const phone = useRef("");
  const subject = useRef("");
  const message = useRef("");

  const formData = new FormData();

  const onSubmitHandler = (ev) => {
    ev.preventDefault();
    formData.set("name", name.current.value);
    formData.set("email", email.current.value);
    formData.set("phone", phone.current.value);
    formData.set("subject", subject.current.value);
    formData.set("message", message.current.value);
    console.log(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold text-center mt-5 mb-5">Contact Us</h1>

      <div className="flex flex-col w-full max-w-lg mx-auto">
        <h2 className="text-lg font-medium text-left mb-5">Contact Form</h2>
        <form
          className="flex flex-col items-center justify-center w-full"
          onSubmit={onSubmitHandler}
        >
          <label htmlFor="name" className="text-left w-full pb-1">
            Name:
          </label>
          <input
            type="text"
            ref={name}
            id="name"
            name="name"
            className="w-full border-gray-300 border-2 mb-3 focus:outline-none p-2 rounded-lg"
            required
          />

          <label htmlFor="email" className="text-left w-full pb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            ref={email}
            className="w-full border-gray-300 border-2 mb-3 focus:outline-none p-2 rounded-lg"
            name="email"
            required
          />

          <label htmlFor="phone" className="text-left w-full pb-1">
            Phone:
          </label>
          <input
            type="tel"
            ref={phone}
            className="w-full border-gray-300 border-2 mb-3 focus:outline-none p-2 rounded-lg"
            id="phone"
            name="phone"
            required
          />

          <label htmlFor="subject" className="text-left w-full pb-1">
            Subject:
          </label>
          <input
            type="text"
            ref={subject}
            className="w-full border-gray-300 border-2 mb-3 focus:outline-none p-2 rounded-lg"
            id="subject"
            name="subject"
            required
          />

          <label className="text-left w-full pb-1" htmlFor="message">
            Message:
          </label>
          <textarea
            id="message"
            ref={message}
            name="message"
            className="w-full border-gray-300 border-2 mb-3 focus:outline-none p-2 rounded-lg h-28"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-green-600 text-white pt-2 pb-2 pl-3.5 pr-3.5 border-none rounded-md cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
