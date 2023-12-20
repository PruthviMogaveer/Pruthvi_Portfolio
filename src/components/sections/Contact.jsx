import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Button from "../Button";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { contactDetail } from "../../constant/constant";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    setLoading(true);
    emailjs
      .sendForm(
        "service_pou5xe2",
        "template_wah5goh",
        form.current,
        "jxp9-W7ulF7oPB9sX"
      )
      .then(
        (result) => {
          setLoading(false);
          toast.info("Message sent succesfully!");
          reset();
        },
        (error) => {
          setLoading(false);
          toast.error("Something went wrong, messege not sent!");
          reset();
        }
      );
  };

  return (
    <div className="flex flex-col py-2  justify-center items-center px-80 max-lg:px-0 max-md:px-20 transition-all duration-1000">
      <div className="flex flex-col justify-center items-center">
        <p className="text-2xl font-bold text-secondary dark:text-lightwhite">
          Contact Me
        </p>
        <h4 className="text-sm font-medium text-slate-700 dark:text-slate-400">
          Get in touch
        </h4>
      </div>
      <div className="flex my-16 md:space-x-12 max-md:flex-col-reverse max-md:items-center">
        <div className="flex flex-col justify-center space-y-4 max-md:mt-16">
          <div className="flex space-x-4">
            <CallIcon className="text-slate-800 dark:text-slate-100" />
            <span className="font-semibold text-slate-800 dark:text-slate-100">
              {contactDetail.phone}
            </span>
          </div>
          <div className="flex space-x-4">
            <EmailIcon className="text-slate-800 dark:text-slate-100" />
            <span className="font-semibold text-slate-800 dark:text-slate-100">
              {contactDetail.email}
            </span>
          </div>
          <div className="flex space-x-4">
            <LocationOnIcon className="text-slate-800 dark:text-slate-100" />
            <a
              href="https://maps.app.goo.gl/wxgbiVHk3qBue9HG9"
              className="font-semibold text-slate-800 dark:text-slate-100"
            >
              {contactDetail.location}
            </a>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={handleSubmit(sendEmail)}
          className="flex flex-col space-y-4"
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
            {loading ? "Submiting...." : "Submit"}
          </Button>
          <ToastContainer className="max-sm:w-72 max-sm:fixed max-sm:top-5" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
