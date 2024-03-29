import React, { Component } from 'react';
import {motion} from "framer-motion";
import { Link } from 'react-router-dom';

export default class Profile extends Component {
  render() {
    return (
        <motion.div class="profile-page" >
            <motion.div initial={{display:'block',zIndex:1000}} animate={{zIndex:0,y:0,transitionEnd: {
            display: "none",
          },}} transition={{duration:1}}>
            <div className="works" >
            <motion.div className="profile-box" initial={{scale:1,x:-100 }} animate={{scale:8, x:10,y:200}}transition={{duration:0.5}}>
              <motion.img src={require("../static/profile-icon-min.webp")} alt="" animate={{scale:0.1, x:18}}transition={{duration:0.5}} />
            </motion.div>
            

          </div>
            </motion.div>
       <motion.div initial={{display:"none"}} animate={{opacity:1,transitionEnd: {
            display: "block",
          },}} transition={{duration:1}}>
       <div class="mathi">
            <div class="header">
            <Link to={'/home'}><img className="bck" src={require("../static/back-min.webp")} alt=""  /></Link>
                <motion.div className="circle" ><img src={require("../static/profile-icon-min.webp")} alt="" /></motion.div>
                <div class="left"></div>
                <div class="right"></div>
            </div>
            <div class="hero">
                <div class="one"><div class="avtr">
                    </div>
                    <span>Bishwa Kiran</span>
                    <div className="socials">
                       <a href="https://www.instagram.com/vishwakiranpoudel/"> <div className="insta"><i><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 2.70706C17.6805 2.70706 18.1125 2.72346 19.5672 2.78909C20.9125 2.84924 21.6399 3.07346 22.1266 3.26487C22.7719 3.51643 23.2313 3.81174 23.7125 4.29299C24.1938 4.77424 24.4946 5.23362 24.7406 5.87893C24.9266 6.36565 25.1563 7.09299 25.2164 8.4383C25.2821 9.89299 25.2985 10.325 25.2985 14.0055C25.2985 17.686 25.2821 18.118 25.2164 19.5727C25.1563 20.918 24.9321 21.6453 24.7406 22.1321C24.4891 22.7774 24.1938 23.2367 23.7125 23.718C23.2313 24.1992 22.7719 24.5 22.1266 24.7461C21.6399 24.9321 20.9125 25.1617 19.5672 25.2219C18.1125 25.2875 17.6805 25.3039 14 25.3039C10.3196 25.3039 9.88752 25.2875 8.43284 25.2219C7.08752 25.1617 6.36018 24.9375 5.87346 24.7461C5.22815 24.4946 4.76877 24.1992 4.28752 23.718C3.80627 23.2367 3.50549 22.7774 3.2594 22.1321C3.07346 21.6453 2.84377 20.918 2.78362 19.5727C2.71799 18.118 2.70159 17.686 2.70159 14.0055C2.70159 10.325 2.71799 9.89299 2.78362 8.4383C2.84377 7.09299 3.06799 6.36565 3.2594 5.87893C3.51096 5.23362 3.80627 4.77424 4.28752 4.29299C4.76877 3.81174 5.22815 3.51096 5.87346 3.26487C6.36018 3.07893 7.08752 2.84924 8.43284 2.78909C9.88752 2.71799 10.3196 2.70706 14 2.70706ZM14 0.224243C10.2594 0.224243 9.78909 0.240649 8.31799 0.306274C6.85237 0.371899 5.85159 0.607056 4.97659 0.946118C4.06877 1.29612 3.30315 1.7719 2.53752 2.53752C1.7719 3.30315 1.30159 4.07424 0.946118 4.97659C0.607056 5.85159 0.371899 6.85237 0.306274 8.32346C0.240649 9.78909 0.224243 10.2594 0.224243 14C0.224243 17.7406 0.240649 18.211 0.306274 19.6821C0.371899 21.1477 0.607056 22.1485 0.946118 23.0289C1.29612 23.9367 1.7719 24.7024 2.53752 25.468C3.30315 26.2336 4.07424 26.7039 4.97659 27.0594C5.85159 27.3985 6.85237 27.6336 8.32346 27.6992C9.79455 27.7649 10.2594 27.7813 14.0055 27.7813C17.7516 27.7813 18.2164 27.7649 19.6875 27.6992C21.1531 27.6336 22.1539 27.3985 23.0344 27.0594C23.9422 26.7094 24.7078 26.2336 25.4735 25.468C26.2391 24.7024 26.7094 23.9313 27.0649 23.0289C27.4039 22.1539 27.6391 21.1531 27.7047 19.6821C27.7703 18.211 27.7867 17.7461 27.7867 14C27.7867 10.2539 27.7703 9.78909 27.7047 8.31799C27.6391 6.85237 27.4039 5.85159 27.0649 4.97112C26.7149 4.06331 26.2391 3.29768 25.4735 2.53206C24.7078 1.76643 23.9367 1.29612 23.0344 0.940649C22.1594 0.601587 21.1586 0.366431 19.6875 0.300806C18.211 0.240649 17.7406 0.224243 14 0.224243Z" fill="#3D3B39"></path><path d="M14 6.92346C10.0953 6.92346 6.92346 10.0899 6.92346 14C6.92346 17.9102 10.0953 21.0766 14 21.0766C17.9047 21.0766 21.0766 17.9047 21.0766 14C21.0766 10.0953 17.9047 6.92346 14 6.92346ZM14 18.5938C11.4625 18.5938 9.40627 16.5375 9.40627 14C9.40627 11.4625 11.4625 9.40627 14 9.40627C16.5375 9.40627 18.5938 11.4625 18.5938 14C18.5938 16.5375 16.5375 18.5938 14 18.5938Z" fill="#3D3B39"></path><path d="M21.3555 8.29611C22.2677 8.29611 23.0071 7.55668 23.0071 6.64454C23.0071 5.73241 22.2677 4.99298 21.3555 4.99298C20.4434 4.99298 19.704 5.73241 19.704 6.64454C19.704 7.55668 20.4434 8.29611 21.3555 8.29611Z" fill="#3D3B39"></path></svg></i><p>instagram</p></div></a>
                        <a href="https://www.linkedin.com/in/bishwa-kiran-poudel-39768120a/"><div className="linked"><i><svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path d="M 15 3 C 8.371094 3 3 8.371094 3 15 C 3 21.628906 8.371094 27 15 27 C 21.628906 27 27 21.628906 27 15 C 27 8.371094 21.628906 3 15 3 Z M 10.496094 8.402344 C 11.339844 8.402344 11.898438 8.964844 11.898438 9.710938 C 11.898438 10.460938 11.339844 11.019531 10.402344 11.019531 C 9.5625 11.023438 9 10.460938 9 9.710938 C 9 8.964844 9.5625 8.402344 10.496094 8.402344 Z M 12 20 L 9 20 L 9 12 L 12 12 Z M 22 20 L 19.175781 20 L 19.175781 15.628906 C 19.175781 14.417969 18.421875 14.140625 18.140625 14.140625 C 17.859375 14.140625 16.917969 14.324219 16.917969 15.628906 C 16.917969 15.8125 16.917969 20 16.917969 20 L 14 20 L 14 12 L 16.917969 12 L 16.917969 13.117188 C 17.292969 12.464844 18.046875 12 19.460938 12 C 20.871094 12 22 13.117188 22 15.628906 Z M 22 20 "/></svg></i><p>linked in</p></div></a>
                    </div>
                    </div>
                <div class="two"></div>
            </div>
           </div>
           <div class="main">
           Nepal-based Developer and Designer, born in 2003. Draws a humorous world view with keywords and character sets provided. he has a wide range of expression methods including sketches, coding, illustrator and editing. he has been working in various genres and media such as advertising, marketing, product design, programming and co-founded a company called LinkBinary which provides its services, both in Nepal and abroad.
           </div>
       </motion.div>
    </motion.div>
    )
  }
}
