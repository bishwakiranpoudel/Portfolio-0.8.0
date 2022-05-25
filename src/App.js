
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Landing from './components/Landing';
import Home from './components/Home';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
     <div className="screen">
     <Router>    
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />

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
