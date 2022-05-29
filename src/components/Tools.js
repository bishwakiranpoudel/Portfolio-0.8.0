import React, { Component } from 'react'
import { motion } from 'framer-motion'

export default class Tools extends Component {
  render() {
    return (
      <motion.div className="tools-page">
          <motion.div initial={{display:'block',zIndex:1000}} animate={{zIndex:0,y:0,transitionEnd: {
            display: "none",
          },}} transition={{duration:1}}>
            <div className="tool" >
            <motion.div className="tool-box" initial={{scale:1,x:-100 }} animate={{scale:8, x:10,y:200}}transition={{duration:0.5}}>
              <motion.img src={require("./tools-icon.png")} alt="" animate={{scale:0.1, x:17}}transition={{duration:0.5}} />
            </motion.div>
            

          </div>
            </motion.div>
            <motion.div initial={{display:"none"}} animate={{opacity:1,transitionEnd: {
            display: "block",
          },}} transition={{duration:1}}>
          <div className="tools-header"><div className="back-contact"><img  src={require("./back.png")} alt="" onClick={()=> {window.location.pathname="/home" }} /></div></div>
          <div className="tools-body"></div>
          </motion.div>
      </motion.div>
    )
  }
}
