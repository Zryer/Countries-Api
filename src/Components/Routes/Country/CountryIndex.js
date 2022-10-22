import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import CountryCard from "../../CountryCard/CountryCard";

const CountryIndex = () => {

  let listData = "";

  const oldKeys = Object.keys(window.sessionStorage);

  const arrData = () => {

    let newArr = [];

    for (let i = 0; i <= oldKeys.length - 1; i++) {
      newArr.push(JSON.parse(window.sessionStorage.getItem(oldKeys[i])));
    }

    return newArr;
  }

  const data = arrData();
  const newKeys = Object.keys(data);
  const newerKeys = [...newKeys];

  const saveCountryData = () => {
    return
}

  data.sort((a, b) => (a.name.common < b.name.common) ? 1 : -1)

  if (data.length > 0) {
    listData = data.map(() => <Col key={newerKeys.pop()} xs={12} md={4} lg={3} style={{ marginTop: "1rem"}}><CountryCard countryData={data[newKeys.pop()]} saveCountry={saveCountryData} /></Col>)
    return (
      <Container>
        <Row>
        {listData}
        </Row>
      </Container>
    )
  } else {
    return (
      <div>
        <h1>This is where I wanna be</h1>
      </div>

    )
  }

}

export default CountryIndex;