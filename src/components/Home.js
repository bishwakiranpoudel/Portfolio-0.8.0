

import React, { Component } from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';



export default function Home() {
  const main = {
    out:{
  
    },
    hidden: { opacity: 1, x: 0 },
    show: {
      opacity: 1, x: 0,
      transition: {

        staggerChildren: 1.5,

      }
    }
    
  }
  const container = {
    out:{
      opacity:1
    },
    hidden: { opacity: 1, x: 0 },
    show: {
      opacity: 1, x: 0,
      transition: {

        staggerChildren: 0.5,
        type: "spring"
      }
    }
  }

  const item = {
    out:{
      opacity:1
    },
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0 }
  }
  return (
    <motion.div
      className='filter-home'
      variants={main}
      initial="hidden"
      animate="show"
      exit="out"

    >

      <motion.div className="home">
        <motion.ul variants={container}   >
        <motion.li variants={item} transition={{ type: "spring", stiffness: 100 }} ><Link to="/profile"><div className="profile" >
            <div className="profile-box">
              <motion.div className="profile-box"  transition={{duration:1}}exit={{ scale: 10, zIndex:100, }}>
              <motion.img src={require("./profile-icon.png")} alt="" transition={{duration:1}} exit={{scale:0.1,x:0,y:15}} />
            </motion.div>
            </div>
            <p><span>profile</span></p>

          </div></Link></motion.li >
          <motion.li variants={item} transition={{ type: "spring", stiffness: 100 }} ><Link to="/works"><div className="works" >
            <div className="work-box">
              <motion.div className="work-box"  transition={{duration:1}}>
              <motion.img src={require("./works-icon.png")} alt="" transition={{duration:1}}  />
            </motion.div>
            </div>
            <p><span>Works</span></p>

          </div></Link></motion.li >
          <motion.li variants={item} transition={{ type: "spring", stiffness: 100 }}><div className="shop" onClick={() => { window.location.pathname = "/shop" }}>
            <div className="shop-box">
              <img src={require("./shop-icon.png")} alt="" />
            </div>
            <p><span>shop</span></p>

          </div></motion.li >
        </motion.ul>
        <motion.ul variants={container}   >
          <motion.li variants={item} transition={{ type: "spring", stiffness: 100 }}><div className="contact" onClick={() => { window.location.pathname = "/contact" }}>
            <div className="contact-box">
              <img src={require("./contact-icon.png")} alt="" />
            </div>
            <p><span>Contact</span></p>
          </div></motion.li >
          <motion.li variants={item} transition={{ type: "spring", stiffness: 100 }}><div className="pin" onClick={() => { window.location.pathname = "/pin" }}>
            <div className="pin-box">
              <img src={require("./pinup-icon.png")} alt="" />
            </div>
            <p><span>Pin Ups</span></p>

          </div></motion.li>
          <motion.li variants={item} transition={{ type: "spring", stiffness: 100 }}><div className="tool" onClick={() => { window.location.pathname = "/tools" }}>
            <div className="tool-box">
              <img src={require("./tools-icon.png")} alt="" />
            </div>
            <p><span>Tools</span></p>

          </div></motion.li >
        </motion.ul>
      </motion.div>
      <div className="back">
        <img className='gr2' src={require("./GR.png")} alt="" />
        <img className='name' src={require("./name.png")} alt="" />
        <p className='cr'><span>@2022 Bishwa</span></p>
      </div>

    </motion.div>
  )
}
