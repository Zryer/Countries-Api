import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Container from 'react-bootstrap/Container';

const Navi = () => {
  return (
    <Navbar expand="lg" id="mainNav" style={{ height: "6vh", zIndex: "3"}}>
      <Navbar.Brand><Link to="" className="naviLink">Home</Link></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse style={{justifyContent: "flex-end", marginRight: "3rem"}}>
            <Nav>
                <Link to="Country" className="naviLink">Recently Seen</Link>
                <Link to="Search" className="naviLink">Search</Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Navi;