import React, { Component } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default class Shop extends Component {
  render() {
    return (
      <motion.div className="shop-page">
          <motion.div initial={{display:'block',zIndex:1000}} animate={{zIndex:0,y:0,transitionEnd: {
            display: "none",
          },}} transition={{duration:1}}>
            <div className="shop" >
            <motion.div className="shop-box" initial={{scale:1,x:-100 }} animate={{scale:8, x:10,y:200}}transition={{duration:0.5}}>
              <motion.img src={require("../static/shop-icon-min.webp")} alt="" animate={{scale:0.1, x:17}}transition={{duration:0.5}} />
            </motion.div>
            

          </div>
            </motion.div>
            <motion.div initial={{display:"none"}} animate={{opacity:1,transitionEnd: {
            display: "block",
          },}} transition={{duration:1}}>
          <div className="shop-header"><div className="back-shop"><Link to={"/home"}><img  src={require("../static/back-min.webp")} alt="" /></Link></div></div>
          <div className="shop-body"></div>
          </motion.div>
      </motion.div>
    )
  }
}
