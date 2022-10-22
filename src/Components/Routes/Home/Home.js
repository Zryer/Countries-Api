import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Filler from '../../Assets/Images/filler.jpg';
import Zach from '../../Assets/Images/zachpose.jpg';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Home = () => {




  return (
    <Container fluid>

      <Row style={{ position: "absolute", left: "0", right: "0", top: "15vh", textAlign: "center", marginLeft: "auto", marginRight: "auto", zIndex: "2" }}>
        <Col xs={12}>
          <h1 style={{ fontSize: "2.5rem" }}>Countries of the world!</h1>
        </Col>
        <Col xs={12}>
          <h6>Learn all about the countries of the world!</h6>
        </Col>
      </Row>

      <Row style={{ display: "flex", justifyContent: "center" }}>
        <Col style={{ padding: "0" }} xs={12}>
          <Carousel style={{ height: "64vh" }} interval={null} fade={true}>
            <Carousel.Item>
              <Link to="Continent/Americas">
                <Image src={Zach} className="d-block w-100" style={{ objectFit: "cover", objectPosition: "center", height: "64vh" }} />
              </Link>
              <Carousel.Caption>
                <h3>Americas</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Link to="Continent/Asia">
                <Image src={Filler} className="d-block w-100" style={{ objectFit: "cover", objectPosition: "center", height: "64vh" }} />
              </Link>
              <Carousel.Caption>
                <h3>Asia</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Link to="Continent/Europe">
                <Image src={Filler} className="d-block w-100" style={{ objectFit: "cover", objectPosition: "center", height: "64vh" }} />
              </Link>
              <Carousel.Caption>
                <h3>Europe</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Link to="Continent/Africa">
                <Image src={Filler} className="d-block w-100" style={{ objectFit: "cover", objectPosition: "center", height: "64vh" }} />
              </Link>
              <Carousel.Caption>
                <h3>Africa</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Link to="Continent/Oceania">
                <Image src={Filler} className="d-block w-100" style={{ objectFit: "cover", objectPosition: "center", height: "64vh" }} />
              </Link>
              <Carousel.Caption>
                <h3>Oceania</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      <Row style={{ textAlign: "center", height: "20vh", marginLeft: "auto", marginRight: "auto" }}>
        <Col id="searchButtonContainer">
          <Link to="Search"><Button id="searchButton">Start Your Search Now!</Button></Link>
        </Col>
      </Row>
      <Row>
        <Col className="contactButtons" style={{ height: "10vh" }}>
          <Button className="homeButton" aria-label="Github" size="lg" style={{ backgroundColor: "#333", border: "none", borderRadius: "50px" }} href="https://github.com/Zryer" target="_blank"><FontAwesomeIcon icon={faGithub} className="buttonIcon" style={{ color: "#FFF", fontSize: "3rem", margin: "0 1rem 0 1rem" }} /></Button>
          <Button className="homeButton" aria-label="Linkedin" size="lg" style={{ backgroundColor: "#0A66C2", border: "none", borderRadius: "50px" }} href="https://www.linkedin.com/in/zachary-fisher-1b6448221/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="buttonIcon" style={{ color: "#FFF", fontSize: "3rem", margin: "0 1rem 0 1rem" }} /></Button>
          <Button className="homeButton" aria-label="Email" size="lg" style={{ backgroundColor: "#D5DBDB", border: "none", borderRadius: "50px" }} href="mailto:zacharyfisher808@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelopeOpen} className="buttonIcon" style={{ color: "#34495E", fontSize: "3rem", margin: "0 1rem 0 1rem" }} /></Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Home