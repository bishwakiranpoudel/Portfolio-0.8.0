import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-page">
          <div className="contact-top">
              <div className="oval"><div className="back-contact"><img  src={require("./back.png")} alt="" onClick={()=> {window.location.pathname="/home" }} /></div><div className="dance-contact"><img src={require("./contact-icon.png")} alt="" /></div></div>
          </div>
          <div className="contact-body">
          <form>
          <div className="divider"></div>
          <div className="input">from: <input type="text" name="from"  /></div>
          <div className="divider"></div>
          <div className="input">email: <input type="email" name="email"  /></div>
          <div className="divider"></div>
          <div className="textarea">message: <textarea name="message"  ></textarea></div>
          <div className="send-btn">
              <button type="submit"><img src={require("./send.png")} alt="" /></button>
          </div>
          </form>
          </div>
      </div>
    )
  }
}
