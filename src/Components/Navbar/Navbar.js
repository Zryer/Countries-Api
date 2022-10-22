import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Navi = () => {
  return (
    <Navbar expand="lg" id="mainNav" style={{ height: "6vh", zIndex: "3"}} sticky="top">
      <Navbar.Brand><Link to="" className="naviLink">Home</Link></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse style={{justifyContent: "flex-end", marginRight: "3rem"}}>
            <Nav>
                <Link to="Continent" className="naviLink">Continents</Link>
                <Link to="Country" className="naviLink">Recently Seen</Link>
                <Link to="Search" className="naviLink"><FontAwesomeIcon icon={faMagnifyingGlass}/></Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Navi;