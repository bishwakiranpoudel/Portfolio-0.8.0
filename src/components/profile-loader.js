import React, { Component } from 'react';
import {motion} from "framer-motion";
import { Link } from 'react-router-dom';

export default class Profileloader extends Component {
  render() {
    return (
<motion.div ><Link to="/profile"><div className="works" >
            <motion.div className="work-box" initial={{scale:1,x:-100 }} animate={{scale:8, x:10,y:200}}>
              <motion.img src={require("./works-icon.png")} alt="" animate={{scale:0.1}} />
            </motion.div>
            

          </div></Link></motion.div >
    )
  }
}
