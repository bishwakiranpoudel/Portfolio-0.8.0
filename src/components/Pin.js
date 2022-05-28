import React, { Component } from 'react'

export default class Pin extends Component {
  render() {
    return (
     <div className="pin-page">
         <div className="pin-header"><div className="back-pin"><img  src={require("./back.png")} alt="" onClick={()=> {window.location.pathname="/home" }} /></div></div>
         <div className="pin-body"></div>
     </div>
    )
  }
}
