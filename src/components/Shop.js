import React, { Component } from 'react'

export default class Shop extends Component {
  render() {
    return (
      <div className="shop-page">
          <div className="shop-header"><div className="back-shop"><img  src={require("./back.png")} alt="" onClick={()=> {window.location.pathname="/home" }} /></div></div>
          <div className="shop-body"></div>
      </div>
    )
  }
}
