import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>

         <div className="home">
         <ul>
              <li><div className="profile" onClick={()=> {window.location.pathname="/profile" }}>
                  <div className="profile-box">
                      <img src={require("./profile-icon.png")} alt="" />
                  </div>
                  <p><span>Profile</span></p>
                </div></li>
              <li><div className="works">
              <div className="work-box">
                      <img src={require("./works-icon.png")} alt="" />
                  </div>
                  <p><span>Works</span></p>
                
            </div></li>
          </ul>
          <ul>
              <li><div className="contact">
                  <div className="contact-box">
                      <img src={require("./contact-icon.png")} alt="" />
                  </div>
                  <p><span>Contacts</span></p>
                </div></li>
              <li><div className="pin">
              <div className="pin-box">
                      <img src={require("./pinup-icon.png")} alt="" />
                  </div>
                  <p><span>Pin Ups</span></p>
                
            </div></li>
          </ul>
         </div>
         <div className="back">
          <img className='gr' src={require("./GR.png")} alt="" />
          <img className='name' src={require("./name.png")}alt="" />
          <p className='cr'><span>@2022 Bishwa</span></p>
          </div>

      </div>
    )
  }
}
