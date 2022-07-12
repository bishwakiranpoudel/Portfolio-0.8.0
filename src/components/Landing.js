import React, { Component } from 'react'
import {motion} from "framer-motion";
import { Link } from "react-router-dom";
import useSound from 'use-sound';
import entersfx from "../static/enter.mp3"



export default function Landing() {
  const [play] = useSound(entersfx);
  const today =['sun', 'mon' ,'tue','wed', 'thurs','fri','sat'];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const date = new Date().getDate();
const month = months[new Date().getMonth()];
const day = today[new Date().getDay()];
const hour =(new Date().getHours()<10?'0':'') + new Date().getHours();
const min =  (new Date().getMinutes()<10?'0':'') + new Date().getMinutes();
  return (
    <motion.div className='landing-filter'
    initial={{opacity:1, y:0}}
    animate={{opacity:1, y:0}}
    exit={{opacity:1, y:0}}
    transition={{duration:1}}
    >
        <motion.div className="clock" initial={{opacity:1, y:0}}
    animate={{opacity:1, y:-0}}
    exit={{opacity:1, y:-600}}
    transition={{duration:1}}>
        <div className="time"> {hour} : {min}</div>
        <div className="date">{day}, {month} {date}</div>
        </motion.div>
       <div className="landing-body">
       <img className='gr' src={require("../static/GR-min.webp")} alt="" />
        <img className='name' src={require("../static/name-min.webp")}alt="" />
      <Link to="/home"> <div className="enter" onClick={play}>
       <motion.ul initial={{opacity:1, y:0}}
    animate={{opacity:1, y:0}}
    exit={{opacity:1, y:-600}}
    transition={{duration:1}}>
            <motion.li className='entr'><span>Enter</span></motion.li>
            <motion.li><div className="land"></div></motion.li>
        </motion.ul>
       </div></Link>
       </div>
    </motion.div>
  )
}
