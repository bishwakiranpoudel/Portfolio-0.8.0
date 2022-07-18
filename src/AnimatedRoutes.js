import React, { Component } from 'react';
import Landing from './components/Landing';
import Home from './components/Home';
import Profile from './components/Profile';
import Works from './components/Works';
import Contact from './components/Contact';
import Tools from './components/Tools';
import Pin from './components/Pin';
import Shop from './components/Shop';

import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profileloader from './components/profile-loader';
import PasswordGenerator from './components/password generator';
import Pindetail from './components/pindetail';
import Canvas from './components/canvas';
import Qrgenerator from './components/qrgenerator';




export default function AnimatedRoutes() {
    const location = useLocation();
    return (

       <AnimatePresence exitBeforeEnter>
            <Routes location={location}
            key={location.pathname}>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/pin" element={<Pin />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/profileloader" element={<Profileloader/>} />
            <Route path="/pindetail" element={<Pindetail />} />
           

            <Route path="/passwordgenerator" element={<PasswordGenerator/>}/>
            <Route path="/canvas" element={<Canvas/>}/>
            <Route path="/qrgenerator" element={<Qrgenerator/>}/>

            



        </Routes>
       </AnimatePresence>

    )
}
