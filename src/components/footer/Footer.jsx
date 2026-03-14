import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "../";
import { footerItems, contactDetail } from "../../constant/constant";
import useWindowWidth from "../../hooks/useWindowWidth";
import { motion } from "framer-motion";

const Footer = () => {
  const windowWidth = useWindowWidth()
  const [offset, setOffset] = useState() 
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  
  useEffect(() => {
    setTimeout(() => {if(windowWidth > 768){
      setOffset(-100)
    }else{
      setOffset(0)
    }},2000)
    
  }, [windowWidth])

  const socialLinks = [
    {
      icon: faGithub,
      href: "https://github.com/PruthviMogaveer",
      label: "GitHub"
    },
    {
      icon: faLinkedin,
      href: "https://www.linkedin.com/in/pruthvi-mogaveer-52b47a205/",
      label: "LinkedIn"
    },
    {
      icon: faInstagram,
      href: "https://www.instagram.com/pruthvi__18/",
      label: "Instagram"
    }
  ];

  return (
    <footer className="relative w-full bg-gradient-to-br from-primary to-purple-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 px-16 py-16 max-lg:px-8 max-md:px-8 max-sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 max-lg:gap-x-3 max-lg:gap-y-12 max-md:gap-y-16">
          
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 text-center max-md:text-center"
          >
            <Link 
              to="home" 
              smooth={true} 
              offset={-100} 
              duration={500}
              className="inline-block"
            >
              <h2 className="text-2xl font-bold text-white hover:text-purple-200 transition-colors duration-300 cursor-pointer">
                Pruthvi Mogaveer
              </h2>
            </Link>
            <p className="text-purple-100 text-sm leading-relaxed">
              Passionate Software Engineer crafting innovative digital experiences with modern technologies.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3 pt-2 justify-center max-md:justify-center">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <FontAwesomeIcon icon={social.icon} className="text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4 text-center max-md:text-center"
          >
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {footerItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.id}
                    smooth={true}
                    offset={offset}
                    duration={500}
                    className="text-purple-100 hover:text-white transition-all duration-300 relative group inline-block"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4 text-center max-md:text-center"
          >
            <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-purple-100 justify-center max-md:justify-center">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faEnvelope} className="text-sm" />
                </div>
                <a 
                  href={`mailto:${contactDetail.email}`}
                  className="hover:text-white transition-colors duration-300 text-sm"
                >
                  {contactDetail.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-purple-100 justify-center max-md:justify-center">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faPhone} className="text-sm" />
                </div>
                <a 
                  href={`tel:${contactDetail.phone}`}
                  className="hover:text-white transition-colors duration-300 text-sm"
                >
                  {contactDetail.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-purple-100 justify-center max-md:justify-center">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faLocationDot} className="text-sm" />
                </div>
                <span className="text-sm">
                  {contactDetail.location}
                </span>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4 text-center max-md:text-center"
          >
            <h3 className="text-lg font-semibold text-white">Let's Connect</h3>
            <p className="text-purple-100 text-sm mb-6">
              Have a project in mind? I'd love to hear about it!
            </p>
            <Link
              to="contact-me"
              smooth={true}
              offset={-100}
              duration={500}
              className="block"
            >
              <Button
                className="w-full bg-white text-primary hover:bg-purple-50 hover:scale-105 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl rounded-xl px-6 py-3"
              >
                Get In Touch
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-white/20 mt-12 pt-12 pb-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-center max-md:text-center">
            <p className="text-purple-100 text-sm max-md:text-base">
              © {currentYear} Pruthvi Mogaveer. All rights reserved.
            </p>
            <p className="text-white text-sm max-md:text-base md:font-bold">
              Built with ❤️ and lots of ☕
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
