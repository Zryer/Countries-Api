import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useNavigate, useParams, redirect  } from 'react-router-dom';
import './SavedCard.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const SavedCard = ({ countryData }) => {

  const navigate = useNavigate();

  const remove = () => {
    window.sessionStorage.removeItem(`${countryData.name.common}`);
    window.location.reload()
    console.log(countryData.name.common)
  }

  const move = () => {
    navigate(`${`/Country/${countryData.name.common}`}`)
  }

  return (
    countryData
      ?
      <Col className="noMP" style= {{ display: "flex", justifyContent: "center" }}>
        <Col xs={11} className="noMP">
          <Card id="savedCard" onClick={move} style={{ color: "red", cursor: "pointer" }}>
            <Card.Img variant="top" src={countryData ? countryData.flags.svg : ""} alt="" />
            <Card.Body>
              <Card.Title>{countryData ? countryData.name.common : ""}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={1} className="noMP"><Button className="deleteButton" onClick={remove} variant="danger">X</Button></Col>
      </Col>
      :
      <h1>Let's get started!</h1>
  )
};

export default SavedCard;