

import React, { Component } from 'react'
import {motion} from "framer-motion";



export default function Home() {
  const main = {
    hidden: { opacity:1, x:0 },
    show: {
      opacity:1, x:0,
      transition: {
        
        staggerChildren: 1.5,

      }
    }
  }
  const container = {
    hidden: { opacity:1, x:0 },
    show: {
      opacity:1, x:0,
      transition: {
        
        staggerChildren: 0.5,
        type:"spring"
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0, x:50 },
    show: { opacity: 1, x:0 }
  }
  return (
    <motion.div 
    className='filter-home'
    variants={main}
    initial="hidden"
    animate="show"

    >

       <motion.div className="home">
       <motion.ul variants={container}   >
            <motion.li variants={item} transition={{type:"spring", stiffness:100}}><div className="profile" onClick={()=> {window.location.pathname="/profile" }}>
                <div className="profile-box">
                    <img src={require("./profile-icon.png")} alt="" />
                </div>
                <p><span>Profile</span></p>
              </div></motion.li >
            <motion.li variants={item}transition={{type:"spring", stiffness:100}}><div className="works" onClick={()=> {window.location.pathname="/works" }}>
            <div className="work-box">
                    <img src={require("./works-icon.png")} alt="" />
                </div>
                <p><span>Works</span></p>
              
          </div></motion.li >
          <motion.li variants={item} transition={{type:"spring", stiffness:100}}><div className="shop" onClick={()=> {window.location.pathname="/shop" }}>
            <div className="shop-box">
                    <img src={require("./shop-icon.png")} alt="" />
                </div>
                <p><span>shop</span></p>
              
          </div></motion.li >
        </motion.ul>
        <motion.ul variants={container}   >
            <motion.li variants={item} transition={{type:"spring", stiffness:100}}><div className="contact" onClick={()=> {window.location.pathname="/contact" }}>
                <div className="contact-box">
                    <img src={require("./contact-icon.png")} alt="" />
                </div>
                <p><span>Contact</span></p>
              </div></motion.li >
            <motion.li variants={item } transition={{type:"spring", stiffness:100}}><div className="pin"onClick={()=> {window.location.pathname="/pin" }}>
            <div className="pin-box">
                    <img src={require("./pinup-icon.png")} alt="" />
                </div>
                <p><span>Pin Ups</span></p>
              
          </div></motion.li>
          <motion.li variants={item} transition={{type:"spring" , stiffness:100}}><div className="tool"onClick={()=> {window.location.pathname="/tools" }}>
            <div className="tool-box">
                    <img src={require("./tools-icon.png")} alt="" />
                </div>
                <p><span>Tools</span></p>
              
          </div></motion.li >
        </motion.ul>
       </motion.div>
       <div className="back">
          <img className='gr2' src={require("./GR.png")} alt="" />
          <img className='name' src={require("./name.png")}alt="" />
          <p className='cr'><span>@2022 Bishwa</span></p>
          </div>

    </motion.div>
  )
}
