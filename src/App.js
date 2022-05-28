
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Landing from './components/Landing';
import Home from './components/Home';
import Profile from './components/Profile';
import Works from './components/Works';
import Contact from './components/Contact';
import Tools from './components/Tools';
function App() {
  return (
    <div className="App">
     <div className="screen">
     <Router>    
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/works" element={<Works/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/tools" element={<Tools/>} />

        {/* <Route path="/work" element={<Work/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/pinups" element={<Pinups/>} /> */}
      </Routes>
    </Router>
     </div>
    </div>
  );
}

export default App;
