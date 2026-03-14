import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Button from "../Button";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { contactDetail } from "../../constant/constant";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const sendEmail = (data) => {
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
          toast.success("Message sent successfully! ✨");
          reset();
        },
        (error) => {
          setLoading(false);
          toast.error("Something went wrong, please try again.");
        }
      );
  };

  const ContactCard = ({ icon: Icon, title, value, href }) => (
    <motion.div
      whileHover={{ y: -5 }}
      className="flex items-center p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700/50 rounded-2xl w-full gap-4 transition-all duration-300"
    >
      <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-xl text-primary">
        <Icon fontSize="medium" />
      </div>
      <div className="flex flex-col">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          {title}
        </span>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-secondary dark:text-lightwhite hover:text-primary transition-colors"
          >
            {value}
          </a>
        ) : (
          <span className="text-sm font-semibold text-secondary dark:text-lightwhite">
            {value}
          </span>
        )}
      </div>
    </motion.div>
  );

  return (
    <section className="flex flex-col py-20 justify-center items-center px-4 md:px-20 lg:px-40 xl:px-64 transition-all duration-1000">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-center items-center mb-16"
      >
        <h2 className="text-3xl font-extrabold text-secondary dark:text-lightwhite mb-2 max-md:text-2xl">
          Contact Me
        </h2>
        <p className="text-sm font-semibold text-primary uppercase tracking-widest">
          Get in touch
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-12">
        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 w-full lg:w-1/3"
        >
          <ContactCard
            icon={CallIcon}
            title="Call Me"
            value={contactDetail.phone}
            href={`tel:${contactDetail.phone}`}
          />
          <ContactCard
            icon={EmailIcon}
            title="Email Me"
            value={contactDetail.email}
            href={`mailto:${contactDetail.email}`}
          />
          <ContactCard
            icon={LocationOnIcon}
            title="Location"
            value={contactDetail.location}
            href="https://maps.app.goo.gl/wxgbiVHk3qBue9HG9"
          />
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 bg-slate-50 dark:bg-slate-800/20 p-8 rounded-3xl border border-slate-100 dark:border-slate-700/50 backdrop-blur-sm"
        >
          <form
            ref={form}
            onSubmit={handleSubmit(sendEmail)}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
                Name
              </label>
              <input
                placeholder="Enter your name"
                {...register("from_name", { required: "Name is required" })}
                className="outline-none bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary transition-all duration-300 h-12 px-4 rounded-xl text-slate-700 dark:text-slate-200 shadow-sm"
              />
              {errors.from_name && (
                <span className="text-red-500 text-xs ml-1 font-medium">
                  {errors.from_name.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
                Email
              </label>
              <input
                placeholder="Enter your email"
                {...register("from_mail", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className="outline-none bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary transition-all duration-300 h-12 px-4 rounded-xl text-slate-700 dark:text-slate-200 shadow-sm"
              />
              {errors.from_mail && (
                <span className="text-red-500 text-xs ml-1 font-medium">
                  {errors.from_mail.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
                Message
              </label>
              <textarea
                placeholder="Type your message here..."
                {...register("message", { required: "Message is required" })}
                className="outline-none bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary transition-all duration-300 h-40 px-4 py-3 rounded-xl text-slate-700 dark:text-slate-200 shadow-sm resize-none"
              />
              {errors.message && (
                <span className="text-red-500 text-xs ml-1 font-medium">
                  {errors.message.message}
                </span>
              )}
            </div>

            <div className="md:col-span-2 flex justify-end">
              <Button
                type="submit"
                className="rounded-xl h-12 px-10 shadow-lg hover:shadow-primary/20 transition-all duration-300 active:scale-95 w-full md:w-fit"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
      <ToastContainer position="bottom-right" />
    </section>
  );
};

export default Contact;
