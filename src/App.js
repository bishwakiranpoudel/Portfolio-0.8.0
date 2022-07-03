
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import LiquidSwipe from 'react-liquidswipe';

function App() {
  let components=[];
  components.push(
    <>
     <div className="App">
      
      <div className="border-screen">
      <div className="screen">
         <Router>
           
             <AnimatedRoutes/>
          
         </Router>
       </div>
      </div>
     </div>
    </>
  );
  components.push(
    <>
     <div className="App2" >
      
      <div className="border-screen">
      <div className="screen">
         <Router>
           
             <AnimatedRoutes/>
          
         </Router>
       </div>
      </div>
     </div>
    </>
  );

  
  return <LiquidSwipe components={components}/>;
}

export default App;
