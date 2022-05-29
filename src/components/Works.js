import React, { Component } from 'react'
import { motion } from 'framer-motion';

export default class Works extends Component {
    myFunction= () => {
        const element = document.getElementById("like-btn1");
        element.classList.toggle("like");
      };
      myFunction2= () => {
        const element = document.getElementById("like-btn2");
        element.classList.toggle("like");
      };
      myFunction3= () => {
        const element = document.getElementById("like-btn3");
        element.classList.toggle("like");
      };
      myFunction4= () => {
        const element = document.getElementById("like-btn4");
        element.classList.toggle("like");
      };
  render() {
    
    return (
        <motion.div class="work-page">
           <motion.div initial={{display:'block',zIndex:1000}} animate={{zIndex:0,y:0,transitionEnd: {
            display: "none",
          },}} transition={{duration:1}}>
            <div className="works" >
            <motion.div className="work-box" initial={{scale:1,x:-80 }} animate={{scale:8, x:10,y:200}}transition={{duration:0.5}}>
              <motion.img src={require("./works-icon.png")} alt="" animate={{scale:0.1, x:18}}transition={{duration:0.5}} />
            </motion.div>
            

          </div>
            </motion.div>
            <motion.div initial={{display:"none",opacity:0}} animate={{opacity:1,transitionEnd: {
            display: "block",
          },}} transition={{duration:1}}>
        <div class="top-work">
        <img className="workbck" src={require("./back.png")} alt="" onClick={()=> {window.location.pathname="/home" }} />
            <div class="star"><img src={require("./works-icon.png")} alt="" /></div>
            
        </div>
        <div class="works-list">
            <div class="work-cotainer">
                <div class="divider"></div>
                <div class="name-project">Batuwa</div>
                <div class="divider"></div>
                <div class="image-project"><img src={require("../bats.png")} alt="" /></div>
                <div class="divider"></div>
                <div class="unlike" id='like-btn1' onClick={this.myFunction}><img src={require("../like.png")} alt="" /></div>
                <div class="description-project">E-commerce app comissioned to LinkBinary</div>
                <div className="visit-box"><div class="visit-project">visit</div></div>
            </div>
            <div class="work-cotainer">
                <div class="divider"></div>
                <div class="name-project">Batuwa</div>
                <div class="divider"></div>
                <div class="image-project"><img src={require("../bg.png")} alt="" /></div>
                <div class="divider"></div>
                <div class="unlike" id='like-btn2' onClick={this.myFunction2}><img src={require("../like.png")} alt="" /></div>
                <div class="description-project">E-commerce app comissioned to LinkBinary</div>
                <div className="visit-box"><div class="visit-project">visit</div></div>
            </div>
            <div class="work-cotainer">
                <div class="divider"></div>
                <div class="name-project">Batuwa</div>
                <div class="divider"></div>
                <div class="image-project"><img src={require("../bg.png")} alt="" /></div>
                <div class="divider"></div>
                <div class="unlike" id='like-btn3' onClick={this.myFunction3}><img src={require("../like.png")} alt="" /></div>
                <div class="description-project">E-commerce app comissioned to LinkBinary</div>
                <div className="visit-box"><div class="visit-project">visit</div></div>
            </div>
            <div class="work-cotainer">
                <div class="divider"></div>
                <div class="name-project">Batuwa</div>
                <div class="divider"></div>
                <div class="image-project"><img src={require("../bg.png")} alt="" /></div>
                <div class="divider"></div>
                <div class="unlike" id='like-btn4' onClick={this.myFunction4}><img src={require("../like.png")} alt="" /></div>
                <div class="description-project">E-commerce app comissioned to LinkBinary</div>
                <div className="visit-box"><div class="visit-project">visit</div></div>
            </div>

            
        </div></motion.div></motion.div>
    )
  }
}
