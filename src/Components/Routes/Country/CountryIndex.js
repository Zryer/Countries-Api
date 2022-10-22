import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import CountryCard from "../../CountryCard/CountryCard";
import SavedCard from "../../SavedCard/SavedCard";

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

  const newKeys = Object.keys(data)

  data.sort((a, b) => (a.name.common < b.name.common) ? 1 : -1)

  if (data.length > 0) {
    listData = data.map(() => <Col xs={12} md={4} lg={3} style={{ marginTop: "1rem"}}><SavedCard key={[...newKeys]} countryData={data[newKeys.pop()]} /></Col>)
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
        <h1>Hello this is the index</h1>
      </div>

    )
  }

}

export default CountryIndex;