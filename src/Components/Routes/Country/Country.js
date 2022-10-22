import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';

const Country = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const result = JSON.parse(window.sessionStorage.getItem(`${id}`));

  const remove = () => {
    window.sessionStorage.removeItem(`${id}`);
    navigate(-1)
  }

  if (!result) {
    return (
      <h2>No country yet!</h2>
    )
  }

  const newCapital = "capital";
  const languages = "languages";
  let languageNames;
  let capitalName;

  const { [languages]: language, [newCapital]: capital, population, name: { official }, flags: { svg }, continents } = result;



  if(language, capital) {
    languageNames = (Object.values(language).join(" and "));
    capitalName = (Object.values(capital))
  } else {
    languageNames = "No spoken language"
    capitalName = "No capital"
  }

  return (
    <Container>
      <Row style={{ marginTop: "2rem" }}>
        
        <Col xs={12} style={{ display: "flex", justifyContent: "center" }}>
          <Image fluid src={svg} style={{ width: "200px", height: "auto" }} />
        </Col>
        
        <Col xs={12} style={{ textAlign: "center", fontSize: "3rem" }}>
          {official}
        </Col>
        <Col xs={12} md={6} style={{ textAlign: "center" }}>
          The current population is: {population}
        </Col>
        <Col xs={12} md={6} style={{ textAlign: "center" }}>
          Capital: {capitalName}
        </Col>
        <Col xs={12} md={6} style={{ textAlign: "center" }}>
          The language spoken is: {languageNames}
        </Col>
        <Col xs={12} md={6} style={{ textAlign: "center" }}>
          Continent: {continents}
        </Col>
        <Col xs={12} md={6} style={{ textAlign: "center" }}>
          Capital: {}
        </Col>
        <Col xs={12} md={6} style={{ textAlign: "center" }}>
          Capital: {capital}
        </Col>
        <Col xs={12} md={6} style={{ textAlign: "center" }}>
          Capital: {capital}
        </Col>
        <Col xs={12} md={6} style={{ textAlign: "center" }}>
          Capital: {capital}
        </Col>


      </Row>
      <Button onClick={remove} variant="danger">X</Button>
    </Container>
  )
}

export default Country;