import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Button from "../Button";

const Contact = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_pou5xe2",
        "template_wah5goh",
        form.current,
        "jxp9-W7ulF7oPB9sX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex flex-col py-8 justify-center items-center px-80 max-lg:px-40 max-md:px-20 transition-all duration-1000">
      <div className="flex flex-col justify-center items-center">
        <p className="text-2xl font-bold text-secondary dark:text-lightwhite">
          Contact Me
        </p>
        <h4 className="text-sm font-medium text-slate-700 dark:text-slate-400">
          Get in touch
        </h4>
      </div>
      <form
        ref={form}
        onSubmit={handleSubmit(sendEmail)}
        className="my-10 flex flex-col space-y-4"
      >
        <div className="relative flex flex-col">
          <input
            placeholder="Enter your name here..."
            {...register("from_name", { required: "Name is required" })}
            className="outline-none bg-lightwhite first-letter:capitalize h-12 w-72 px-4 rounded-[0.15rem] text-slate-700"
          />
          {errors.from_name && (
            <span className="relative top-1 text-red-500 text-sm left-1">
              {errors.from_name.message}
            </span>
          )}
        </div>
        <div className="relative flex flex-col">
          <input
            placeholder="Enter your email here..."
            {...register("from_mail", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className="outline-none bg-lightwhite placeholder:first-letter:uppercase h-12 w-72 px-4 rounded-[0.15rem] text-slate-700"
          />
          {errors.from_mail && (
            <span className="relative top-1 text-red-500 text-sm left-1">
              {errors.from_mail.message}
            </span>
          )}
        </div>
        <div className="relative flex flex-col">
          <textarea
            placeholder="Type your message here."
            {...register("message", { required: "Message is required" })}
            className="outline-none bg-lightwhite placeholder:first-letter:uppercase h-20 w-72 px-4 py-2 rounded-[0.15rem] text-slate-700"
          />
          {errors.message && (
            <span className="relative top-1 text-red-500 text-sm left-1">
              {errors.message.message}
            </span>
          )}
        </div>
        <Button type="submit" className="rounded-[3px]">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Contact;
