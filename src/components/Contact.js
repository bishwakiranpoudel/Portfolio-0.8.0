import React, { Component } from 'react'
import { motion } from 'framer-motion'

export default class Contact extends Component {
  render() {
    return (
      <motion.div className="contact-page">
         <motion.div initial={{display:'block',zIndex:1000}} animate={{zIndex:0,y:0,transitionEnd: {
            display: "none",
          },}} transition={{duration:1}}>
            <div className="contact" >
            <motion.div className="contact-box" initial={{scale:1,x:-100 }} animate={{scale:8, x:10,y:200}}transition={{duration:0.5}}>
              <motion.img src={require("./contact-icon.png")} alt="" animate={{scale:0.1, x:17}}transition={{duration:0.5}} />
            </motion.div>
            

          </div>
            </motion.div>
            <motion.div initial={{display:"none"}} animate={{opacity:1,transitionEnd: {
            display: "block",
          },}} transition={{duration:1}}>
          <motion.div>
          <div className="contact-top">
              <div className="oval"><div className="back-contact"><img  src={require("./back.png")} alt="" onClick={()=> {window.location.pathname="/home" }} /></div><div className="dance-contact"><img src={require("./contact-icon.png")} alt="" /></div></div>
          </div>
          <div className="contact-body">
          <form>
          <div className="divider"></div>
          <div className="input">from: <input type="text" name="from"  /></div>
          <div className="divider"></div>
          <div className="input">email: <input type="email" name="email"  /></div>
          <div className="divider"></div>
          <div className="textarea">message: <textarea name="message"  ></textarea></div>
          <div className="send-btn">
              <button type="submit"><img src={require("./send.png")} alt="" /></button>
          </div>
          </form>
          </div>
          </motion.div></motion.div>
      </motion.div>
    )
  }
}
