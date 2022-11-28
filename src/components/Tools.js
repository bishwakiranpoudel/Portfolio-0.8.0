import React, { Component } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default class Tools extends Component {
  render() {
    return (
      <motion.div className="tools-page">
        <motion.div initial={{ display: 'block', zIndex: 1000 }} animate={{
          zIndex: 0, y: 0, transitionEnd: {
            display: "none",
          },
        }} transition={{ duration: 1 }}>
          <div className="tool" >
            <motion.div className="tool-box" initial={{ scale: 1, x: -100 }} animate={{ scale: 8, x: 10, y: 200 }} transition={{ duration: 0.5 }}>
              <motion.img src={require("../static/tools-icon-min.webp")} alt="" animate={{ scale: 0.1, x: 17 }} transition={{ duration: 0.5 }} />
            </motion.div>


          </div>
        </motion.div>
        <motion.div initial={{ display: "none" }} animate={{
          opacity: 1, transitionEnd: {
            display: "block",
          },
        }} transition={{ duration: 1 }}>
          <div className="tools-header"><div className="back-contact"><Link to={"/home"}><img src={require("../static/back-min.webp")} alt="" /></Link></div><svg width="401" height="151" viewBox="0 0 401 151" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <g id="Frame 2" clip-path="url(#clip0_4_176)">
              <rect width="401" height="151" fill="none" />
              <path id="Vector 1" d="M-11 107.691V110.089L-8.66069 110.617C29.4582 119.223 87.6902 129.107 138.506 130.76C163.891 131.585 187.622 130.365 206.122 125.807C224.449 121.292 238.643 113.24 243.225 99.5826C251.133 76.0138 262.592 68.4117 272.932 67.3828C283.606 66.3207 294.399 72.0818 301.211 78.0722C308.841 87.1577 321.138 100.063 333.458 109.449C339.641 114.159 345.997 118.114 351.887 120.189C357.725 122.245 363.78 122.67 368.611 119.187C374.972 114.601 380.498 116.291 386.218 118.04C387.42 118.407 388.63 118.777 389.858 119.092C391.515 119.518 393.394 119.86 395.246 119.609C397.252 119.337 399.069 118.392 400.496 116.586C401.833 114.895 402.712 112.599 403.307 109.774C403.908 106.918 404.266 103.284 404.396 98.7133L404.397 98.6708V98.6283V-6V-9H401.397H-8H-11V-6V107.691Z" fill="#3D3B39" stroke="#CBCBCB" stroke-width="6" />
              <g id="one">
                <ellipse id="Ellipse 1" cx="10.7936" cy="7.59344" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 2" cx="10.7936" cy="26.5419" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 3" cx="10.7936" cy="64.4388" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 4" cx="10.7936" cy="45.4903" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 5" cx="10.7936" cy="83.3872" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 6" cx="10.7936" cy="102.336" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 1_2" cx="55.4921" cy="7.59344" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 2_2" cx="55.4921" cy="26.5419" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 3_2" cx="55.4921" cy="64.4388" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 4_2" cx="55.4921" cy="45.4903" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 5_2" cx="55.4921" cy="83.3872" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 6_2" cx="55.4921" cy="102.336" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 1_3" cx="100.19" cy="7.59344" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 2_3" cx="100.19" cy="26.5419" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 3_3" cx="100.19" cy="64.4388" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 4_3" cx="100.19" cy="45.4903" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 5_3" cx="100.19" cy="83.3872" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 6_3" cx="100.19" cy="102.336" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 1_4" cx="144.889" cy="7.59344" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 2_4" cx="144.889" cy="26.5419" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 3_4" cx="144.889" cy="64.4388" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 4_4" cx="144.889" cy="45.4903" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 5_4" cx="144.889" cy="83.3872" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 6_4" cx="144.889" cy="102.336" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 1_5" cx="189.587" cy="7.59344" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 2_5" cx="189.587" cy="26.5419" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 3_5" cx="189.587" cy="64.4388" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 4_5" cx="189.587" cy="45.4903" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 5_5" cx="189.587" cy="83.3872" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 6_5" cx="189.587" cy="102.336" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 1_6" cx="234.286" cy="7.59344" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 2_6" cx="234.286" cy="26.5419" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 3_6" cx="234.286" cy="64.4388" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 4_6" cx="234.286" cy="45.4903" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 5_6" cx="234.286" cy="83.3872" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 6_6" cx="234" cy="102" rx="4" ry="3" fill="#494846" />
                <ellipse id="Ellipse 1_7" cx="278.984" cy="7.59344" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 4_7" cx="323.683" cy="45.4903" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 2_7" cx="278.984" cy="26.5419" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 4_8" cx="278.984" cy="45.4903" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 9" cx="100.19" cy="117.989" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 11" cx="144.889" cy="117.989" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 13" cx="189.587" cy="117.989" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 1_8" cx="323.683" cy="7.59344" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 2_8" cx="323.683" cy="26.5419" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 3_7" cx="323.683" cy="64.4388" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 1_9" cx="368.381" cy="7.59344" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 2_9" cx="368.381" cy="26.5419" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 3_8" cx="368.381" cy="64.4388" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 4_9" cx="368.381" cy="45.4903" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 5_7" cx="368.381" cy="83.3872" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 6_7" cx="368.381" cy="102.336" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 5_8" cx="323.683" cy="83.3872" rx="4.57143" ry="3.7073" fill="#494846" />
              </g>
              <g id="two">
                <ellipse id="Ellipse 1_10" cx="33.1429" cy="7.59344" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 2_10" cx="33.1429" cy="26.5419" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 3_9" cx="33.1429" cy="64.4388" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 4_10" cx="33.1429" cy="45.4903" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 5_9" cx="33.1429" cy="83.3872" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 6_8" cx="33.1429" cy="102.336" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 1_11" cx="77.8413" cy="7.59344" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 2_11" cx="77.8413" cy="26.5419" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 3_10" cx="77.8413" cy="64.4388" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 4_11" cx="77.8413" cy="45.4903" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 5_10" cx="77.8413" cy="83.3872" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 6_9" cx="77.8413" cy="102.336" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 1_12" cx="122.54" cy="7.59344" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 2_12" cx="122.54" cy="26.5419" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 3_11" cx="122.54" cy="64.4388" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 4_12" cx="122.54" cy="45.4903" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 5_11" cx="122.54" cy="83.3872" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 6_10" cx="122.54" cy="102.336" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 1_13" cx="167.238" cy="7.59344" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 2_13" cx="167.238" cy="26.5419" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 3_12" cx="167.238" cy="64.4388" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 4_13" cx="167.238" cy="45.4903" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 5_12" cx="167.238" cy="83.3872" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 6_11" cx="167.238" cy="102.336" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 1_14" cx="211.936" cy="7.59344" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 2_14" cx="211.936" cy="26.5419" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 3_13" cx="211.936" cy="64.4388" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 4_14" cx="211.936" cy="45.4903" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 5_13" cx="211.936" cy="83.3872" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 6_12" cx="211.936" cy="102.336" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 1_15" cx="256.635" cy="7.59344" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 2_15" cx="256.635" cy="26.5419" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 3_14" cx="256.635" cy="64.4388" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 4_15" cx="256.635" cy="45.4903" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 1_16" cx="301.333" cy="7.59344" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 2_16" cx="301.333" cy="26.5419" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 3_15" cx="301.333" cy="64.4388" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 4_16" cx="301.333" cy="45.4903" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 1_17" cx="346.032" cy="7.59344" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 2_17" cx="346.032" cy="26.5419" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 3_16" cx="346.032" cy="64.4388" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 4_17" cx="346.032" cy="45.4903" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 5_14" cx="346.032" cy="83.3872" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 6_13" cx="346.032" cy="102.336" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 1_18" cx="390.73" cy="7.59344" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 2_18" cx="390.73" cy="26.5419" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 3_17" cx="390.73" cy="64.4388" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 4_18" cx="390.73" cy="45.4903" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 5_15" cx="390.73" cy="83.3872" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 6_14" cx="390.73" cy="102.336" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 8" cx="77.8413" cy="117.989" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 10" cx="122.54" cy="117.989" rx="4.57143" ry="3.7073" fill="#494846" />
                <ellipse id="Ellipse 12" cx="167.238" cy="117.989" rx="4.57143" ry="3.7073" fill="#494846" />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_4_176">
                <rect width="401" height="151" fill="white" />
              </clipPath>
            </defs>
          </svg></div>
          <div className="tools-body">
            <ul>
            <li>
                <Link to="/canvas"><div className="tools-outer" >
                  <div className="tools-page-box">
                    <div className="tools-page-box"  >
                      <div className="replacement"></div>
                      {/* <img src={require("../static/works-icon-min.webp")} alt="" /> */}
                    </div>
                  </div>
                  <p><span>Drawing App</span></p>

                </div></Link>
                <a href="https://lostteachats.netlify.app"><div className="tools-outer" >
                  <div className="tools-page-box">
                    <div className="tools-page-box"  >
                    <div className="replacement"></div>
                      {/* <img src={require("../static/works-icon-min.webp")} alt="" /> */}
                    </div>
                  </div>
                  <p><span>LostTea chats</span></p>

                </div></a>
              </li>
              <li>
                <Link to="/qrgenerator"><div className="tools-outer" >
                  <div className="tools-page-box">
                    <div className="tools-page-box"  >
                    <div className="replacement"></div>
                      {/* <img src={require("../static/works-icon-min.webp")} alt="" /> */}
                    </div>
                  </div>
                  <p><span>QR Generator</span></p>

                </div></Link>
              </li>
              <li>
                <Link to="/passwordgenerator"><div className="tools-outer" >
                  <div className="tools-page-box">
                    <div className="tools-page-box"  >
                    <div className="replacement"></div>
                      {/* <img src={require("../static/works-icon-min.webp")} alt="" /> */}
                    </div>
                  </div>
                  <p><span>Password Generator</span></p>

                </div></Link>
                <Link to="/clipboard"><div className="tools-outer" >
                  <div className="tools-page-box">
                    <div className="tools-page-box"  >
                    <div className="replacement"></div>
                      {/* <img src={require("../static/works-icon-min.webp")} alt="" /> */}
                    </div>
                  </div>
                  <p><span>Online Clipboard</span></p>

                </div></Link>
              </li>
            </ul>

            {/* <img src={require("../static/getout2-min.webp")} alt="" /> */}
          </div>
        </motion.div>
      </motion.div>
    )
  }
}
