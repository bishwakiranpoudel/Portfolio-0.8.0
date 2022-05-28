import React, { Component } from 'react'

export default class Tools extends Component {
  render() {
    return (
      <div className="tools-page">
          <div className="tools-header"><div className="back-contact"><img  src={require("./back.png")} alt="" onClick={()=> {window.location.pathname="/home" }} /></div></div>
          <div className="tools-body"></div>
      </div>
    )
  }
}
