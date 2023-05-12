import {Link} from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';
import "../styles/Navbar.css"


function Navbar() {
    

  return (
    <div className="navbar">
        <div className="title">
        <h1>Laura Jane</h1>
        <a href="https://www.instagram.com/laurajaneportfolio" target="_blank" rel="noopener noreferrer"><InstagramIcon fontSize="large"/></a>
        </div>
        <div className="navigation">
        <Link className="links" to="/">Home</Link>
        <Link className="links" to="/about">About</Link>
        <div className="dropdown">
      <button className="dropbtn links">Projects 
     </button>
      <div className="dropdown-content">
      <Link to="/Outreaching the tide">Outreaching the Tide</Link>
      <Link to="/End of Oceans">End of Oceans</Link>
      <Link to="/Message in a Bottle">Message in a Bottle</Link>
      <Link to="/Fumes">Fumes</Link>
      <Link to="/Oxygen">Oxygen</Link>
      <Link to="/Reconnecting our Roots">Reconnecting our Roots</Link>
      <Link to="/Stepping Stones">Stepping Stones</Link>
      <Link to="/Plume">Plume</Link>
      <Link to="Studio Work">Studio Work</Link>

     </div>
    </div>

        
        </div>
    </div>
  )
}

export default Navbar