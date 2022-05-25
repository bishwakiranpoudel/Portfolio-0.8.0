import React, { Component } from 'react'

export default class Landing extends Component {
  render() {
    return (
      <div>
          <img className='gr' src={require("./GR.png")} alt="" />
          <img className='name' src={require("./name.png")}alt="" />
         <div className="enter" onClick={()=> {window.location.pathname="/home" }}>
         <ul >
              <li className='entr'><span>Enter</span></li>
              <li><div className="land"></div></li>
          </ul>
         </div>
      </div>
    )
  }
}
