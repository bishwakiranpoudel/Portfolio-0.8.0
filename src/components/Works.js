import React, { Component } from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
export default class Works extends Component {
  myFunction = () => {
    const element = document.getElementById("like-btn1");
    element.classList.toggle("like");
  };
  myFunction2 = () => {
    const element = document.getElementById("like-btn2");
    element.classList.toggle("like");
  };
  myFunction3 = () => {
    const element = document.getElementById("like-btn3");
    element.classList.toggle("like");
  };
  myFunction4 = () => {
    const element = document.getElementById("like-btn4");
    element.classList.toggle("like");
  };
  myFunction5 = () => {
    const element = document.getElementById("like-btn5");
    element.classList.toggle("like");
  };
  myFunction6 = () => {
    const element = document.getElementById("like-btn6");
    element.classList.toggle("like");
  };
  myFunction7 = () => {
    const element = document.getElementById("like-btn7");
    element.classList.toggle("like");
  };
  myFunction8 = () => {
    const element = document.getElementById("like-btn8");
    element.classList.toggle("like");
  };
  render() {

    return (
      <motion.div class="work-page">
        <motion.div initial={{ display: 'block', zIndex: 1000 }} animate={{
          zIndex: 0, y: 0, transitionEnd: {
            display: "none",
          },
        }} transition={{ duration: 1 }}>
          <div className="works" >
            <motion.div className="work-box" initial={{ scale: 1, x: -80 }} animate={{ scale: 8, x: 10, y: 200 }} transition={{ duration: 0.5 }}>
              <motion.img src={require("../static/works-icon-min.webp")} alt="" animate={{ scale: 0.1, x: 18 }} transition={{ duration: 0.5 }} />
            </motion.div>


          </div>
        </motion.div>
        <motion.div initial={{ display: "none", opacity: 0 }} animate={{
          opacity: 1, transitionEnd: {
            display: "block",
          },
        }} transition={{ duration: 1 }}>
          <div class="top-work">
            <Link to={"/home"}><img className="workbck" src={require("../static/back-min.webp")} alt="" /></Link>
            <div class="star"><img src={require("../static/works-icon-min.webp")} alt="" /></div>

          </div>
          <div class="works-list">
            <div class="work-cotainer">
              <div class="divider"></div>
              <div class="name-project">LinkBinary</div>
              <div class="divider"></div>
              <div class="image-project"><img src={require("../static/Linkbinary.webp")} alt="" /></div>
              <div class="divider"></div>
              <div class="unlike" id='like-btn2' onClick={this.myFunction2}><img src={require("../static/like-min.webp")} alt="" /></div>
              <div class="description-project">Co-Founded a software company based in Birtamode, Nepal and currently assuming the position of CTO and all the responsibilities it brings</div>
              {/* <div className="visit-box"><div class="visit-project">visit</div></div> */}
              <br />
            </div>
            <div class="work-cotainer">
              <div class="divider"></div>
              <div class="name-project">Batuwa</div>
              <div class="divider"></div>
              <div class="image-project"><img src={require("../static/bats-min.webp")} alt="" /></div>
              <div class="divider"></div>
              <div class="unlike" id='like-btn1' onClick={this.myFunction}><img src={require("../static/like-min.webp")} alt="" /></div>
              <div class="description-project">E-commerce app comissioned to LinkBinary</div>
              {/* <div className="visit-box"><div class="visit-project">visit</div></div> */}
              <br />
            </div>

            <div class="work-cotainer">
              <div class="divider"></div>
              <div class="name-project">Ghinalagdo</div>
              <div class="divider"></div>
              <div class="image-project"><img src={require("../static/ghinlagdo.webp")} alt="" /></div>
              <div class="divider"></div>
              <div class="unlike" id='like-btn3' onClick={this.myFunction3}><img src={require("../static/like-min.webp")} alt="" /></div>
              <div class="description-project">Clothing brand in the making</div>
              {/* <div className="visit-box"><div class="visit-project">visit</div></div> */}
              <br />
            </div>
            <div class="work-cotainer">
              <div class="divider"></div>
              <div class="name-project">DhanLaxmi Jewellery</div>
              <div class="divider"></div>
              <div class="image-project"><img src={require("../static/dhanlaxmi-min.webp")} alt="" /></div>
              <div class="divider"></div>
              <div class="unlike" id='like-btn4' onClick={this.myFunction4}><img src={require("../static/like-min.webp")} alt="" /></div>
              <div class="description-project">A simple catelog site.</div>
              {/* <div className="visit-box"><div class="visit-project">visit</div></div> */}
              <br />
            </div>
            <div class="work-cotainer">
              <div class="divider"></div>
              <div class="name-project">Binary EHR</div>
              <div class="divider"></div>
              <div class="image-project"><img src={require("../static/Linkbinary.webp")} alt="" /></div>
              <div class="divider"></div>
              <div class="unlike" id='like-btn5' onClick={this.myFunction5}><img src={require("../static/like-min.webp")} alt="" /></div>
              <div class="description-project">Electronic Health record system.</div>
              {/* <div className="visit-box"><div class="visit-project">visit</div></div> */}
              <br />
            </div>
            <div class="work-cotainer">
              <div class="divider"></div>
              <div class="name-project">Binary HRM</div>
              <div class="divider"></div>
              <div class="image-project"><img src={require("../static/Linkbinary.webp")} alt="" /></div>
              <div class="divider"></div>
              <div class="unlike" id='like-btn6' onClick={this.myFunction6}><img src={require("../static/like-min.webp")} alt="" /></div>
              <div class="description-project">Human Reasource management Software.</div>
              {/* <div className="visit-box"><div class="visit-project">visit</div></div> */}
              <br />
            </div>
            <div class="work-cotainer">
              <div class="divider"></div>
              <div class="name-project">Binary Inventory</div>
              <div class="divider"></div>
              <div class="image-project"><img src={require("../static/Linkbinary.webp")} alt="" /></div>
              <div class="divider"></div>
              <div class="unlike" id='like-btn7' onClick={this.myFunction7}><img src={require("../static/like-min.webp")} alt="" /></div>
              <div class="description-project">Inventory management software.</div>
              {/* <div className="visit-box"><div class="visit-project">visit</div></div> */}
              <br />
            </div>
            <div class="work-cotainer">
              <div class="divider"></div>
              <div class="name-project">Euro Asia Human Reasource</div>
              <div class="divider"></div>
              <div class="image-project"><img src={require("../static/bg-min.webp")} alt="" /></div>
              <div class="divider"></div>
              <div class="unlike" id='like-btn8' onClick={this.myFunction8}><img src={require("../static/like-min.webp")} alt="" /></div>
              <div class="description-project">Mid-Teir catelog site.</div> 
              {/* <div className="visit-box"><div class="visit-project">visit</div></div> */}
              <br />
            </div>


          </div></motion.div></motion.div>
    )
  }
}
