
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes';

function App() {
  
  return (
    <div className="App">
      
     <div className="border-screen">
     <div className="screen">
        <Router>
          
            <AnimatedRoutes/>
         
        </Router>
      </div>
     </div>
    </div>
  );
}

export default App;
