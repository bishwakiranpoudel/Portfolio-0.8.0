import React, { Component } from 'react'
import {motion} from "framer-motion";


export default class Landing extends Component {

  render() {
      const today =['sun', 'mon' ,'tue','wed', 'thurs','fri','sat'];
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date = new Date().getDate();
    const month = months[new Date().getMonth()];
    const day = today[new Date().getDay()];
    const hour =(new Date().getHours()<10?'0':'') + new Date().getHours();
    const min =  (new Date().getMinutes()<10?'0':'') + new Date().getMinutes();
    
    return (
      <div className='landing-filter'>
          <div className="clock">
          <div className="time"> {hour} : {min}</div>
          <div className="date">{day}, {month} {date}</div>
          </div>
         <div className="landing-body">
         <img className='gr' src={require("./GR.png")} alt="" />
          <img className='name' src={require("./name.png")}alt="" />
         <div className="enter" onClick={()=> {window.location.pathname="/home" }}>
         <ul >
              <li className='entr'><span>Enter</span></li>
              <li><div className="land"></div></li>
          </ul>
         </div>
         </div>
      </div>
    )
  }
}
