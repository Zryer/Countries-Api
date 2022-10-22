import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import { Link } from 'react-router-dom';
import './CountryCard.css';

const CountryCard = ({ countryData, saveCountry, objectKey}) => {

  return (
    countryData
      ?
      <Link className="countryCardLink" to={`/Country/${countryData.name.common}`}>
      <Card id="countryCard" onClick={() => {{saveCountry(objectKey.length - 1)} }}>
        <Card.Img variant="top" src={countryData ? countryData.flags.svg : ""} alt="" />
        <Card.Body style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Card.Title>{countryData ? countryData.name.common : ""}</Card.Title>
        </Card.Body>
      </Card>
      </Link>
      :
      <></>
  )
};

export default CountryCard;