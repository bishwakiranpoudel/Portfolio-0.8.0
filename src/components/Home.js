

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

        staggerChildren: 0.6,

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

        staggerChildren: 0.2,
        type: "spring"
      }
    }
  }

  const item = {
    out:{
      opacity:1
    },
    hidden: { opacity: 0, x: 20 },
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
              <div className="profile-box" >
              <img src={require("./profile-icon.png")} />
            </div>
            </div>
            <p><span>Profile</span></p>

          </div></Link></motion.li >
          <motion.li variants={item} transition={{ type: "spring", stiffness: 100 }} ><Link to="/works"><div className="works" >
            <div className="work-box">
              <div className="work-box"  >
              <img src={require("./works-icon.png")} alt=""  />
            </div>
            </div>
            <p><span>Works</span></p>

          </div></Link></motion.li >
          <motion.li variants={item} transition={{ type: "spring", stiffness: 100 }}><Link to="/shop"><div className="shop" >
            <div className="shop-box">
              <img src={require("./shop-icon.png")} alt="" />
            </div>
            <p><span>Shop</span></p>

          </div></Link></motion.li >
        </motion.ul>
        <motion.ul variants={container}   >
          <motion.li variants={item} transition={{ type: "spring", stiffness: 100 }}><Link to="/contact"><div className="contact" >
            <div className="contact-box">
              <img src={require("./contact-icon.png")} alt="" />
            </div>
            <p><span>Contact</span></p>
          </div></Link></motion.li >
          <motion.li variants={item} transition={{ type: "spring", stiffness: 100 }}><Link to="/pin"><div className="pin" >
            <div className="pin-box">
              <img src={require("./pinup-icon.png")} alt="" />
            </div>
            <p><span>Pin Ups</span></p>

          </div></Link></motion.li>
          <motion.li variants={item} transition={{ type: "spring", stiffness: 100 }}><Link to="/tools"><div className="tool" >
            <div className="tool-box">
              <img src={require("./tools-icon.png")} alt="" />
            </div>
            <p><span>Tools</span></p>

          </div></Link></motion.li >
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
