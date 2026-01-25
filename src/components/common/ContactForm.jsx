import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { slideFromBelow } from "../../animations/aboutAnimations/slideFromBelow";
import { useGSAP } from "@gsap/react";

const ContactForm = () => {
  const formRef = useRef(null);
  const contRef = useRef(null);

  useGSAP(() => {
    slideFromBelow(contRef.current);
  });

  const sendEmail = () => {
    emailjs
      .sendForm("Joyboy_3000", "Joyboy_template", formRef.current, {
        publicKey: "FCWqf7TIq16l7zhhk",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    sendEmail();
    reset();
    alert("Message sent successfully!");
  };

  return (
    <div
      ref={contRef}
      className="form flex flex-col  p-4 text-white bg-transpart
      shadow-[0_0_20px_5px_rgba(255,255,255,1)]
      z-20 rounded-xl 
      sm:w-[80%]
      w-full
      xl:w-[50%]
      
       sm:h-[90%]
      px-4 top-[5%]"
    >
      <div className="text-xl font-mono p-4">GET IN TOUCH</div>
      <h3 className="p-4 font-bold text-5xl">Contact Me.</h3>

      <div className="px-2 pb-2 w-full">
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-medium">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              className="w-full p-3 text-gray-800 bg-white rounded-md"
              placeholder="Ryuk yagami"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="mt-1 text-sm bg-white text-red-600 px-2 py-1 rounded">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              className="w-full p-3 text-gray-800 bg-white rounded-md"
              placeholder="example@email.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="mt-1 text-sm bg-white text-red-600 px-2 py-1 rounded">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 font-medium">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-3 text-gray-800 bg-white rounded-md"
              placeholder="Type your message here..."
              {...register("message", {
                required: "Message is required",
              })}
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-sm bg-white text-red-600 px-2 py-1 rounded">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="py-3 px-6 bg-white text-gray-900 font-bold rounded-md hover:bg-gray-100 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
