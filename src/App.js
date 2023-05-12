import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import './App.css'
import Outreaching from './pages/Projects/Outreaching'
import EndOfOceans from './pages/Projects/EndOfOceans'
import MessageInABottle from './pages/Projects/MessageInABottle'
import Fumes from './pages/Projects/Fumes'
import Oxygen from './pages/Projects/Oxygen'
import ReconnectingOurRoots from './pages/Projects/ReconnectingOurRoots'
import SteppingStones from './pages/Projects/SteppingStones'
import Plume from './pages/Projects/Plume'
import Studio from './pages/Projects/Studio'

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element ={<About />} />
      <Route path="Outreaching the Tide" element={<Outreaching />} />
      <Route path="End of Oceans" element={<EndOfOceans/>} />
      <Route path="Message in a bottle" element={<MessageInABottle />} />
      <Route path="Fumes" element={<Fumes />} />
      <Route path="Oxygen" element={<Oxygen />} />
      <Route path="Reconnecting our Roots" element={<ReconnectingOurRoots />} />
      <Route path="Stepping Stones" element={<SteppingStones />} />
      <Route path="Plume" element={<Plume/>} />
      <Route path="Studio Work" element={<Studio />} />
      
    </Routes>
    </Router>
    </div>
  );
}

export default App;
