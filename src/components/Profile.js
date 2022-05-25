import React, { Component } from 'react'

export default class Profile extends Component {
  render() {
    return (
        <div class="profile-page">
        <div class="mathi">
            <div class="header">
            <img className="back" src={require("./back.png")} alt="" onClick={()=> {window.location.pathname="/home" }} />
                <div className="circle"><img src={require("./profile-icon.png")} alt="" /></div>
                <div class="left"></div>
                <div class="right"></div>
            </div>
            <div class="hero">
                <div class="one"><div class="avtr"></div></div>
                <div class="two"></div>
            </div>
           </div>
           <div class="main"></div>
    </div>
    )
  }
}
