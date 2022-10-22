import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ContinentIndex = () => {
  return (
    <Container>
      <Row>
        <Col xs={4}>
          <Link to="Americas">
            <Card id="countryCard" style={{ color: "red", cursor: "pointer" }}>
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>Americas</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col>
          <Link to="Asia">
            <Card id="countryCard" style={{ color: "red", cursor: "pointer" }}>
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>Asia</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col>
          <Link to="Europe">
            <Card id="countryCard" style={{ color: "red", cursor: "pointer" }}>
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>Europe</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col>
          <Link to="Africa">
            <Card id="countryCard" style={{ color: "red", cursor: "pointer" }}>
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>Africa</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col>
          <Link to="Oceania">
            <Card id="countryCard" style={{ color: "red", cursor: "pointer" }}>
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>Oceania</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default ContinentIndex