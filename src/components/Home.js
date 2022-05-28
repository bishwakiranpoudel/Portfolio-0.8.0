import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div className='filter-home'>

         <div className="home">
         <ul>
              <li><div className="profile" onClick={()=> {window.location.pathname="/profile" }}>
                  <div className="profile-box">
                      <img src={require("./profile-icon.png")} alt="" />
                  </div>
                  <p><span>Profile</span></p>
                </div></li>
              <li><div className="works" onClick={()=> {window.location.pathname="/works" }}>
              <div className="work-box">
                      <img src={require("./works-icon.png")} alt="" />
                  </div>
                  <p><span>Works</span></p>
                
            </div></li>
            <li><div className="shop" onClick={()=> {window.location.pathname="/shop" }}>
              <div className="shop-box">
                      <img src={require("./shop-icon.png")} alt="" />
                  </div>
                  <p><span>shop</span></p>
                
            </div></li>
          </ul>
          <ul>
              <li><div className="contact" onClick={()=> {window.location.pathname="/contact" }}>
                  <div className="contact-box">
                      <img src={require("./contact-icon.png")} alt="" />
                  </div>
                  <p><span>Contact</span></p>
                </div></li>
              <li><div className="pin"onClick={()=> {window.location.pathname="/pin" }}>
              <div className="pin-box">
                      <img src={require("./pinup-icon.png")} alt="" />
                  </div>
                  <p><span>Pin Ups</span></p>
                
            </div></li>
            <li><div className="tool"onClick={()=> {window.location.pathname="/tools" }}>
              <div className="tool-box">
                      <img src={require("./tools-icon.png")} alt="" />
                  </div>
                  <p><span>Tools</span></p>
                
            </div></li>
          </ul>
         </div>
         <div className="back">
          <img className='gr2' src={require("./GR.png")} alt="" />
          <img className='name' src={require("./name.png")}alt="" />
          <p className='cr'><span>@2022 Bishwa</span></p>
          </div>

      </div>
    )
  }
}
