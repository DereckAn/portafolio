import { motion } from "framer-motion";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser"; 

import { styles } from "../styles";
import  { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { linkin, github } from "../assets";

// template id : template_ygu49d9
// serviceid : service_0zr7uhi
// public_key : USa-dxzwYjriyohHM

 
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false);
  const handlerChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    })
  }

  const handlerSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send('service_0zr7uhi', 
    'template_ygu49d9', 
    {from_name: form.name,
    to_name: "Dereck",
    from_email: form.email,
    to_email:'dereck1998angeles@gmail.com',
    message: form.message}, 
    'USa-dxzwYjriyohHM').then(() => {
      setLoading(false);

      alert("Thank you so much for your time. I will get back to you soon as possible");

      setForm({
        name: "",
        email: "",
        message: "",
      })

    }, (error) => {
      setLoading(false);
      console.log(error);
      alert("Something went wrong, please try again later");
    })
    
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse 
    flex gap-10 overflow-hidden">
      <motion.div 
      variants={slideIn('left', 'tween', 0.2, 1)}
      className="flex-[0.75] bg-transparent p-8 rounded-2xl "
      style={{ 
        backdropFilter: 'blur(3px)',
        backgroundColor: 'rgba(128, 128, 128, 0.09)'
      }}>

        <p className={`${styles.sectionSubText}`}> Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

        <form ref={formRef} 
        onSubmit={handlerSubmit}
        className="mt-12 flex flex-col gap-8 ">

          <label className="flex flex-col ">
            <span className="text-white font-medium mb-4 ">Your name</span>
            <input 
            type="text"
            name="name"
            value={form.name}
            onChange={handlerChange}
            placeholder="What's your name?"
            className="py-4  px-6 
            placeholder:text-secondary text-white 
            rounded-lg outlined-none border-none font-medium"
            style={{ 
              backdropFilter: 'blur(10px)',
              backgroundColor: 'rgba(128, 128, 128, 0.2)'
            }}/>
            
          </label>

          <label className="flex flex-col ">
            <span className="text-white font-medium mb-4 ">Your Email</span>
            <input 
            type="email"
            name="email"
            value={form.email}
            onChange={handlerChange}
            placeholder="What's your email?"
            className="py-4  px-6 
            placeholder:text-secondary text-white 
            rounded-lg outlined-none border-none font-medium"
            style={{ 
              backdropFilter: 'blur(10px)',
              backgroundColor: 'rgba(128, 128, 128, 0.2)'
            }}/>
          </label>

          <label className="flex flex-col ">
            <span className="text-white font-medium mb-4 ">Your Message</span>
            <textarea 
            rows={7}
            name="message"
            value={form.message}
            onChange={handlerChange}
            placeholder="What do you want to say?"
            className="py-4  px-6 
            placeholder:text-secondary text-white 
            rounded-lg outlined-none border-none font-medium"
            style={{ 
              backdropFilter: 'blur(10px)',
              backgroundColor: 'rgba(128, 128, 128, 0.2)'
            }}/>
          </label>

          <div className=" flex justify-between ">
          <button type="submit"
          className="py-3 px-8 outline-none w-fit 
          text-white font-bold shadow-md shadow-primary rounded-xl"
          style={{ 
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(128, 128, 128, 0.2)'
          }}>
            {loading ? "Sending..." : "Send"}
          </button>

          <nav className="flex justify-evenly flex-wrap px-2 ">
            <a href="https://github.com/DereckAn"> 
              <img src={github} className="w-[50px] mr-2"></img>
            </a>
            <a href="https://www.linkedin.com/in/dereckan/"> 
              <img src={linkin} className="w-[50px]"></img>
            </a>
          </nav>
          </div>

        </form>

      </motion.div>

      <motion.div 
      variants={slideIn('right', 'tween', 0.2, 1)}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] ">


        <EarthCanvas/>
      </motion.div>

      

    </div>
  )
}

export default SectionWrapper(Contact, "contact");